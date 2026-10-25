package com.anasnader.personaltraining;

import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.graphics.Color;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.view.WindowManager;
import android.webkit.CookieManager;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;

/**
 * Anas Nader — Personal Training.
 * Wraps the live portal in a WebView. Sign-in "Remember me" is kept in the
 * WebView's persistent local storage, so the user stays signed in after the
 * app is closed or the phone restarts, until they press Sign out.
 */
public class MainActivity extends Activity {

    private static final String HOST = "ananader1977.github.io";
    private static final String PATH = "/personal_training";
    private static final String START_URL = "https://" + HOST + PATH + "/";

    private WebView web;
    private FrameLayout root;
    private View customView;
    private WebChromeClient.CustomViewCallback customViewCallback;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        root = new FrameLayout(this);
        root.setBackgroundColor(Color.parseColor("#070707"));
        web = new WebView(this);
        web.setBackgroundColor(Color.parseColor("#070707"));
        root.addView(web, new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));
        setContentView(root);

        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);          // localStorage: Remember me, progress, saved videos
        s.setDatabaseEnabled(true);
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setLoadWithOverviewMode(true);
        s.setUseWideViewPort(true);
        s.setSupportZoom(false);
        s.setCacheMode(isOnline() ? WebSettings.LOAD_DEFAULT : WebSettings.LOAD_CACHE_ELSE_NETWORK);
        s.setUserAgentString(s.getUserAgentString() + " AnasNaderTrainingApp/1.0");

        CookieManager cm = CookieManager.getInstance();
        cm.setAcceptCookie(true);
        cm.setAcceptThirdPartyCookies(web, true);   // YouTube embeds

        web.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                return handleUrl(request.getUrl());
            }

            @Override
            public void onReceivedError(WebView view, WebResourceRequest request, WebResourceError error) {
                if (request.isForMainFrame()) showOffline();
            }
        });

        web.setWebChromeClient(new WebChromeClient() {
            @Override
            public void onShowCustomView(View view, CustomViewCallback callback) {
                if (customView != null) { callback.onCustomViewHidden(); return; }
                customView = view;
                customViewCallback = callback;
                root.addView(view, new FrameLayout.LayoutParams(
                        ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));
                web.setVisibility(View.GONE);
                getWindow().addFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN);
            }

            @Override
            public void onHideCustomView() {
                exitFullscreen();
            }
        });

        if (savedInstanceState != null) {
            web.restoreState(savedInstanceState);
        } else {
            web.loadUrl(START_URL);
        }
    }

    /** Keep the portal inside the app; send WhatsApp, YouTube and other links to their apps. */
    private boolean handleUrl(Uri uri) {
        String scheme = uri.getScheme() == null ? "" : uri.getScheme();
        String host = uri.getHost() == null ? "" : uri.getHost();
        String path = uri.getPath() == null ? "" : uri.getPath();

        if (scheme.equals("https") && host.equals(HOST) && path.startsWith(PATH)) return false;

        try {
            Intent intent;
            if (scheme.equals("intent")) {
                intent = Intent.parseUri(uri.toString(), Intent.URI_INTENT_SCHEME);
            } else {
                intent = new Intent(Intent.ACTION_VIEW, uri);
            }
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            startActivity(intent);
        } catch (ActivityNotFoundException | java.net.URISyntaxException e) {
            if (scheme.startsWith("http")) return false;
        }
        return true;
    }

    private boolean isOnline() {
        ConnectivityManager c = (ConnectivityManager) getSystemService(CONNECTIVITY_SERVICE);
        if (c == null) return true;
        NetworkInfo n = c.getActiveNetworkInfo();
        return n != null && n.isConnected();
    }

    private void showOffline() {
        String html = "<!doctype html><html><head><meta name='viewport' content='width=device-width,initial-scale=1'>"
                + "<style>body{margin:0;height:100vh;display:grid;place-items:center;background:#070707;color:#F5F3EF;"
                + "font-family:sans-serif;text-align:center;padding:24px;box-sizing:border-box}"
                + "h1{font-size:20px;margin:0 0 8px;color:#E5BE68}p{color:#ABA59A;margin:0 0 22px;font-size:15px}"
                + "a{display:inline-block;padding:12px 26px;border-radius:12px;font-weight:700;color:#0A0A0A;text-decoration:none;"
                + "background:linear-gradient(135deg,#EFC465,#D4A852,#BD8D4B)}</style></head><body><div>"
                + "<h1>You're offline</h1><p>Connect to the internet to load your training videos.</p>"
                + "<a href='" + START_URL + "'>Try again</a></div></body></html>";
        web.loadDataWithBaseURL(START_URL, html, "text/html", "UTF-8", START_URL);
    }

    private void exitFullscreen() {
        if (customView == null) return;
        root.removeView(customView);
        customView = null;
        if (customViewCallback != null) customViewCallback.onCustomViewHidden();
        customViewCallback = null;
        web.setVisibility(View.VISIBLE);
        getWindow().clearFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN);
    }

    /** Back button: exit fullscreen video, then close an open window, then return to Library, then leave. */
    @Override
    public void onBackPressed() {
        if (customView != null) { exitFullscreen(); return; }
        String js = "(function(){"
                + "var o=document.querySelectorAll('.overlay:not(.hidden)');"
                + "if(o.length){document.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true}));return 'closed';}"
                + "var lib=document.querySelector('.tab[data-view=library]');"
                + "var gate=document.getElementById('gate');"
                + "var signedIn=gate&&gate.classList.contains('hidden');"
                + "if(signedIn&&lib&&lib.getAttribute('aria-selected')!=='true'){lib.click();window.scrollTo(0,0);return 'library';}"
                + "return 'none';})()";
        web.evaluateJavascript(js, value -> {
            if (value != null && value.contains("none")) {
                if (web.canGoBack()) web.goBack();
                else moveTaskToBack(true);
            }
        });
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);
        web.saveState(outState);
    }

    @Override
    protected void onPause() {
        super.onPause();
        CookieManager.getInstance().flush();
        web.onPause();
    }

    @Override
    protected void onResume() {
        super.onResume();
        web.onResume();
    }

    @Override
    protected void onDestroy() {
        if (web != null) {
            web.stopLoading();
            web.destroy();
        }
        super.onDestroy();
    }
}
