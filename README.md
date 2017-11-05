# hugo-init
A starter kit for creating a homepage static website with [Hugo framework](http://gohugo.io). You can use it as a starting point for development different kinds of page templates, which are allowed in the Hugo (e.g. for a static blog). Please see the Hugo documentation for more info. For managing the assets (`scss`, `javascript`, `images`, etc) this template is using a [Brunch](http://brunch.io) building tool. It's fast tool and simple to configure and expand.

Feel free to expand the abilities of this template to fit your requirements. Also please note by using this project you understand the implications and guarantees of the [MIT license](https://github.com/sfexample/hugo-init/blob/master/LICENSE).
## Requirements
Before start you already need to have these applications on aboard:
- [Hugo](https://github.com/gohugoio/hugo/releases). Please follow the installation instructions from [here](http://gohugo.io/getting-started/installing)
- [Node 6.x+](https://nodejs.org/en/download) (LTS version) and [npm](https://www.npmjs.com/get-npm) (shipped with node installation)
## Installation
Install the dependencies and devDependencies:
```
$ cd hugo-init
$ npm install
```
## Development mode
Build assets with Brunch and start the Hugo development server:
```
$ npm run dev
```
The application will be available at the http://localhost:1313 link in browser.
All changes in `src/` folder will be synced and displayed in browser automatically.
## Production mode
To build the application for production use this command:
```
$ npm run prod
```
All created files will be available in the `public/` folder of project.
### Please consider these restrictions for production:
Your markdown file (in `content/` folder) needs to be not a draft for including its content in website template. Change the `draft` value to `false` inside a certain page for publishing its content:
```
draft: false
```
All website pages contain the `noindex` and `nofollow` values in the meta tags to prevent indexing by search engines while your website located on staging server. When you will be ready share your website with a world please add the `env` option to the `[params]` section in `config.toml` file and re-build the application for production:
```
[params]
  env = "production"
```