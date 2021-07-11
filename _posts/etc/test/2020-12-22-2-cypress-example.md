---
title: "Cypress example"
categories: [etc, test]
tags: [test, cypress]
comment: true
---

## cypress 예제

```
cy.<command>
```

#### cy.커멘드 입력하면 사용가능

#### cypress는 **chaining API**(subject is passed through the chain)

##### 예시1

```

cy.get('button') → 버튼
.click() → 클릭
.should('have.class', 'active') → 그 버튼이 active라는 가지고 있어야 함

```

##### 예시2

```
cy.request('user/1') → user/1 요청
.its('body') → 그것의 바디에 있는 내용이
.should('deep.eql', { name : 'Amir'}) → { }의 내용과 같아야 함
```

##### 예시3

```

it('send email with contact form', () => { → 테스트 내용
cy.get('#name-input').type('Amir') → 아이디가 name-input인 subject에 'Amir' 타이핑
cy.get('#email-input').type('amir@cypress.io') → 아이디가 email-input인 subject에 '...'를 타이핑
cy.get('#success-message').should('be.visible') → 아이디가 success-message인 subject가 보임
})

```

##### 예시4

```
cy.visit('http://localhost:8080/login') → url로 이동
cy.get('#email').type('test@test.com') → 이메일 타이핑
cy.get('#password').type('1234') → 비밀번호 타이핑
cy.get('#signin-button').click() → 버튼 클릭
cy.location('pathname').should('eq','/main') → main page로 이동
```

###### [docs.cypress.io](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)
