# Fitness App – Medlemsportal

En förenklad medlemsportal för gymmet Fitness App (fiktivt). Användaren "loggar in" med hårdkodade uppgifter, ser en dashboard med medlemsinfo och kan uppdatera sin profil. Allt sker i webbläsaren, utan sidladdning mellan vyerna.

> **Obs:** Det här är **inte** riktig inloggning. Uppgifterna är hårdkodade och allt sker i webbläsaren. Använd aldrig ett riktigt lösenord. Inga lösenord sparas i localStorage.

## Demo-uppgifter

| Användarnamn | Lösenord |
|--------------|----------|
| `demo`       | `demo`   |

## Kom igång

1. Klona repot:
```bash
   git clone [REPO-URL]
   cd [MAPPNAMN]
```
2. Öppna `index.html` i webbläsaren (eller använd t.ex. Live Server i VS Code).
3. Logga in med demo-uppgifterna ovan.

## Funktioner

- Tre vyer (login, dashboard, profil) som sektioner i **samma** HTML-fil. JavaScript visar och döljer dem.
- Login med användarnamn och lösenord. Felmeddelande på sidan vid fel uppgifter.
- Dashboard med välkomsttext och medlemsinfo ([t.ex. medlemsnivå, nästa pass, poäng]).
- Profilformulär med namn och e-post (med `label` på fälten). Sparas i localStorage och syns direkt i gränssnittet.
- Logga ut tar användaren tillbaka till login-vyn.
- Profilen läses in från localStorage vid sidstart, så rätt namn visas direkt.
- [Nice-to-have, ta bort om ni inte hinner: håll användaren inloggad över reload / fler profilfält / meny mellan dashboard och profil]

## Filstruktur

```
.
├── index.html   # Alla tre vyer som sektioner
├── style.css    # Styling
├── app.js       # Vyhantering, login, profil, localStorage
├── assets/      # Bilder
└── README.md
```

## Gemensamma överenskommelser

| Vad | Värde |
|-----|-------|
| Vy-ID:n | `view-login`, `view-dashboard`, `view-profile` |
| Byta vy | `showView('login' \| 'dashboard' \| 'profile')` |
| localStorage-nyckel | `profile` (innehåll: `{ name, email }`) |
| Felmeddelande vid login | [ID, t.ex. `login-error`] |

Aktiv vy hanteras som ett litet tillstånd (en variabel + en funktion), inte med utspridd `style.display`.

## Teamet och ansvarsfördelning

| Namn | Ansvar |
|------|--------|
| **Asako** | Dashboard och styling (CSS, responsivitet, tillgänglighet) |
| **Max** | Profilsidan (formulär, spara/läsa localStorage, uppdatera dashboard) |
| **Humaira** | Login-sidan (formulär, validering mot hårdkodade uppgifter, felmeddelande, logga ut) |

## Klart när (Definition of Done)

- [ ] Fel lösenord ger feltext på sidan och ingen dashboard.
- [ ] Rätt uppgifter visar dashboarden utan att sidan blinkar eller laddas om.
- [ ] Namnbyte i profilen syns på dashboarden.
- [ ] Reload behåller profiluppgifterna.
- [ ] Logga ut tar användaren till login och dashboarden är inte längre synlig.
- [ ] Login → dashboard → profil → logout fungerar utan sidladdning.

## Tillgänglighet och responsivitet

- Alla formulärfält har `label`.
- [Fokusmarkering, tillräcklig kontrast, `aria-live` på felmeddelanden – fyll i det ni gjort]
- Layouten fungerar på mobil och desktop.

## Teknik

HTML, CSS och JavaScript (vanilla). Ingen backend. Data sparas i `localStorage`.

## Bra att veta / kända begränsningar

- Inloggningen är endast en demo och ger ingen riktig säkerhet.
