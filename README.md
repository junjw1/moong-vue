# 뷰 바닥부터 하나씩 쌓기

## 준비물
- [npm](https://nodejs.org/en/)

# 목차

0. 프로젝트 구조
1. 싱글 파일 컴포넌트
2. 뷰 컴포넌트에 스타일 입히기
3. 웹팩 개발 서버
4. 트랜스파일
5. 코드 스타일과 문법 검사
6. 테스트

# 프로젝트 구조

뷰 프로젝트의 기본적인 구조를 ~ 생성? 건설? 구축?

* package.json 만들기

```bash
$ npm init -y
```

* 폴더 만들기

```bash
.
├── build/                      # 웹팩 설정파일
├── src/
│   ├── components/             # 뷰 컴포넌트
│   ├── pages/                  # 뷰 페이지
│   ├── router/                 # 라우터
│   ├── main.js                 # 앱 엔트리 파일
│   └── App.vue                 # 앱 메인 컴포넌트
├── index.html                  # index.html template
└── package.json                # build scripts and dependencies
```

# 싱글 파일 컴포넌트

* 앱.뷰

```vue
<template>
  <div>
    <h1>Hello Vue</h1>
  </div>
</template>
```
* main.js

```javascript
import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})
```

* 뷰, 웹팩 설치

```bash
$ npm install --save vue
$ npm install --save-dev webpack webpack-dev
```

* 뷰 로더 설치

```bash
$ npm install -D vue-loader vue-template-compiler
```

* 웹팩 설정

```javascript
// build/webpack.config.dev.js
'use strict'

const VueLoaderPlugin = require('vue-loader')

module.exports = {
  mode: 'development',
  entry: [
    './src/main.js'
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
```

* package.json 스크립트 추가

```javascript
{
  "build": "webpack --config build/webpack.config.dev.js"
}
```

* 스크립트 실행

```bash
$ npm run build
```

제대로 불러지는지 확인해보세요.


# 뷰 컴포넌트에 스타일 입히기

* SFC

```bash
<templatle/>         # HTML

<script/>            # SCRIPT

<style/>             # STYLE
```

- App.vue 파일에 간단한 스타일을 넣고 빌드
  - 오류나는거 확인 가능
  - 웹팩이 css 파일을 읽지 못함

* 패키지 설치

```bash
npm install -D css-loader
```

* 웹팩 설정

```javascript
{
  test: /\.css$/,
  use: 'css-loader'
}
```

- 빌드
  - 클래스가 추가된걸 확인할 수 있지만 스타일은 적용 X


* 패키지 추가 설치

```bash
npm install -D vue-style-loader
```

* 웹팩 재설정

```javascript
{
  test: /\.css$/,
  use: [
    'vue-style-loader', // 이게 위로 와야 빌드된다.
    'css-loader'
  ]
}
```

다시 빌드해서 스타일이 제대로 적용되는지 확인해보세요.

## css 말고 sass 적용하기

* 앱.뷰

```javascript
<style lang="scss" scoped>
  ...
</style>
```

* 패키지 설치

```bash
npm install -D sass-loader node-sass
```

* 웹팩에 로더 추가

```javascript
{
  ...,
  {
    test: /\.scss$/,
    use: [
      'vue-style-loader',
      'css-loader',
      'sass-loader'
    ]
  }
}
```

# 웹팩 개발 서버

* 패키지 설치

```bash
$ npm install -D webpack-dev-server
```

* 스크립트 수정

```javascript
{
  "dev": "webpack-dev-server --config build/webpack.config.dev.js"
}
```

- 실행해보기
  - 브라우저에서 [localhost:8080](http://localhost:8080)
- 뷰 컴포넌트의 내용을 조금 변경해보세요.
  - 변경된 내용이 브라우저에 업데이트 X

* 패키지 추가 설치

```bash
$ npm install -D html-webpack-plugin
```

* 웹팩 설정

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
};
```

모두 작성하면 브라우저가 변경된 내용을 자동으로 업데이트 하는것을 볼 수 있습니다.

# 트랜스파일

지금까지 작성된 코드는 최신 브라우저에서는 문제없이 돌아가지만 옛날 브라우저에서는 문제가 발생할 수 있습니다. 보통 ES6 이상의 문법을 브라우저가 실행하지 못해서 문제가 발생하게 되는데, 웹팩으로 빌드할때 ES6을 ES5로 트랜스파일 해서 해결할 수 있습니다.

* 패키지 설치

```bash
$ npm install -D babel-core babel-loader babel-preset-env
```

* 바벨 설정

```javascript
// .babelrc
{
  "presets": [
    [
      "env", {
        "targets": {
          "browsers": [
            "> 1%",
            "last 2 versions",
            "not ie <= 8"
          ]
        }
      }
    ]
  ]
}
```

* 웹팩 설정

```javascript
{
  test: /\.js$/,
  use: 'babel-loader'
}
```

이제 빌드할때 ES6이 ES5로 트랜스파일 됩니다.

# 코드 스타일과 문법 검사

공식 사이트에서 뷰 컴포넌트를 올바르게 작성하는 가이드를 제공하고 있습니다.

## ***[스타일가이드](https://kr.vuejs.org/v2/style-guide/)***

좋은 컴포넌트를 만들기 위해서 가이드를 따라서 만드는게 좋은데 문서를 보면서 개발하면 많은 시간이 소요되기 때문에 이를 자동으로 코드 스타일을 검사해주고 문법 오류까지도 잡아주는 도구를 쓰면 개이득입니다.

* 패키지 설치

```bash
$ npm install -D eslint eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard eslint-config-standard babel-eslint eslint-loader eslint-plugin-vue
```

* 린트 설정 파일

```javascript
// .eslintrc.js
module.exports = {
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/recommended',
    'standard'
  ],
  plugins: [
    'vue'
  ]
}
```

* 스크립트 추가
```javascript
{
  "lint": "eslint --ext js,vue src"
}
```

실행해보면 코드 검사를 해서 결과를 보여주는것을 확인할 수 있습니다.

결과를 보면 new Vue() 에서 오류가 발생하고 있는데 해당 코드는 오류가 아니기 때문에 오류가 발생하지 않도록 다음 코드를 추가해줍니다.

* main.js

```javascript
/* eslint-disable-next-line no-new */
new Vue({...})
```

그리고 검사가 끝난 후 간단한 오류를 자동으로 수정해주는 것도 가능합니다.

```javascript
"lint:fix": "eslint --ext js,vue src --fix"
```

확인을 위해서 App.vue 에서 마지막 라인을 제거해주고 lint 해서 오류를 확인, 다시 lint:fix 해서 마지막 라인이 자동으로 추가되는것을 확인해보세요.

## 빌드할때 린트하기

* 패키지 설치

```bash
$ npm install -D eslint-loader
```

* 웹팩 설정

```javascript
{
  test: /\.(js|vue)$/,
  use: 'eslint-loader',
  enforce: 'pre'
}
```

이제 빌드를 할때마다 문법도 검사해줍니다.

더 자세히 알고 싶다면 [문서](https://vue-loader.vuejs.org/guide/linting.html) 를 읽어보세요.

# 테스트

자세히 알고 싶다면 [문서](https://vue-test-utils.vuejs.org/en/) 를 읽어보세요.

* 패키지 설치

```bash
$ npm install -D jest babel-jest vue-jest jest-serializer-vue @vue/test-utils
```

* package.json 설정 추가

```javascript
"jest": {
  "moduleFileExtensions": [
    "js",
    "vue"
  ],
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  "transform": {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"
  },
  "snapshotSerializers": [
    "<rootDir>/node_modules/jest-serializer-vue"
  ]
}
```

* 스크립트 추가

```javascript
"test": "jest"
```

* .babelrc 설정 추가

```javascript
"env": {
  "test": {
    "presets": [
      ["env", { "targets": { "node": "current" }}]
    ]
  }
}
```

* .eslintrc.js 설정 추가

```javascript
env: {
  browser: true,
  node: true,
  mocha: true
},
"globals": {
  "expect": true
}
```

\_\_test\_\_ 폴더를 생성한 후, 다음 파일을 작성

* 테스트 스크립트 작성

```javascript
// src/__test__/App.spec.js

import { mount, createLocalVue } from '@vue/test-utils'
import App from '../App'

test('App is a .center-content class', () => {
  const vue = createLocalVue()
  const app = mount(App, { vue })
  expect(app.classes()).toContain('center-content')
})
```

테스트를 실행하면 결과를 볼 수 있다.


---

## 보너스

1. vue-router
2. http
3. vuex

# vue-router

SPA 에서 페이지 이동을 하기 위해서 사용
* 패키지 설치

```bash
$ npm install -S vue-router
```

* router 작성

```javascript
// src/router/index.js

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import NotFound from '../pages/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '*', component: NotFound }
]

export const router = new VueRouter({ routes })
```

* main.js

```javascript
// 기존코드생략
import { router } from './router'

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
```

* App.vue

```vue
<template>
  <router-view></router-view>
</template>
```

# http

axios 를 이용해서 http 통신을 해봅시다.

* 패키지 설치

```bash
$ npm install -S axios
```

* 전역으로 쓸수 있도록 뷰에 추가

```javascript
// main.js

import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$http = axios
```

* 컴포넌트 생성 단계해서 api 요청하기

```javascript
// Home.vue

export default {
  data: function () {
    return {}
  },
  created: function () {
    this.$http.get('url')
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      }
  }
}
```

실행했을때 크로스 도메인 이슈가 발생하는 경우 개발 서버에서 프록시 설정을 해주면 된다.

* 웹팩 설정

```javascript
// webpack.config.dev.js

{
  ...,
  devServer: {
    proxy: {
      '/api': {
        target: "https://other-server.example.com",
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
        secure: false
      }
    }
  }
}
```

기존 URL이 https//outer-server.example.com/some/1 이었으면 /api/some/1 이라고만 보내면 된다.


# vuex

api 에서 받아온 데이터를 vuex 를 이용해서 저장, 관리해봅시다.

* 프로젝트 구조

```shell
src/
├── components/
├── pages/
├── router/
└── store/
    ├── index.js          # 모듈을 조합하고 저장소를 내보내는 곳 입니다.
    ├── api.js            # api 모음
    ├── types.js          # type 모음
    └── modules
        └── house.js      # house 모듈
    
```

* 설치

```bash
$ npm install -S vuex
```

* 스크립트 작성

```javascript
// types.js
export const GET_HOUSE = 'GET_HOUSE'
export const COM_IS_LOADING = 'COM_IS_LOADING'
```

```javascript
// api.js
import axios from 'axios'

export default {
  getHouse: function (state, cb) {
    axios.get('/api/house/1')
      .then((res) => {
        if (res.status >= 200 & res.status < 300) {
          cb(res.data)
        }
      })
      .catch((err) => {
        return Promise.reject(err)
      })
  }
}
```

```javascript
// house.js
import api from '../utils/api'
import * as types from '../utils/types'

const state = {
  house: {},
  isLoading: false
}

const getters = {
  getHouse: state => state.house
}

const mutations = {
  [types.GET_HOUSE] (state, data) {
    state.house = data
  },
  [types.COM_IS_LOADING] (state, status) {
    state.isLoading = status
  }
}

const actions = {
  gethouse ({ commit, state }) {
    commit(types.COM_IS_LOADING, true)
    api.getHouse(state, (res) => {
      commit(types.GET_HOUSE, res)
    })
    commit(types.COM_IS_LOADING, false)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
```

```javascript
// index.js
import Vue from 'vue'
import Vuex from 'vuex'

// modules
import house from './modules/house'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    house
  }
})
```

위 코드를 전부 작성하고 main.js 에 추가해주면 사용할 수 있습니다.

* 컴포넌트에서 스토어 데이터 가져오기

모듈에 작성한 게터를 통해서 하우스에 접근가능합니다

```javascript
// Home.vue
import { mapGetters } from 'vuex'

{
  ...,
  computed: {
    ...mapGetters({
      house: 'getHouse'
    })
  }
}
```

만약 뷰엑스를 추가하고 빌드 오류가 나는 경우에는 babel-preset-2015를 추가하면 됩니다.

