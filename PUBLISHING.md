# Publikowanie materiałów portfolio

Repozytorium strony jest niezależne od prywatnego `Workspace`. Nie istnieje automatyczna synchronizacja ani skrypt publikujący między repozytoriami.

## Źródło informacji o projekcie

Dla jednego zadania wybierz jeden konkretny projekt w `C:\Repozytories\Workspace\projects\`. Jedynym dozwolonym źródłem prywatnym jest jego katalog:

```text
<project>/public-documentation/
```

Nie odczytuj kodu aplikacji, wewnętrznego `docs/`, konfiguracji, manifestów, testów, logów, buildów ani innych projektów. Jeśli brakuje informacji potrzebnej na stronie, poproś użytkownika o jej podanie.

## Dozwolone wykorzystanie

| Źródło | Zastosowanie w portfolio |
| --- | --- |
| `public-documentation/github/project-page.md` | fakty i treść strony `projects/<slug>/index.md` oraz skrótu na `index.md` |
| `public-documentation/images/*` | wybrane obrazy w `assets/projects/<slug>/` |
| `public-documentation/facebook.txt` | opcjonalny kontekst językowy; nigdy osobny plik strony |

Treść należy dopasować do aktualnego układu Jekyll i stylu portfolio. Nie trzeba utrzymywać kopii jeden do jednego. Strona główna, układ, style i nawigacja są własnością tego repozytorium.

## Proces

1. Wskaż repozytorium publiczne jako jedyny cel zmian.
2. Ustal dokładny projekt i odczytaj wyłącznie jego `public-documentation/`.
3. Zaktualizuj stronę projektu, odpowiednią kartę na stronie głównej i tylko potrzebne, zatwierdzone obrazy.
4. Zachowaj pozostałe projekty i treść właściciela.
5. Sprawdź prywatność, linki, ścieżki, teksty alternatywne, strukturę HTML i responsywność.
6. Przejrzyj diff wyłącznie w tym repozytorium.
7. Commit, push i PR wykonaj tylko zgodnie z poleceniem użytkownika i tylko dla publicznego `origin`.

## Multimedia

Obrazy muszą pochodzić z wybranego `public-documentation/images/` i mieć tekst alternatywny. Filmy osadzaj responsywnie przez HTTPS. Iframe powinien mieć co najmniej `title`, `loading="lazy"`, `referrerpolicy`, ograniczający `sandbox` oraz zwykły link awaryjny.
