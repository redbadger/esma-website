# esma-website

The repository that hosts the ESMA website and [project board](https://github.com/redbadger/esma-website/projects).

The website is available to view at [https://esma.community/](https://esma.community/).

## Proof-of-Concept

Prior to Discovery, a PoC has been created in this repo using a static site generator - [Gatsby](https://www.gatsbyjs.org/). It also uses [emotion](https://emotion.sh/) for styling.

Through our ["deploy master"](./.github/workflows/deploy-master.yml) Github Action, the `master` branch is being built and deployed to Github pages.
The [CNAME record at `./static/CNAME`](./static/CNAME) is pushed to the Github pages built site.

## Prerequisites

To build this site locally, you'll need to have [`ffmpeg`][ffmpeg]. The site features videos which the `gatsby-video` plugin converts to web-friendly formats at build-time. The plugin relies on `ffmpeg` being installed.

You'll also need [Git Large File Storage (`git-lfs`)][git-lfs] installed.

### Mac OS X

On Mac, run the following to install `ffmpeg` and `git-lfs`:

```sh
brew install ffmpeg git-lfs
```

### Other platforms

Find instructions for your platform at the official websites:

- [`ffmpeg`][ffmpeg]
- [`git-lfs`][git-lfs]

Update this README with successful steps if you can.

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

[ffmpeg]: https://www.ffmpeg.org/download.html "ffmpeg"
[git-lfs]: https://git-lfs.github.com/ "Git Large File Storage"