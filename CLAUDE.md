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
# 1. Find and launch Chromium with CDP (version-independent path)
CHROME=$(find /root/.cache/ms-playwright -name chrome -type f | head -1)
$CHROME --headless --no-sandbox --disable-dev-shm-usage \
  --remote-debugging-port=9222 http://localhost:8080 &

# 2. Verify CDP
curl -s http://localhost:9222/json

# 3. All agent-browser commands need --cdp 9222
agent-browser --cdp 9222 snapshot
agent-browser --cdp 9222 screenshot page.png
```

### Navigation & SPA hydration

`agent-browser --cdp 9222 open <url>` times out. Use eval to navigate,
then poll for React to finish rendering before interacting:

```bash
agent-browser --cdp 9222 eval "window.location.href = 'http://localhost:8080/path'"
# Poll until page is ready (readyState complete + React root rendered)
for i in $(seq 1 15); do
  sleep 1
  READY=$(agent-browser --cdp 9222 eval "document.readyState === 'complete' && (document.querySelector('#root')?.innerHTML.length || 0) > 0")
  echo "$READY" | grep -q "true" && break
done
```

### dbus errors

Chromium outputs dbus errors — harmless, ignore them.
