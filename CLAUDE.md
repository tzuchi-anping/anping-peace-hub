# CLAUDE.md

## Dev Server

- Run: `npm run dev`

## Browser Automation

Use `agent-browser` for web automation. Run `agent-browser --help` for all commands.

Core workflow:
1. `agent-browser open <url>` - Navigate to page
2. `agent-browser snapshot -i` - Get interactive elements with refs (@e1, @e2)
3. `agent-browser click @e1` / `fill @e2 "text"` - Interact using refs
4. Re-snapshot after page changes

---

## Remote Environment Workarounds (Claude Code on the web only)

> The following ONLY applies when running in Claude Code on the web
> (i.e. `CLAUDE_CODE_REMOTE` environment variable is set).
> Skip this section entirely for local Claude Code sessions.

### IPv6 not supported

`vite.config.ts` must use `host: "0.0.0.0"` (IPv4).
If set to `host: "::"`, the server fails with `EAFNOSUPPORT`.

### agent-browser cannot auto-launch Chrome

`agent-browser install` fails (no internet to download Chrome).

**Solution: Launch Playwright's bundled Chromium via CDP, then connect.**

```bash
# 1. Launch Chromium with CDP
/root/.cache/ms-playwright/chromium-1194/chrome-linux/chrome \
  --headless --no-sandbox --disable-dev-shm-usage \
  --remote-debugging-port=9222 http://localhost:8080 &

# 2. Verify CDP
curl -s http://localhost:9222/json

# 3. All agent-browser commands need --cdp 9222
agent-browser --cdp 9222 snapshot
agent-browser --cdp 9222 screenshot page.png
```

### Navigation timeout workaround

`agent-browser --cdp 9222 open <url>` times out. Use eval instead:

```bash
agent-browser --cdp 9222 eval "window.location.href = 'http://localhost:8080/path'"
sleep 8
agent-browser --cdp 9222 eval "document.readyState"
```

### React SPA hydration

After `window.location.href` navigation, wait for `document.readyState === 'complete'`
and `#root` innerHTML length > 0 before snapshots.

### dbus errors

Chromium outputs dbus errors — harmless, ignore them.
