# The Ontahí Book of Style

This repository is the source of truth for the Ontahí design language.

It contains a lightweight, versionable style book for Ontahí: its visual direction, writing tone, interface principles, agent prompts, and BookOps import notes. The book is intentionally small at this stage so humans and coding agents can use it as context without turning it into a large documentation system too early.

## Structure

The repository follows the BookOps Markdown convention:

- numbered folders are parts
- numbered Markdown files are chapters
- each chapter starts with a level-1 heading
- YAML frontmatter may carry chapter metadata
- local assets live under `assets/`

## BookOps

The intended BookOps mount path is:

```text
docs/ontahi/book-of-style
```

The repo is prepared to be included later as a git submodule from BookOps.

Recommended local import shape:

```sh
node dist/sources/markdown/cli.js \
  --input ../docs/ontahi/book-of-style \
  --output ../generated/ontahi.json \
  --book-slug ontahi \
  --title "The Ontahí Book of Style" \
  --author "Javier Fernandes" \
  --language en \
  --local-assets
```

## Direction

Ontahí should feel editorial, botanical, precise, warm, and technically serious. It should avoid generic SaaS, AI-hype, crypto, cyberpunk, and dashboard-heavy aesthetics.

The architecture language should stay grounded in what exists. In the current system, tasks are the concrete durable execution surface, and durable operations are the architectural way to expose that behavior. The term workflow should remain reserved for a possible later level of dynamic, user-created long orchestration, not treated as the current core.
