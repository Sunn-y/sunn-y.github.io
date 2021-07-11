---
title: "Unit test with Jest"
categories: [etc, mobile]
tags: [cross-platform, react-native]
comment: true
---


## Install

```
$ npm install @testing-library/jest-native @testing-library/react-native 
							react-native-gesture-handler
```

## package.json

```
"jest": {
    "preset": "react-native",
    "setupFilesAfterEnv": [
      "@testing-library/jest-native/extend-expect"
    ],
    "transformIgnorePatterns": [
      "node_modules/(?!(jest-)?react-native|@?react-navigation)"
    ],
    "setupFiles": [
      "./node_modules/react-native-gesture-handler/jestSetup.js"
    ],
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ]
  }
```

## QnA-test.js

```
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import QnA from '../components/QnA';

test('question rendering', () => {
  const {getByTestId} = render(<QnA />);
  const btn = getByTestId('question-btn');
  const text = getByTestId('question-text');
  fireEvent.press(btn);
  expect(text.children[1]).toEqual('1');
});

test('input answer and rendering', () => {
  const {getByTestId} = render(<QnA />);
  const input = getByTestId('answer-input');
  const btn = getByTestId('answer-btn');
  const text = getByTestId('answer-text');
  fireEvent.changeText(input, 'The Answer');
  fireEvent.press(btn);
  expect(text.children[1]).toEqual('The Answer');
});
```

## Test

```
$ npm test QnA-test.js
```

###### [https://www.youtube.com/watch?v=CpTQb0XWlRc](https://www.youtube.com/watch?v=CpTQb0XWlRc)