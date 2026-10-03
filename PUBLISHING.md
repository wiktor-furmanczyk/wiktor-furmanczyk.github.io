# Publikowanie materiałów portfolio

Prywatne repozytorium workspace jest jedynym źródłem treści. To repozytorium przyjmuje wyłącznie materiały zatwierdzone do publicznego udostępnienia.

## Dozwolone mapowanie

| Źródło w workspace | Cel publiczny |
| --- | --- |
| `docs/portfolio-home.md` | `index.md` |
| `<projekt>/public-documentation/github/project-page.md` | `projects/<slug>/index.md` |
| `<projekt>/public-documentation/images/*` | `assets/projects/<slug>/*` |

Nie wolno kopiować dokumentacji wewnętrznej, `facebook.txt`, kodu źródłowego, testów aplikacji, konfiguracji, sekretów, plików `.env`, logów ani obrazów spoza `public-documentation/images/`.

## Proces

1. Sprawdź publiczną dokumentację projektu w prywatnym workspace.
2. Uruchom walidację narzędziem `tools/portfolio/Publish-Portfolio.ps1 -ValidateOnly` z prywatnego repozytorium.
3. Przejrzyj tekst, obrazy, linki i iframe pod kątem poufności oraz praw do publikacji.
4. Utwórz osobną gałąź z aktualnego `origin/main`.
5. Uruchom kontrolowane kopiowanie z parametrem `-ConfirmPublication`.
6. Przejrzyj publiczny diff i potwierdź, że zawiera tylko dozwolone materiały.
7. Sprawdź build i wygląd strony lokalnie, jeśli narzędzia są dostępne.
8. Utwórz commit, wypchnij gałąź i przygotuj PR. Nie scalaj PR automatycznie.

Strona główna nie powinna zawierać projektu, którego dedykowana strona nie jest częścią tego samego PR.

## Multimedia

Obrazy muszą mieć tekst alternatywny. Filmy osadzaj responsywnie w kontenerze `.media-embed`. Iframe musi używać HTTPS i mieć co najmniej `title`, `loading="lazy"`, `referrerpolicy` oraz ograniczający `sandbox`. Jeśli dostawca blokuje osadzanie, użyj zwykłego linku.
