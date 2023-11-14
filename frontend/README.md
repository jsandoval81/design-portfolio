# frontend

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
    * _If MacOS, also requires XCode command line tools via XCode app install_
* [Node.js](https://nodejs.org/) `8.4.0` (with NPM)
* Bower
* Python2 (suggest pyenv)
* [Ember CLI](https://ember-cli.com/) `2.x`

## Installation

* `git clone <repository-url>` this repository
* `cd frontend`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying
Ensure you have the following files populated:
- `.env.deploy.development`
- `.env.deploy.production`

**Development**
`ember deploy development --activate=true`

**Production**
`ember deploy production --activate=true`

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
