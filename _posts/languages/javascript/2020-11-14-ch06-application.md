---
title: "Do It - Vue.js (6) - application"
categories: [languages, javascript]
tags: [doit]
comment: true
---

## To Do List Application 개요

- local strorage에 데이터 저장(f12 > application)
- 구조: header, input, list, footer

## 프로젝트 생성 및 구조확인

1. vue-todo 폴더 생성
2. 터미널에서 폴더로 위치이동
3. vue init webpack-simple
4. index.html에 &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt; 추가
5. CSS: Awesome CDN 추가
6. Font 변경
7. favicon 변경(웹사트 제목의 왼쪽 로고)

## 컴포넌트 생성 및 등록

- src/components에 TodoHeader.vue, TodoInput.vue, TodoList.vue, TodoFooter.vue 생성
- vue 파일에 기본태그(template, script-export default) 넣기
- App.vue에 components import
- ES5 는 var TodoHeader = {}, ES6는 import

## 컴포넌트 내용 구현

- Todoheader에 앱 이름
- TodoInput에 input-text
- 리스트 추가를 위한 이벤트버튼
- method에 localStorage.setItem(key, value)
- 유효성 검사(null check, trim)
- 입력한 후 input 박스 초기화를 위해 메소드 추가
- \*\*\* 단일 책임 원칙(Single Responsibility Principle): 메소드 당 하나의 기능만 구현
- data에 배열 선언, created에 localStorage값 배열에 push
- 각 리스트마다 삭제버튼 추가
- v-for 사용 시 item과 index 이용, :key='item'
- localStorage.removeItem(item)
- \*\*\* this.item.splice(index, 1) =>인자로 받은 숫자만큼 인덱스 삭제
- 모두 삭제하는 버튼만들기
- localStorage.clear()

## 기존 애플리케이션 문제해결

- update 되는 내용이 바로 반영되지 않음
- v-on과 $emit 이용하기

## 기능 추가

- transition-group: 애니메이션 태그

  - name = "list"
  - tag = "ul"
  - li 태그에 :key 추가(for문)
  - style에 추가

    - .list-move { transition: transform 2s; }
    - .list-enter-active,list-leave-active { transition: all 1s; }
    - .list-enter, list-leave-to { opacity: 0; transform: translateY(30px); }

- 모달기능 추가

###### 책 [Do it! Vue.js 입문]
