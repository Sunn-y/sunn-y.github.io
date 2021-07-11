---
title: "Jquery functions"
categories: [languages, javascript]
tags: [jquery]
comment: true
---

## 나 보려고 정리한 제이쿼리 함수 리스트

| 내용                    | 함수                                  | return              |
| ----------------------- | ------------------------------------- | ------------------- |
| 페이지 로드 시 실행     | $(document).ready(function(){ ... }); |                     |
| html 내용 가져오기      | $('p').html()                         | p태그 html 내용     |
| html 내용 추가          | $('p').html('# hello world')          |                     |
| 텍스트 가져오기         | $('p').text()                         | p태그의 text 가져옴 |
| 텍스트 추가             | $('p').text('hello world')            | p태그안에 글씨 추가 |
| CSS 설정                | $('div').css('color', 'red')          |                     |
| CSS 속성값 확인         | $('div').css('color')                 | div의 글자색        |
| 체크박스 체크여부       | $('#checkbox').is(':checked')         | true / false        |
| 라디오박스 체크여부     | $('#radiobox:checked').length < 1     | true / false        |
| 클래스 추가             | addClass('클래스명')                  |                     |
| 클래스 삭제             | removeClass('클래스명')               |                     |
| 클래스 여부             | hasClass('클래스명')                  | True / False        |
| 선택자 속성 가져오기    | $('#img').attr("width")               | #img의 width값      |
| 선택자 속성 설정        | $('#img').attr("width", "360px")      |                     |
| 선택자 속성 삭제        | $('#img').removeAttr("width")         |                     |
| display none으로 바꾸기 | $('div').hide()                       |
| display none 해제       | $('div').show()                       |
| show + hide 기능을 둘다 | $('div').toggle()                     |

## 이벤트 함수


1. click() / dblclicㅏ()
2. hover()
3. mouseover() / mouseout()
4. mouseenter() / mouseleave()
5. mouseup() / mousedown()
6. scroll()
7. resize()
8. change()
9. focus() / blur()
10. focusIn() / focusOut()

## 애니메이션 효과

1. slideUp() / slideDown() / slideToggle()
2. fadeIn() / fadeOut()
3. animate() / stop()
4. rotate()

## 객체 찾기

1. next()
2. nextAll()
3. parent() / parents()
4. children()
5. siblings()

## 기타

1. , 없애기 : '안녕,하세요'.replaceAll(',', '')
2. 배열 순회 : $('input[type=checkbox]).each(function({}))
3. 윈도우 사이즈 구하기 : $(window).innerWidth() / $(window).innerHeight()
