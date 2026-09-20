# Personal Portfolio Website

Responsive personal portfolio website built with HTML, CSS and JavaScript as a university web development project and later updated as a public frontend portfolio.

## Live Demo

Live Demo: https://repindm.github.io/portfolio-website/

Repository: https://github.com/RepinDM/portfolio-website

## Project Context

This project was originally created as a university web development project. It was later updated and cleaned up to work as a public frontend portfolio with current project links, real contact links and a more professional presentation.

## Features

- Responsive layout
- Light/dark theme
- localStorage theme persistence
- Reveal animations with IntersectionObserver
- Multi-page navigation
- Project showcase
- Contact links
- No framework dependencies

## Tech Stack

- HTML5
- CSS3
- JavaScript
- LocalStorage
- IntersectionObserver
- GitHub Pages

## Pages

- `index.html` - homepage with a short professional introduction
- `about.html` - background, current frontend stack and development focus
- `projects.html` - main portfolio projects and earlier learning projects
- `contacts.html` - direct contact links

## Key Implementation Details

- The color theme is applied before the stylesheet loads to reduce theme flicker.
- The selected theme is saved in `localStorage`.
- Scroll state is used to adjust the header and page background.
- Elements with the `reveal` class are animated with `IntersectionObserver`.
- The project is static and can be hosted directly on GitHub Pages.

## Local Development

No build step or package installation is required.

Open `index.html` in a browser, or run a simple static server from the project root:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Future Improvements

- Additional project case studies
- Further accessibility testing

## Author

Dmitry Repin

- GitHub: https://github.com/RepinDM
- Telegram: https://t.me/Repin26
- Email: dmrepin26@yandex.ru
