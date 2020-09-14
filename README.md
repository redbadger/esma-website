# esma-website

The repository that hosts the ESMA website and [project board](https://github.com/redbadger/esma-website/projects).

The website is available to view at [https://esma.community/](https://esma.community/).

## Proof-of-Concept

Prior to Discovery, a PoC has been created in this repo using a static site generator - [Gatsby](https://www.gatsbyjs.org/) - integrated with a headless CMS - [Contentful](https://www.contentful.com/). It also uses [emotion](https://emotion.sh/) for styling.

Through our ["deploy master"](./.github/workflows/deploy-master.yml) Github Action, the `master` branch is being built and deployed to Github pages, (everytime there's a merge or new content published (there's a webhook configured on the Contentful side that triggers a `repository_dispatch` event which then triggers the rebuild Github Action).
The [CNAME record at `./static/CNAME`](./static/CNAME) is pushed to the Github pages built site.

Because we're temporarily deploying to Gibhub pages, which makes the site live in a sub-folder, there's a `pathPrefix` defined on [Gatsby's config](./gastby-config.js) that should be removed once we deploy the site to the root of a domain.

## Prerequisites

To build this site locally, you'll need to have [`ffmpeg`](https://www.ffmpeg.org/download.html). The site features videos which the `gatsby-video` plugin converts to web-friendly formats at build-time. The plugin relies on `ffmpeg` being installed.

### Mac OS X

On Mac, run the following to install `ffmpeg`:

```sh
brew install ffmpeg
```

### Other platforms

Go to [the ffmpeg website](https://www.ffmpeg.org/download.html) for instructions. Update these instructions with successful steps if you can.

## Tests

### Unit tests

To run jest unit tests, run

```sh
npm run test
```

### End-to-end tests

To run cypress browser tests, start your local dev server with

```sh
npm run start
```

then run

```sh
npx cypress run
```

If you want to run against a local optimised build, run `npm run build` then `npm run test-e2e`.
This mirrors what our Continuous Integration does.
