# Call the Senator

A Myst-style point-and-click prototype with branching-style scene transitions and interactable hotspots.

## Run

Because this version is plain HTML/CSS/JS, you can run it with a tiny local server:

```bash
python3 -m http.server 4173
```

Then open [http://localhost:4173](http://localhost:4173).

## Host on GitHub Pages (free)

1. Create a repo on GitHub and push this project (default branch **`main`**).
2. **Settings → Pages → Build and deployment**: set **Source** to **GitHub Actions** (not “Deploy from a branch”).
3. Push to `main` (or run **Actions → Deploy GitHub Pages → Run workflow**). The workflow is [`.github/workflows/pages.yml`](.github/workflows/pages.yml).
4. After the job finishes, the site URL is shown on the workflow run and under **Settings → Pages** (usually `https://<username>.github.io/<repo>/`).

Paths are relative, so the game works at a project URL without extra config.

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
