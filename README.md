# The Office Trivia Challenge

A 65-question Office trivia quiz with sourced episode citations for every answer. Built as a single-page HTML app — no build step, no dependencies — drop it on GitHub Pages and play.

## Files

- **`index.html`** — the full quiz app (HTML, CSS, and JS all in one file)
- **`questions.js`** — the question bank, sorted by difficulty with episode citations

The episode source for each question is shown to the player inline, right after they answer it — no separate source document is needed.

## Scoring

| Difficulty | Points each | Count | Max |
|------------|-------------|-------|-----|
| Easy       | 1           | 20    | 20  |
| Medium     | 3           | 25    | 75  |
| Hard       | 5           | 20    | 100 |
| **Total**  |             | **65**| **195** |

## How to put this on GitHub Pages

1. **Create a new GitHub repo** (e.g. `office-trivia`). Keep it public.
2. **Upload these three files** to the root of the repo (`index.html`, `questions.js`, `README.md`).
3. **Enable GitHub Pages**: go to **Settings → Pages**, set Source to **Deploy from a branch**, pick the `main` branch and the `/ (root)` folder, then click Save.
4. **Wait ~30 seconds**, then visit `https://<your-username>.github.io/office-trivia/`. That's your live trivia site.

## Editing the questions

Open `questions.js` in any text editor. Each entry has this shape:

```js
{
  id: 1, difficulty: "easy", points: 1,
  q: "What's the name of the paper company at the center of the show?",
  choices: ["Dunder Mifflin", "Sabre", "Vance Refrigeration", "Schrute Farms"],
  answer: 0,
  episode: "Established in S1E1 — \"Pilot\""
}
```

After editing, commit and push — GitHub Pages will redeploy automatically.

---

*No affiliation with The Office, NBC, or Universal. Trivia only — all character names and episode references belong to their respective owners.*
