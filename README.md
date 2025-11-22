# consi.online

La prima palestra finanziaria digitale italiana.

## Installazione e Avvio

### Prerequisites
- Node.js (v18 o superiore)
- npm

### Installazione Dipendenze

```bash
npm install --include=dev
```

### Avvio Sviluppo

```bash
npm run dev
```

L'applicazione sarà disponibile su `http://localhost:5173`

### Build per Produzione

```bash
npm run build
```

I file compilati saranno generati nella cartella `dist/`.

### Preview Build di Produzione

```bash
npm run preview
```

## Deploy

### Deploy su Netlify

1. Connetti il repository a Netlify
2. Configura il build command: `npm run build`
3. Configura la publish directory: `dist`
4. Deploy!

### Deploy Manuale

Dopo aver eseguito `npm run build`, carica il contenuto della cartella `dist/` sul tuo hosting.

## Struttura del Progetto

```
/
├── index.html          # HTML principale
├── index.tsx           # Entry point React
├── App.tsx             # Componente principale
├── index.css           # Stili Tailwind
├── vite.config.ts      # Configurazione Vite
├── tailwind.config.js  # Configurazione Tailwind
├── tsconfig.json       # Configurazione TypeScript
└── dist/               # Output build (generato)
```

## Tecnologie

- React 19
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (icons)

## Note

- Il form di waitlist è configurato per Netlify Forms
- Assicurati di avere l'immagine `profile.jpg` nella cartella `public/` per il profilo
