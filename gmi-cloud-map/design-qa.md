# Design QA

Source: five popup PNG files supplied by the user.

Prototype: `index.html` at `http://127.0.0.1:8787/?image-popups=1`.

Checks:
- Popup content uses the supplied PNG artwork directly, not recreated DOM text or CSS card art.
- Main page only keeps the intro `<video>`; taskbar and popup interactions do not use MP4.
- There are 5 popup images and 5 transparent hotspot buttons.
- Physical click test passed for open, switch, same-button close, and blank-area close.
- Panda heart bubble uses the supplied PNG artwork with transparent cutout.
- Panda click shows the heart bubble; clicking a level button hides it and opens the level popup.
- OpenTalk popup image updated from the latest supplied PNG and transparent cutout verified.
- Taskbar click opens the supplied collection progress artwork as a transparent cutout; only the taskbar window and `点此关闭` button are visible.
- Main map now uses the sharpened poster asset, with crisp pixel rendering applied consistently to images and video layers.
- Taskbar popup no longer uses MP4. It now uses `taskbar-popup-frame.png` plus CSS open/close animation, and the layer background is transparent.
- Mobile intro no longer skips on first touch; the pointerdown skip listener was removed.
- Each level popup now has a transparent `+` check-in hotspot. Clicking any `+` increments the shared collection progress by one.
- Taskbar progress uses DOM heart elements and a `0/5` to `5/5` label layered over the static taskbar window; progress is capped at 5 and persists while the page stays open.
- Clicking `+` does not open the taskbar automatically. The next taskbar click reveals newly earned hearts.
- Taskbar filled hearts now use full-width transparent state overlays `taskbar-hearts-state-0..5.png`, generated from the latest supplied MP4 frame coordinates.
- New-heart cover motion now uses transparent sprite overlays `taskbar-heart-reveal-1..5.png`, generated from the latest supplied MP4 action frames.
- Browser check passed for delayed check-in, manual taskbar reveal, one-heart reveal, five sequential reveals, close, and reopen.
- First click on any primary interactive entry clears the intro overlay immediately, so the visible response is no longer hidden behind the entry animation.
- Each popup `+` can only complete once; repeat clicks on the same `+` are disabled and do not increment progress again.

Final result: passed
