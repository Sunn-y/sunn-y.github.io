---
title: "Hello React-Native"
categories: [etc, mobile]
tags: [cross-platform, react-native]
comment: true
---

## React-Native 란

- 안드로이드, iOS 기반의 모바일 앱을 만들 때 사용하는 크로스 플랫폼
- 앱 -> 컨텐트 -> 텍스트(data와 props를 통해)


### 서버, 에뮬레이터 실행

```
$ npx react-native start
```

### 다른 터미널에서

```
$ npx react-native run-android
```

### 프로젝트 안에 App.js 열고 입력

```
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const App = () => {
    return (
        <>
        <View style={styles.container}>
        <View style={styles.header}>
        <Text>Hello! React-Native!</Text>
        </View>
        </View>
        </>
    );
};

const styles = StyleSheet.create({
container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},
});
```

끝!!!

###### [https://www.youtube.com/watch?v=\_YydVvnjNFE&list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ&index=3](https://www.youtube.com/watch?v=_YydVvnjNFE&list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ&index=3)
