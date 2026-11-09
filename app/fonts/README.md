# Portfolio fonts

The Latin WOFF2 subsets of Montserrat and Inter are bundled here and loaded with
`next/font/local`. These are the same font bytes used by the reviewed production
export, originally fetched by `next/font/google` from Google Fonts.

- `montserrat-latin.woff2`: display weights 500 through 800
- `inter-latin.woff2`: body weights 400 through 700

Both fonts are distributed under the SIL Open Font License. The original license
texts are included alongside the font files.

Keep font binaries in source control. A clean deployment must not need a network
request to Google Fonts. In November 2026, the Google loader produced a font URL
with query parameters that Turbopack could not resolve on GitHub Actions.
