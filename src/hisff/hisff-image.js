import '@polymer/polymer/polymer-legacy.js';

import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

Polymer({
  _template: html`
  <custom-style>
    <style>
      :host {
        width: 100%;
        display: flex;
        background: var(--image-url) no-repeat center center fixed; 
        background-image:  var(--image-url);
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
      }
      :host(.mask) {
         background-image: 
          linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0.4),
            rgba(0, 0, 0, 0.8)
          ), var(--image-url);
      }

      :host(:hover),
      :host(:active) {
        background-image:  var(--image-url);
        transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        -webkit-transition: all 0.3s ease-in-out;
      }
      
      .description {
        margin-left: 10px;
        margin-bottom: 10px;
        margin-top: auto;
        font-size: 20px;
        color: white;
      }
      :host(.small-desc) .description { 
        font-size: 20px;
      }
      :host(.middle-desc) .description { 
        font-size: 40px;
      }
      :host(.large-desc) .description { 
        font-weight: bold;
        font-size: 60px;
      }
      :host(.xlarge-desc) .description { 
        font-weight: bolder;
        font-size: 80px;
      }
    </style>
  </custom-style>
  <!--
  <div class="description">
    [[description]]
  <div>
  -->
`,
 properties: {
    href: {
      type: String,
      observer: '_changeTheme'
    },
    description: {
      type: String
    }
  },
  _changeTheme: function() {
    this.updateStyles({
      '--image-url':  "url('"+ this.href +"?"+Math.random()
    });
  },
  is: 'hisff-image'
});
