---
title: "Cypress setup/installation"
categories: [etc, test]
tags: [test, cypress]
comment: true
---

## Set up / Installation

    $ npm install -D cypress

or

    $ npm install cypress --save-dev

- --save-dev : node_modules에 패키지 설치 + package.json의 dependencies 추가

## Desktop App(GUI)으로 실행

    $ npx cypress open

or

    $ ./node_modules/.bin/cypress open

- 실행하면 nutshell 열림
- cypress 폴더 생김(구조는 아래와 같음)

```
  /cypress
  /fixtures // 테스트에서 사용되어지는 정적테이터
   - example.json

  /integration // 테스트 파일: .js .jsx .coffee .cjsx
   /examples
     - actions.spec.js
     - aliasing.spec.js
     - assertions.spec.js
     - connectors.spec.js
     - cookies.spec.js
     - cypress_api.spec.js
     - files.spec.js
     - local_storage.spec.js
     - location.spec.js
     - misc.spec.js
     - navigation.spec.js
     - network_requests.spec.js
     - querying.spec.js
     - spies_stubs_clocks.spec.js
     - traversal.spec.js
     - utilities.spec.js
     - viewport.spec.js
     - waiting.spec.js
     - window.spec.js

  /plugins // 테스트 파일(spec)이 실행되기 전에 자동적으로 포함됨
   - index.js

  /support // 테스트 파일(spec)이 실행되기 전에 자동적으로 포함됨
   - commands.js
   - index.js
```

## CLI로 실행하기

    $ npx cypress run

#### VS Code extentions에서 'Cypress Snippets' install

###### [docs.cypress.io](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)
