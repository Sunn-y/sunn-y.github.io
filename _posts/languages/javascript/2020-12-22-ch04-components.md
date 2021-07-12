---
title: "(4) React - Components"
categories: [languages, javascript]
tags: [react, front]
comment: true
---

## 컴포넌트

- Header
- Side Navigation(left or right)
- Main Content
- Footer


## 컴포넌트 안의 코드
- JavaScript : Component Code
- App.js : App Component
 

## 컴포넌트 타입
- Stateless functional component
    - javascript functions
<pre><code class="language-js">function welcome(props){
    return <h1>Hello, {props.name}</h1>;
}
</code></pre>
- stateful class component
    - class extending component class
    - render method returning HTML 
<pre><code class="language-js">class welcome extends React.Component {
    render(){
        return <h1>Hello, {this.props.name}</h1>;
    }
}
</code></pre>

## 컴포넌트란
- UI의 부분을 묘사하는 애
- 다른 컴포넌트 안에서 중첩되서 재사용될 수 있는 애들
- 타입
    - stateless functional components
    - stateful class components


###### [https://www.youtube.com/channel/UC80PWRj_ZU8Zu0HSMNVwKWw](https://www.youtube.com/channel/UC80PWRj_ZU8Zu0HSMNVwKWw)
