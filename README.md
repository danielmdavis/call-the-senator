# Call the Senator

A Myst-style point-and-click prototype with branching-style scene transitions and interactable hotspots.

## Run

Because this version is plain HTML/CSS/JS, you can run it with a tiny local server:

```bash
python3 -m http.server 4173
```

Then open [http://localhost:4173](http://localhost:4173).

## Host on GitHub Pages (free)

**Live site (after the steps below):** [https://danielmdavis.github.io/call-the-senator/](https://danielmdavis.github.io/call-the-senator/)

1. Repo is **`danielmdavis/call-the-senator`** on branch **`main`**.
2. **One-time:** **Settings → Pages → Build and deployment → Source:** choose **GitHub Actions** (not “Deploy from a branch”). Without this, the workflow cannot publish.
3. Push to `main` or run **Actions → “Deploy GitHub Pages” → Run workflow**. Workflow file: [`.github/workflows/pages.yml`](.github/workflows/pages.yml).
4. If GitHub asks to approve the **`github-pages`** environment the first time, approve it under **Settings → Environments**.
5. When the job is green, open the URL above (also shown on the workflow run and **Settings → Pages**).

Paths are relative (`./assets/...`), so the game works at the project URL without extra config.

### Share from your laptop (temporary)

If you install [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/installation/) (`cloudflared`), you can expose your local server without signing up:

```bash
python3 -m http.server 4173
cloudflared tunnel --url http://localhost:4173
```

It prints a `*.trycloudflare.com` link that works until you stop the process.

## Current Sample Flow

1. Look at door
2. Open door
3. Enter auditorium (ladder on right wall)
4. Approach ladder
5. Look up ladder (glass door visible)
6. Climb up to door (apartment lights visible)
7. Open glass door
8. Enter apartment
9. Turn around and look back out

## Notes

- Hovering over interactable areas changes cursor style and highlights the hotspot.
- Progress is in-memory only until you refresh the page.
- Scene content is data-driven in `game.js`.
- Scene audio files live in `assets/audio/` (custom recordings plus legacy placeholders).
