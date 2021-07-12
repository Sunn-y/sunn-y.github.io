---
title: "Vue3 with TypeScript"
categories: [languages, typescript]
tags: [vue3, typescript]
comment: true
---

## TypeScript

- Static type system ⇒ Runtime 오류 방지

## Vue CLI Install

<pre><code class="language-bash">// Vue CLI 설치 안 했을 경우
$ npm install --global @vue/cli

vue create {project이름}

vue add typescript
</code></pre>

## tsconfig.json

<pre><code class="language-json">{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    // any type 남발하지 않도록
    "strict": true,
    "jsx": "preserve",
    "moduleResolution": "node"
  }
}
</code></pre>

## .vue 파일 내 사용법

<pre><code class="language-ts">\<script lang="ts"\>
  ...
\</script\>
</code></pre>

## Single-File Components(SFCs)

- TypeScript가 Vue Components 옵션을 정확히 Infer할 수 있도록 아래와 같이 Component 정의

<pre><code class="language-ts">\<script lang="ts"\>
import { defineComponent } from 'vue'

export default defineComponent({
  // type inference enabled
})
\</script\>
</code></pre>

## Component Data Type Assertion

<pre><code class="language-ts">\<script lang="ts"\>
import { defineComponent } from 'vue'

interface Book {
  title: string
  author: string
  year: number
}

export default defineComponent({
  data() {
    return {
      book: {
        title: 'Vue 3 Guide',
        author: 'Vue Team',
        year: 2020
      } as Book
    }
  }
})
\</script\>
</code></pre>

## Global Properties + Axios Setting

<pre><code class="language-ts">import axios from 'axios'

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $http: typeof axios
    $validate: (data: object, rule: object) => boolean
  }
}

// or

// User Definition
import axios from 'axios'

const app = Vue.createApp({})
app.config.globalProperties.$http = axios

// Plugin for validating some data
export default {
  install(app, options) {
    app.config.globalProperties.$validate = (data: object, rule: object) => {
      // check whether the object meets certain rules
    }
  }
}
</code></pre>

## Computed

computed의 경우 계속 데이터가 순환(?)하기 때문에 TypeScript가 inferring 할 때 헷갈림. So 주석 필요!

<pre><code class="language-ts">computed: {
    // needs an annotation
    greeting(): string {
      return this.message + '!'
    },

    // in a computed with a setter, getter needs to be annotated
    greetingUppercased: {
      get(): string {
        return this.greeting.toUpperCase()
      },
      set(newValue: string) {
        this.message = newValue.toUpperCase()
      }
    }
  }
</code></pre>

## Props

<pre><code class="language-ts">import { defineComponent, PropType } from 'vue'

interface Book {
  title: string
  year?: number
}

const Component = defineComponent({
  props: {
    name: String,
    id: [Number, String],
    success: { type: String },
    callback: {
      type: Function as PropType\<() => void\>
    },
    book: {
      type: Object as PropType\<Book\>,
      required: true
    },
    metadata: {
      type: null // metadata is typed as any
    }
    bookA: {
      type: Object as PropType\<Book\>,
      // Make sure to use arrow functions
      default: () => ({
        title: 'Arrow Function Expression'
      }),
      validator: (book: Book) => !!book.title
    },
    bookB: {
      type: Object as PropType\<Book\>,
      // Or provide an explicit this parameter
      default(this: void) {
        return {
          title: 'Function Expression'
        }
      },
      validator(this: void, book: Book) {
        return !!book.title
      }
    }
  }
})
</code></pre>

## Emit에 대한 Annotating

<pre><code class="language-ts">const Component = defineComponent({
  emits: {
    addBook(payload: { bookName: string }) {
      // perform runtime validation
      return payload.bookName.length > 0
    }
  },
  methods: {
    onSubmit() {
      this.$emit('addBook', {
        bookName: 123 // Type error!
      })

      this.$emit('non-declared-event') // Type error!
    }
  }
})
</code></pre>

## setup에서 props 사용하기

<pre><code class="language-ts">import { defineComponent } from 'vue'

const Component = defineComponent({
  props: {
    message: {
      type: String,
      required: true
    }
  },

  setup(props) {
    const result = props.message.split('')
    const filtered = props.message.filter(p => p.value)
  }
})
</code></pre>

## Refs사용하기(ref)

<pre><code class="language-ts">import { defineComponent, ref } from 'vue'

const Component = defineComponent({
  setup() {
    const year = ref(2020) // 초기 설정 값으로 데이터타입 infer

    const result = year.value.split('')
  }
})

// 컴플렉스 데이터 타입 정의
const year = ref\<string | number\>('2020')

year.value = 2020

// 타입? 모르겠당
Ref\<T\>
</code></pre>

## Modal 사용 예제

<pre><code class="language-ts">import { defineComponent, ref } from 'vue'

const MyModal = defineComponent({
  setup() {
    const isContentShown = ref(false)
    const open = () => (isContentShown.value = true)

    return {
      isContentShown,
      open
    }
  }
})

const app = defineComponent({
  components: {
    MyModal
  },
  template: `
    \<button @click="openModal"\>Open from parent\</button\>
    \<my-modal ref="modal" /\>
  `,
  setup() {
    const modal = ref()
    const openModal = () => {
      modal.value.open()
    }

    return { modal, openModal }
  }
})

// 모달안 데이터의 타입 정보가 없는 경우
setup() {
  const modal = ref\<InstanceType\<typeof MyModal\>\>()
  const openModal = () => {
    modal.value?.open()
  }

  return { modal, openModal }
}
</code></pre>

## Reactive

<pre><code class="language-ts">import { defineComponent, reactive } from 'vue'

interface Book {
  title: string
  year?: number
}

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const book = reactive\<Book\>({ title: 'Vue 3 Guide' })
    // or
    const book: Book = reactive({ title: 'Vue 3 Guide' })
    // or
    const book = reactive({ title: 'Vue 3 Guide' }) as Book
  }
})
</code></pre>

## Setup 안에서 computed 사용하기

<pre><code class="language-ts">import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'CounterButton',
  setup() {
    let count = ref(0)

    // read-only
    const doubleCount = computed(() => count.value * 2)

    const result = doubleCount.value.split('') // => Property 'split' does not exist on type 'number'
  }
})
</code></pre>

## Event Handler

<pre><code class="language-ts">\<template\>
  \<input type="text" @change="handleChange" /\>
\</template\>

\<script lang="ts"\>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    // `evt` will be of type `any`
    const handleChange = evt => {
      console.log(evt.target.value) // TS will throw an error here
    }

    return { handleChange }
  }
})
\</script\>

// add type 
const handleChange = (evt: Event) => {
  console.log((evt.target as HTMLInputElement).value)
}
</code></pre>

###### [https://v3.vuejs.org/guide/typescript-support.html#official-declaration-in-npm-packages](https://v3.vuejs.org/guide/typescript-support.html#official-declaration-in-npm-packages)
