# SmartbobPageWiki

Dokumentacja i baza wiedzy SMARTBOB — strona zbudowana przy użyciu [Docusaurus](https://docusaurus.io/).

Strona dostępna jest pod adresem: https://smartbobautomatyka.github.io/SmartbobPageWiki/

## Instalacja

```bash
npm install
```

## Praca lokalna

```bash
npm start
```

Komenda uruchamia lokalny serwer deweloperski i otwiera okno przeglądarki. Większość zmian jest widoczna na
żywo bez konieczności restartu serwera.

## Build

```bash
npm run build
```

Komenda generuje statyczną wersję strony w katalogu `build`, którą można wdrożyć na dowolnym hostingu treści
statycznych.

## Wdrożenie

Wdrożenie na GitHub Pages odbywa się automatycznie za pomocą GitHub Actions
([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) po każdym pushu do gałęzi `main`.
Ręczne uruchomienie wdrożenia nie jest wymagane — wystarczy scalić zmiany do `main`.
