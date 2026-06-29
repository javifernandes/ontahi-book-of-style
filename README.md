# The Ontahí Language Kit

This repository is the source of truth for the Ontahí visual and editorial language.

It contains a lightweight, versionable language kit for Ontahí: philosophy, visual grammar, botanical motifs, identity rules, interface/editorial principles, asset inventory, and agent prompts.

This is not the public user documentation for Ontahí. It is the generative source that should help humans and coding agents create documentation, apps, slides, diagrams, assets, and examples that feel like they belong to the same world.

The kit is intentionally small at this stage. It should remain useful before it becomes exhaustive.

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
  --title "The Ontahí Language Kit" \
  --author "Javier Fernandes" \
  --language en \
  --local-assets
```

## Direction

Ontahí should feel editorial, botanical, precise, warm, and technically serious. It should avoid generic SaaS, AI-hype, crypto, cyberpunk, and dashboard-heavy aesthetics.

The architecture language should stay grounded in what exists. In the current system, tasks are the concrete durable execution surface, and durable operations are the architectural way to expose that behavior. The term workflow should remain reserved for a possible later level of dynamic, user-created long orchestration, not treated as the current core.

The design language should be treated as a kit, not a brand book. A brand book ends at the logo; this kit should help someone make a chapter, a VSCode theme, a slide, a sticker, a documentation page, or a BookOps page without losing the Ontahí voice.
