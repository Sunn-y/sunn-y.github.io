---
title: "Regular Expression"
categories: [languages, javascript]
tags: [jquery, validation]
comment: true
---

## 정규표현식(Regular Expression)

input box로 들어오는 텍스트의 입력패턴의 유효성(validation)을 검사

### 영문자/숫자/언더바만 입력받기

<pre><code class="language-js">var re_id = /^[a-z0-9_-]{5,20}$/;
if(re_id.test('#userid')){
 alert('형식에 맞게 아이디를 입력해 주세요');
};
</code></pre>

- 정규식 시작할 때 : /^ , 끝날 때 : $/
- [] 괄호 안에 사용할 문자/숫자/기호 옵션 넣기 : a-z 영어, 0-9 숫자, \_ , -
- {} 괄호 안에 최소값과 최대값 입력 : 위의 내용대로면 5 ~ 20 글자

### input box로 데이터를 받을 때

1. null 체크
2. 필요할 경우 정규표현식으로 입력패턴 체크
3. trim()으로 불필요한 공백 지우기
