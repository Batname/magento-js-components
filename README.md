# Magento ES6 Web components architecture

[![Build Status](http://img.shields.io/travis/kriasoft/react-starter-kit/master.svg?style=flat-square)](http://travis-ci.org/kriasoft/react-starter-kit)
[![Dependency Status](https://david-dm.org/kriasoft/react-starter-kit.svg?style=flat-square)](https://david-dm.org/kriasoft/react-starter-kit)
[![Tips](http://img.shields.io/gratipay/koistya.svg?style=flat-square)](https://gratipay.com/koistya)
[![Gitter](http://img.shields.io/badge/chat_room-%23react--starter--kit-blue.svg?style=flat-square)](https://gitter.im/kriasoft/react-starter-kit)

> This project template is a skeleton for
> magento application ES6 native web components architecture.

**Demo**: http://ec2-52-0-137-85.compute-1.amazonaws.com/

### Documentation

### Directory Layout

```
.
Main folder /client/ output folder /skin/

├── /node_modules/              # 3rd-party libraries and utilities
├── /src/                       # The source code of the application
│   ├── /api/                   # REST API / Relay endpoints
│   ├── /actions/               # Action creators that allow to trigger a dispatch to stores
│   ├── /components/            # React components
│   ├── /constants/             # Constants (action types etc.)
│   ├── /content/               # Static content (plain HTML or Markdown, Jade, you name it)
│   ├── /core/                  # Core components (Flux dispatcher, base classes, utilities)
│   ├── /decorators/            # Higher-order React components
│   ├── /public/                # Static files which are copied into the /build/public folder
│   ├── /stores/                # Stores contain the application state and logic
│   ├── /templates/             # HTML templates for server-side rendering, emails etc.
│   ├── /utils/                 # Utility classes and functions
│   ├── /app.js                 # Client-side startup script
│   └── /server.js              # Server-side startup script
├── /styles/                    # Common styles
├── /tasks/                     # Gulp tasks
├── /templates/                 # Common templates
├── /tests/                     # Unit and E2E tests
│── gulpfile.babel.js           # Configuration file for automated builds
│── package.json                # The list of 3rd party libraries and utilities
└── webpack.config.js           # Webpack configuration for bundling and optimization
```

### Getting Started

Just [clone](github-windows://openRepo/https://github.com/Batname/magento-js-components) or
[fork](https://github.com/Batname/magento-js-components/fork) the repo and start hacking:

```shell
$ git clone -o magento-js-components -b master --single-branch \
      https://github.com/Batname/magento-js-components.git magento-js-components.dev
$ cd magento-js-components.dev
$ cd client
$ Install [NodeJs/IoJs](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-an-ubuntu-14-04-server)
$ sudo npm install -g gulp           # Install Gulp task runner globally
$ sudo npm install -g webpack        # Install webpack globally
$ npm install                        # Install Node.js components listed in ./package.json
```

### How to Build

```shell
$ npm run build:watch:release                   # or, `npm run build:watch:release`
```

By default, it builds in debug mode. If you need to build in release mode, add
`:release` flag.

### How to setup Nginx

```shell
$ sudo gulp config:nginx --prefix /etc/nginx/sites-available --root /var/www/magento-js-components.dev
```

Then you should create sumlink

```shell
sudo ln -s /etc/nginx/sites-available/magento-js-components.conf /etc/nginx/sites-enabled/magento-js-components.conf
```

### Add hosts

In `/etc/hosts` add:

```
127.0.0.1 magento-js-components.dev
```


### How to Update

You can always fetch and merge the recent changes from this repo back into
your own project:

```shell
$ git checkout master
$ git fetch magento-js-components
$ git merge magento-js-components/master
$ npm install
```

### Learn More

 * [Flux Architecture for Building User Interfaces](http://facebook.github.io/flux/)
 * [Learn ES6](https://babeljs.io/docs/learn-es6/), [ES6 Features](https://github.com/lukehoban/es6features#readme)
 * [ES7 Features](https://github.com/hemanth/es7-features)
 * [Webpack](http://webpack.github.io/docs/)
 * [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
 * [Components](https://learn.javascript.ru/widgets-structure)
 * [Jade](http://jade-lang.com/)
 * [Sass](http://sass-lang.com/), [Node sass](https://www.npmjs.com/package/node-sass)
 * [IOJS](https://iojs.org/)

### Support

 * [Denis Dubinin](https://github.com/Batname) on Github

### Copyright

Source code is licensed under the MIT License (MIT). See [LICENSE.txt](./LICENSE.txt)
file in the project root. Documentation to the project is licensed under the
[CC BY 4.0](http://creativecommons.org/licenses/by/4.0/) license.
