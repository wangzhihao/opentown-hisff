import '@polymer/polymer/polymer-legacy.js';

import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

import './hisff-image.js';

/**
 * Use CSS grid to implement a mosaic style feed.
 * 
 * CSS Grid Specification: https://www.w3.org/TR/css-grid-2/
 * CSS Grid Polyfill: https://github.com/FremyCompany/css-grid-polyfill
 * Sample Page: https://codepen.io/purema4/pen/wyyzxz
 *
 * The grid use a fixed number of columns instead auto-fill to avoid holes when resizing.
 * Fixed number of columns will prevent the rearrangement of grid flow and keep the predefined
 * grid constantly and unchanged. This also means the editor needs to manually modify the 
 * layouts so that the predefined grid flow doesn't have holes.
 *
 * Since the columns are fixed, this element use viewport units to make all grid cells square.
 * More specifically, the code first calculate cell width to 100vw / columns. then set cell 
 * height the same as cell width.
 *
 */

Polymer({
  _template: html`
  <custom-style>
    <style>
      .main-container {
          display: grid;
          grid-auto-flow: dense;
      }

      .grid-elem {
          cursor:pointer;
          font-family: 'Lobster';
          width: 100%;
          //border: 1px solid black;
          display: flex;
          align-items: stretch;
          justify-content: center;
          transition: 0.2s ease-in-out;
      }
    </style>
  </custom-style>
  <div class="main-container" id="main-container" style$="grid-template-columns: repeat([[columns]], [[cellSize]]vw); grid-auto-rows: [[cellSize]]vw;">
    <dom-repeat items="[[feeds]]">
      <template>
        <div class="grid-elem" style$="grid-row-end: span [[item.height]]; grid-column-end: span [[item.width]];">
          <hisff-image href="[[item.image]]" description="[[item.desc]]" class$="mask [[item.descSize]]"></hisff-image>
        </div>
      </template>
    </dom-repeat>
  </div>
`,
  properties: {
    feeds: { 
      value: [
        { width: 2, height: 2, image: "./images/test_images/dangal.webp", desc: "摔跤吧，爸爸", descSize: "middle-desc"},
        { width: 1, height: 2, image: "./images/test_images/blade_runner_2049.webp", desc: "银翼杀手", descSize: "small-desc"},
        { width: 1, height: 1, image: "./images/test_images/darkest_hour.webp", desc: "至暗时刻", descSize: "small-desc"},
        { width: 1, height: 2, image: "./images/test_images/dunkirk.webp", desc: "敦刻尔克", descSize: "small-desc"},
        { width: 1, height: 1, image: "./images/test_images/coco.webp", desc: "寻梦环游记", descSize: "small-desc"},
        { width: 1, height: 2, image: "./images/test_images/call_me_by_your_name.webp", desc: "请以你的名字呼唤我", descSize: "small-desc"},
        { width: 1, height: 2, image: "./images/test_images/manchester_by_the_sea.webp", desc: "海边的曼彻斯特", descSize: "small-desc"},
        { width: 2, height: 1, image: "./images/test_images/contratiempo.webp", desc: "看不见的客人", descSize: "small-desc"},
        { width: 3, height: 2, image: "./images/test_images/mr_no_problem.webp", desc: "不成问题的问题", descSize: "middle-desc"},
        { width: 1, height: 2, image: "./images/test_images/angels_wear_white.webp", desc: "嘉年华", descSize: "small-desc"},
        { width: 2, height: 1, image: "./images/test_images/dad_genius.webp", desc: "天才枪手", descSize: "small-desc"},
        { width: 2, height: 1, image: "./images/test_images/never_say_die.webp", desc: "羞羞的铁拳", descSize: "small-desc"},
        { width: 1, height: 1, image: "./images/test_images/it_chapter_one.webp", desc: "小丑回魂", descSize: "small-desc"},
        { width: 1, height: 1, image: "./images/test_images/trainspotting_2.webp", desc: "猜火车2", descSize: "small-desc"}
      ],
      type: Array
    },
    columns: {
      value: 5,
      type: Number
    },
    cellSize: {
      type: Number,
      computed: 'computeCellSize(columns)'
    }
  },
  computeCellSize: function(columns){
    return parseInt(100 / columns);
  },
  is: 'hisff-mosaic'
});


