# Learning Playwright Fundamentals 2x

This repository contains a simple Playwright test project demonstrating basic browser automation and assertions.

## Project structure

- tests/ - Playwright test files
- playwright.config.ts - Playwright configuration
- package.json - project dependencies and scripts
- playwright-report/ - generated HTML reports
- test-results/ - execution artifacts

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run tests:
   ```bash
   npx playwright test
   ```
3. Run tests in headed mode:
   ```bash
   npx playwright test --headed
   ```

## Notes

- Dependencies are not committed; install them locally with npm.
- Generated reports and test artifacts are ignored by Git.
