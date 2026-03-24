# CLAUDE.md

Project-level notes and conventions for Claude Code sessions.

## Dev Server

- Run: `npm run dev`
- **IPv6 not supported** in this environment. `vite.config.ts` uses `host: "0.0.0.0"` (IPv4).
  If changed back to `host: "::"`, the server will fail with `EAFNOSUPPORT`.

## Browser Automation

Use `agent-browser` for web automation. Run `agent-browser --help` for all commands.

Core workflow:
1. `agent-browser open <url>` - Navigate to page
2. `agent-browser snapshot -i` - Get interactive elements with refs (@e1, @e2)
3. `agent-browser click @e1` / `fill @e2 "text"` - Interact using refs
4. Re-snapshot after page changes

### Known Issues & Workarounds in This Environment

**agent-browser cannot auto-launch Chrome** (`Chrome not found` / `Auto-launch failed`).
Attempting `agent-browser install` also fails (no internet access to download Chrome).

**Solution: Launch Chromium manually via CDP, then connect agent-browser to it.**

```bash
# 1. Launch the bundled Playwright Chromium with CDP enabled
/root/.cache/ms-playwright/chromium-1194/chrome-linux/chrome \
  --headless --no-sandbox --disable-dev-shm-usage \
  --remote-debugging-port=9222 http://localhost:8080 &

# 2. Verify CDP is ready
curl -s http://localhost:9222/json

# 3. Use agent-browser with --cdp flag for all commands
agent-browser --cdp 9222 snapshot
agent-browser --cdp 9222 screenshot page.png
agent-browser --cdp 9222 click @e1
```

**Navigation caveat**: `agent-browser --cdp 9222 open <url>` times out in this environment.
Use JavaScript eval to navigate instead:

```bash
agent-browser --cdp 9222 eval "window.location.href = 'http://localhost:8080/some-path'"
# Then wait for React to render before interacting
sleep 8
agent-browser --cdp 9222 eval "document.readyState + ' | ' + document.querySelector('#root')?.innerHTML.length"
```

**React SPA rendering**: After navigation via `window.location.href`, the page reloads and
React needs time to hydrate. Wait until `document.readyState === 'complete'` and
`#root` innerHTML length is > 0 before taking snapshots or screenshots.

**dbus errors in Chromium output** are harmless — Chrome still works fine headlessly.
