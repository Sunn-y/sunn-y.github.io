---
title: "Cypress Script"
categories: [etc, test]
tags: [test, cypress]
comment: true
---

### url

- cy.url()
- cy.go('back') or -1
- cy.go('forward') or 1
- cy.reload()


### identify Elements

- cy.get().parent()
- cy.get().parentUntil()
- cy.get().children()
- cy.get().sibling()
- cy.get().prev()
- cy.get().next()
- cy.get().first()
- cy.get().eq(1) \_\_index\_\_
- cy.get().last()

### custom command

```
- Cypress.Commands.add("SignIn", () => {
 //login
})
```

```

cy.SignIn(); __다른 test에서 사용 가능__

```

---

### Mocha Hooks : setup and teardown

- before
- after
- beforeEach
- afterEach


### and so on

- cy.visit('url'): url로 이동
- cy.get('elements'): 태그이름, 아이디, 클래스
- cy.contains(''): elements가 포함하는 텍스트
- cy.type(''): 내용 타이핑
- cy.find()
- cy.click()
- cy.server()
- cy.route().as()
- cy.wait()
- cy.viewport( , )
- cy.request({ method: '', url: '', headers: { '' : ''}})


### ex)

- cy.title.should('eq', 'text'):
- cy.location('protocol').should('eq','http:')
- cy.hash.should('include', '#/editor') = cy.location('hash').should('include','#/editor')
- cy.get('textfield[placeholder='']')
- cy.contains('cancel').click()
- cy.url().should('include','article')
<!--    ```
cy.get('form').within(($form) => {
    cy.get('input[type="email"].type('test@test.com'))
    cy.get('input[type="password"].type('1234'))
    cy.root().submit()
})
   ``` -->


###### [https://www.cypress.io/](https://www.cypress.io/), [https://www.youtube.com/watch?v=Cgp7liVZh3s&list=PLzDWIPKHyNmK9NX9_ng2IdrkEr8L4WwB0&index=5](https://www.youtube.com/watch?v=Cgp7liVZh3s&list=PLzDWIPKHyNmK9NX9_ng2IdrkEr8L4WwB0&index=5)
