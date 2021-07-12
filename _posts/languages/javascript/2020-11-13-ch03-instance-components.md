---
title: "Do It - Vue.js (3) - instance & components"
categories: [languages, javascript]
tags: [doit]
comment: true
---

## Vue Instance

- Vue로 개발하기 위해 꼭 만들어야 하는 기본단위
- 속성(el, template, created, methods 등)
- vue 인스턴스가 화면에 적용되는 과정

1. 뷰 파일 로딩
2. 인스턴스 객체 생성
3. 특정 화면 요소에 인스턴스 붙임
4. 인스턴스 내용이 화면 요소로 변환
5. 변환된 화면 요소를 사용자가 봄

- Vue 인스턴스 Life Cycle
<pre><code class="language-js">
beforeCreate -> created -> beforeMount -> mounted -> beforeUpdate -> updated -> beforeDestroy -> destroyed</code></pre>

#### 1. 인스턴스 생성
- 이벤트 및 lifecycle 초기화
- 화면에 반응성 주입
- el, template 속성 확인
- template 속성 내용을 render()로 변환
- el 속성 값 대입

#### 2. 인스턴스를 화면에 부착
- 인스턴스 데이터 변경
- 화면 재 rendering 및 데이터 갱신

#### 3. 인스턴스 내용 갱신
- 인스턴스 접근 가능
- 컴포넌트, 인스턴스, 디렉티브 등 모두 해제

#### 4. 인스턴스 소멸

<img src="https://kr.vuejs.org/images/lifecycle.png" alt="vuelifecycle.jpg" width="200">

## Vue Component

- 조합하여 화면을 구성할 수 있는 block
- 전역 컴포넌트: Vue.component{'이름',{template:'내용'}}

1. 뷰 라이브러리 파일 로딩
2. 뷰 생성자로 컴포넌트 등록
3. 인스턴스 객체 생성
4. 특정 화면 요소에 인스턴스 부착
5. 인스턴스 내용 변환(html요소로)
6. 변환된 화면 요소를 사용자가 봄

- 지역 컴포넌트: vue 인스턴스 안에 생성

## Vue Component 통신

- 컴포넌트는 유효범위(scope)를 가지고 있음
- 상위 컴포넌트는 하위 컴포넌트에게 props로 속성을 전달
- 하위 컴포넌트는 상위 컴포넌트에게 event만 전달 가능

  - 하위컴포넌트 내 이벤트 발생
  - this.$emit('이벤트명') at 하위컴포넌트
  - v-on:하위이벤트명='상위컴포넌트 메소드명' at 상위컴포넌트

- eventBus: 데이터 통신을 바로 할 수 있는 방법 => Vuex

  - 새로운 vue 인스턴스 생성
  - eventBus.$emit('이벤트명', 데이터) at 이벤트를 보내는 컴포넌트
  - eventBus.$on('이벤트명', function(데이터){...}) at 이벤트를 받는 컴포넌

###### 책 [Do it! Vue.js 입문]
