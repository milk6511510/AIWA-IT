# AIWA International WordPress Theme

This theme is the first WordPress conversion of the AIWA international visual demo.

## Install

1. Zip the `aiwa-international` folder.
2. Upload it in WordPress: Appearance > Themes > Add New > Upload Theme.
3. Activate **AIWA International Demo**.
4. Create these pages and assign templates:
   - Home: use the front page template automatically by setting it as the static homepage.
   - Global: assign the `Global Network` template and use the slug `global`.
   - Green AIWA: assign the `Green AIWA` template and use the slug `green`.
   - History: assign the `Brand History` template and use the slug `history`.
5. Go to Settings > Reading and set the homepage to the Home page.
6. Go to Settings > Permalinks and save once.

## Editable Content Types

The theme registers four first-version content types:

- `News`: title, featured image, date, and `External URL`.
- `Products`: title, featured image, `Category`, and `Series`.
- `Countries`: title, featured image or `Flag Image URL`, `Country Role`, and `External URL`.
- `Green Products`: title, featured image, `Category`, and `Series`.

If no WordPress records are added yet, the theme keeps the static demo content so the site does not look empty.

## Notes

- The current visual system is preserved from the static demo.
- Static demo assets are bundled inside `assets/assets`.
- `assets/styles.css` and `assets/script.js` are enqueued through `functions.php`.
- This is a v1 theme for demo and staging use. Before production, review SEO, caching, analytics, form handling, security, and multilingual requirements.
