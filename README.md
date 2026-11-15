# VAT Calculator – CI/CD Demo

Small TypeScript app used to practise CI/CD. The same pipeline is defined for three tools:

| Tool | File | What it does |
|---|---|---|
| GitHub Actions | `.github/workflows/ci-cd.yml` | Typecheck, test, build on every push/PR; deploy to GitHub Pages from `main` |
| GitLab CI | `.gitlab-ci.yml` | Test on every push; deploy to GitLab Pages from `main` |
| Jenkins | `Jenkinsfile` | Install, typecheck, test, build; archive build from `main` |

## Run locally
```bash
npm install
npm test
npm run dev
```

## Set up GitHub Pages deploy
1. Push to a new GitHub repo.
2. Settings → Pages → Source: **GitHub Actions**.
3. Push to `main` → Actions tab shows the pipeline → site goes live.
