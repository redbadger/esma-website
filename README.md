# esma-website

The repository that hosts the ESMA website and [project board](https://github.com/redbadger/esma-website/projects).

## Proof-of-Concept

Prior to Discovery, a PoC has been created in this repo using a static site generator - [Gatsby](https://www.gatsbyjs.org/) - integrated with a headless CMS - [Contentful](https://www.contentful.com/). It also uses [emotion](https://emotion.sh/) and [tailwind](https://tailwindcss.com/) macros for styling.

Through a [Github Action](./.github/workflows/deploy-master.yml), the `master` branch is being built and deployed to [Github pages](https://esma.community/) everytime there's a merge or new content published (there's a webhook configured on the Contentful side that triggers a `repository_dispatch` event which then triggers the rebuild Github Action).

Because we're temporarily deploying to Gibhub pages, which makes the site live in a sub-folder, there's a `pathPrefix` defined on [Gatsby's config](./gastby-config.js) that should be removed once we deploy the site to the root of a domain.

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
