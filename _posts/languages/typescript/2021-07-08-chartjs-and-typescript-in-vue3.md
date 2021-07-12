---
title: "chartjs + Typescript in Vue3"
categories: [languages, typescript]
tags: [vue3, chartjs]
comment: true
---

## npm install

<pre><code class="language-bash">$ npm install chart.js @j-t-mcc/vue3-chartjs
</code></pre>

## tsconfig.json에 `noImplicitAny` 추가

<pre><code class="language-json">{
  "compilerOptions": {
		...
		"noImplicitAny": false,
		...
	}
}
</code></pre>

## .vue 에서의 사용 예제

<pre><code class="language-js">\<template\>
  \<div class="line-chart"\>
    \<vue3-chart-js v-bind="{ ...lineChart }" ref="line" /\>
  \</div\>
\</template\>

\<script lang="ts"\>
import { defineComponent } from "vue";
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";

export default defineComponent({
  name: "LineChart",
  components: {
    Vue3ChartJs,
  },
  props: {
    chartLabels: Array,
    chartData: Array,
  },
  setup(props) {
    const lineChart = {
      id: "line",
      type: "line",
      data: {
        labels: props.chartLabels,
        datasets: [
          {
            label: "Interval",
            data: [40, 20, 80, 10],
            fill: true,
            backgroundColor: "#01ffa7",
            borderColor: "#0ffa7",
            borderWidth: 1,
            lineTension: 0,
            pointRadius: 2,
            pointStyle: "circle",
            pointBackgroundColor: "#01ffa7",
          },
        ],
      },
    };

    const beforeRenderLogic = (event: any) => {
      console.log(event);
    };

    return {
      lineChart,
      beforeRenderLogic,
    };
  },
});
\</script\>
</code></pre>
