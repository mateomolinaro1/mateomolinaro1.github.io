# mateomolinaro1.github.io

Personal website built with [Quarto](https://quarto.org), deployed to GitHub Pages by `.github/workflows/publish.yml` on every push to `main`.

## Local preview

```sh
quarto preview      # live-reloading local server
quarto render       # full build into _site/
```

## Where things live

| What | File / folder |
|---|---|
| Site config, navbar, theme | `_quarto.yml` |
| Home / About | `index.qmd` (photo: `files/img/profile.svg`) |
| Research | `research/index.qmd`, PDFs in `files/papers/` |
| Teaching | `teaching/index.qmd`, material in `files/teaching/<course>/` |
| Blog | `blog/posts/<yyyy-mm-dd-slug>/index.qmd` (copy an existing post) |
| CV | `cv/index.qmd`, PDF in `files/cv/cv.pdf` |
| Interests, Contact | `interests.qmd`, `contact.qmd` |
| Style tweaks | `styles.css` |

Anything under `files/` is copied to the site as-is (PDFs, notebooks, images). LaTeX sources are compiled locally; only the resulting PDFs need to be committed.
