---
title: "(5) React - Functional Components"
categories: [languages, javascript]
tags: [react, front]
comment: true
---

## JS function
properties -> js function -> html(jsx)



### * src/components/Greet.js
```
function Greet() {
   return <h1>Hello Test Components!</h1>;
};
export default Greet;
```
=======> arrow로
```
export const Greet = () => <h1>Hello Components!</h1>;
```
### * App.js
```
import "./App.css";
import { Greet } from "./components/Greet";

function App() {
  return (
    <div className="App">
      <Greet />
    </div>
  );
}
export default App;
```

###### [https://www.youtube.com/channel/UC80PWRj_ZU8Zu0HSMNVwKWw](https://www.youtube.com/channel/UC80PWRj_ZU8Zu0HSMNVwKWw)
