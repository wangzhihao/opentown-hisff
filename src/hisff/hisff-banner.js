import '@polymer/polymer/polymer-legacy.js';

import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

import './hisff-image.js';


Polymer({
  _template: html`
  <custom-style>
    <style>
      .main-container {
          display: grid;
          grid-template-rows: 500px;
          grid-column: 1 / -1;
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

  <div class="main-container" id="main-container">
      <div class="grid-elem">
         <hisff-image image="[[image]]" description="超级优秀电影" class="large-desc mask"></hisff-image>
      </div>
  </div>
`,
  properties: {
    image: { 
      value: 'https://placeimg.com/700/500',
      type: String
    }
  },
  is: 'hisff-banner'
});


