# Portfolio Wiktora Furmańczyka

Publiczne repozytorium strony [wiktor-furmanczyk.github.io](https://wiktor-furmanczyk.github.io). Zawiera wyłącznie zatwierdzone materiały portfolio: stronę główną, strony projektów i przeznaczone do publikacji obrazy.

Repozytorium jest publikowane przez GitHub Pages z gałęzi `main` i katalogu głównego. Strona korzysta z wbudowanej obsługi Jekyll, własnych layoutów oraz CSS — bez backendu i frameworka JavaScript.

## Struktura

- `index.md` — publiczna strona główna,
- `projects/<slug>/index.md` — dedykowane strony projektów,
- `assets/projects/<slug>/` — zatwierdzone obrazy projektów,
- `_layouts/` — wspólne layouty Jekyll,
- `assets/css/style.scss` — responsywne style,
- `404.md` — strona błędu,
- `PUBLISHING.md` — zasady bezpiecznej publikacji.

Informacje o projekcie mogą być pobierane wyłącznie z jego zatwierdzonego katalogu `public-documentation/` w prywatnym Workspace. Agent buduje na tej podstawie treść strony bez odczytywania kodu aplikacji i bez modyfikowania prywatnego repozytorium. Publikacje są przygotowywane osobno w tym repozytorium i trafiają do `main` dopiero po przeglądzie PR. Szczegóły opisuje [PUBLISHING.md](PUBLISHING.md).
