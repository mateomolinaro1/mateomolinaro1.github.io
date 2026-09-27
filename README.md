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
| Home / About | `index.qmd` (photo: `files/img/profile.jpg`) |
| Research | `research/index.qmd`, PDFs in `files/papers/` |
| Teaching | `teaching/index.qmd`, material in `files/teaching/<course>/` |
| Blog | `blog/posts/<yyyy-mm-dd-slug>/index.qmd` (copy an existing post) |
| CV | `cv/index.qmd`, PDF in `files/cv/cv.pdf` |
| Interests, Contact | `interests.qmd`, `contact.qmd` |
| Style tweaks | `styles.css` |

Anything under `files/` is copied to the site as-is (PDFs, notebooks, images). LaTeX sources are compiled locally; only the resulting PDFs need to be committed.

## Blog posts with Python code

Posts with executable `{python}` cells are run **locally** and their results are frozen in `_freeze/` (`execute: freeze: auto`), so GitHub Actions never needs Python. After editing such a post:

```powershell
uv sync                                                  # once: installs numpy, pandas, statsmodels, jupyter
$env:QUARTO_PYTHON = "$PWD\.venv\Scripts\python.exe"
quarto render blog/posts/<post-folder>/index.qmd         # re-runs the code, updates _freeze/
```

Then commit the post **and** the updated `_freeze/` folder.
