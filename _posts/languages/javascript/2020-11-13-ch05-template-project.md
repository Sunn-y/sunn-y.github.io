---
title: "Do It - Vue.js (5) - template & project"
categories: [languages, javascript]
tags: [doit]
comment: true
---

## Vue template

- 뷰 인스턴스에서 정의한 데이터와 로직들을 연결하여 사용자가 볼 수 있도록 html로 변환해 주는 속성
- render() 함수로도 구현가능
- 템플릿에서 사용하는 뷰의 속성과 문법

  - 데이터 바인딩: { { } }, v-once, v-bind, v-model
  - 자바스크립트 표현식: { { } } 안에 간단한 메소드나 삼항연산자 사용 가능
  - 뷰 디렉티브: v-접두사를 가진 모든 속성(v-if, v-for, v-show, v-bind, v-on, v-model)
  - 이벤트 처리: function(event) 받아올 수 있음
  - 고급 템플릿 기법

    - computed, methods(호출할 때만 처리됨)
    - watch: 데이터가 변할 때마다 동작

## Vue project

- Single File Components

  - template: html 태그
  - script: export default{}, 뷰 컴포넌트의 내용 정의
  - style: CSS 정의

- Vue CLI

  - npm install vue-cli -global
  - vue init

    - vue init webpack
    - vue init webpack-simple
    - vue init browserify
    - vue init browerify-simple
    - vue init simple
    - vue init pwa(Progressive Web App)

  - vue create _프로젝트명_
  - package.json: 프로젝트 정보를 담고 있는 설정파일
  - npm run serve
  - npm run build

###### 책 [Do it! Vue.js 입문]
