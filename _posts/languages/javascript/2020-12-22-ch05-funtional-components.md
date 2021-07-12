---
title: "(5) React - Functional Components"
categories: [languages, javascript]
tags: [react, front]
comment: true
---

## JS function
properties -> js function -> html(jsx)

### * src/components/Greet.js

<pre><code class="language-js">function Greet() {
   return <h1>Hello Test Components!</h1>;
};
export default Greet;
</code></pre>

=======> arrow로

<pre><code class="language-js">export const Greet = () => <h1>Hello Components!</h1>;
</code></pre>

### * App.js

<pre><code class="language-js">import "./App.css";
import { Greet } from "./components/Greet";

function App() {
  return (
    \<div className="App"\>
      \<Greet \>
    \</div\>
  );
}
export default App;
</code></pre>

###### [https://www.youtube.com/channel/UC80PWRj_ZU8Zu0HSMNVwKWw](https://www.youtube.com/channel/UC80PWRj_ZU8Zu0HSMNVwKWw)
