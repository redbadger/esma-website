esma-website
====

The repository that hosts the ESMA website and [project board](https://github.com/redbadger/esma-website/projects).

## Proof-of-Concept

Prior to Discovery, a PoC has been created in this repo using a static site generator - [Gatsby](https://www.gatsbyjs.org/) - integrated with a headless CMS - [Contentful](https://www.contentful.com/). Through a [Github Action](./.github/workflows/deploy-master.yml), the `master` branch is being built and deployed to [Github pages](https://redbadger.github.io/esma-website/) everytime there's a merge or new content published (there's a webhook configured on the Contentful side that triggers a `repository_dispatch` event and the rebuild).

Because we're temporarily deploying to Gibhub pages, which make the Gatsby site being deployed in a sub-folder, there's a `pathPrefix` defined on [Gatsby's config](./gastby-config.js) that should be removed once we deploy the site to the root of a  domain.
