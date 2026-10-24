# Al Bonian FM — Management Academy

Daily video training portal for Al Bonian FM management: **Finance, Leadership, Procurement, HR, Quality & HSE and Business Development**.

Live site: https://ananader1977.github.io/management_training/

## Sign in

| Role | Username | Password | Access |
| :--- | :--- | :--- | :--- |
| Manager | `manager` | `Mgmt@2026` | Library, playback, save, mark completed, My learning, WhatsApp sharing |
| Admin | `admin` | `AlBonian@2026` | Everything above + Admin (remove/restore/add videos, export) |

A manager can unlock Admin from the **Admin** tab with the admin password.
Note: the sign-in is a simple gate in the browser, not real security — the repository is public.

## How it works

- `index.html` — the portal (single page, vanilla JS, no build step).
- `videos.js` — the video library (`window.ALBONIAN_MGMT_VIDEOS`). A scheduled task appends one verified YouTube video per department every morning (Dubai time).
- `logo.png` — Al Bonian FM logo.

## Features

- Department tiles with per-department progress
- Filters: department, posting date (today / 7 / 30 / 90 days / pick a date), level, search, saved, not completed
- Grid view or **By date** view grouped by posting date
- Video player with key takeaways and an "Apply it at Al Bonian" action
- My learning: overall and per-department completion, saved and completed lists (stored on the device)
- Admin: remove/restore videos, add a video, export the library as JSON (device-only changes)
- WhatsApp sharing for the portal or a single video
- Dark and light themes, mobile-first layout

## Adding a video manually

Append an entry to the end of the array in `videos.js` (see the comment header for the fields) and commit to `main`. GitHub Pages republishes within a minute or two.
