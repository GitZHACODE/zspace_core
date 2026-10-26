# Documentation visual standards

The internal zSpace documentation follows the ZHA UI design system with CODE team identity. This page records the GitBook adaptation so future updates retain the same visual standard.

### Design authority

* [ZHA UI skill](https://github.com/GitZHACODE/zha-ui/blob/830ccfafe40257cdf97bc444b660503064ef3979/skills/zha-ui/SKILL.md)
* [Design guidance](https://github.com/GitZHACODE/zha-ui/blob/830ccfafe40257cdf97bc444b660503064ef3979/DESIGN.md)
* [CODE team tokens](https://github.com/GitZHACODE/zha-ui/blob/830ccfafe40257cdf97bc444b660503064ef3979/packages/tokens/src/brand/code.tokens.json)
* [GitBook customization capabilities](https://gitbook.com/docs/manage-your-site/customization)

The reference revision is 830ccfafe40257cdf97bc444b660503064ef3979. CODE's current purple accent is explicitly provisional in this source; it is the published team token, not a newly approved team palette. No secondary team color or gradient identity has been invented.

### Identity and typography

Use ZHA as the firm name and CODE as the team name. The header uses the canonical solid ZHA/CODE lockup, outlined from the bundled regular, upright ZHA Sans font with the source composition's baseline, spacing and tracking. ZHA Sans is limited to the identity asset; body text and ordinary headings use Inter, the documented fallback for Neue Haas Unica.

Use sentence case for prose headings while preserving API identifiers, product names and acronyms. Keep monospace code distinct from reading prose. IBM Plex Mono is retained as an available GitBook-native substitute because SF Mono and Consolas are not native GitBook font choices.

### Reading surfaces and navigation

Use GitBook's clean theme with flat depth, modest rounded corners, line-style sidebar selection and underlined body links. The site defaults to light mode, ZHA UI’s default work surface. Both logo variants are prepared, but the dark-mode toggle is disabled in the saved configuration until its rendered link contrast is verified. GitBook may retain an existing reader theme preference; review the default in a fresh preview session. The hosted renderer showed the original CODE fill in dark-mode body links at 3.49:1; saved palette values alone are not evidence of acceptable rendered contrast. The enabled light-mode primary maps to CODE accent.fill (#874af7). The source’s dark-surface readable-purple token (#9F7BFF) is configured for future use, but dark reading mode remains disabled pending verification. Hint and status colors map to the source's corresponding light/dark semantic text colors.

Code and API blocks use GitBook's native monochrome light/dark themes as a restrained documentation choice. This is an adaptation rather than a syntax palette prescribed by the company.

### Shared across the three repositories

Core, Toolsets and Viewer use the same site-level branding. Their source and responsibility boundaries remain distinct. The external Slicer site has its own customization and is outside this visual change.

### Platform limits

GitBook does not allow injecting the ZHA UI stylesheet, custom HTML or JavaScript. Its hosted layout controls exact font weights, spacing, logo sizing, responsive breakpoints and interaction states. Rounded corners are the nearest native control to the source radii; exact pixel-for-pixel token compliance is not claimed. The source contrast tests do not validate GitBook's derived palettes.

Do not upload unlicensed Neue Haas Unica fonts, fabricate new team colors, substitute emoji for brand identity, or add CSS injection workarounds. Update the site customization through the GitBook CLI/MCP and check all three books in both reading modes after changes.

### Identity assets

[Light theme ZHA/CODE lockup](.gitbook/assets/zha-code-lockup-light.svg)

[Dark theme ZHA/CODE lockup](.gitbook/assets/zha-code-lockup-dark.svg)

### Git Sync arrangement

This site combines three independent repositories. Connect each book directly to its own repository and documentation folder. A site-wide single-repository setup reparents the books under one source and is not the arrangement used here. The review branch is docs/gitbook-site-sync in each repository.
