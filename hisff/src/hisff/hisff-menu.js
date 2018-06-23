import '@polymer/polymer/polymer-legacy.js';

import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

import '@polymer/paper-styles/color.js';
import '@polymer/paper-styles/typography.js';

import 'underscore/underscore-min.js';


Polymer({
  _template: html`
  <custom-style>
    <style>
      .menu-bar {
        --menu-padding: 7px;
      }

      .menu-bar {
        @apply --paper-font-menu;
        color: white;
        background-color: var(--paper-grey-900);
        padding: var(--menu-padding);
      }

      .menu-bar a.menu-item {
        display: inline-block;
        text-decoration: none;
        color: white;
        background-color: var(--paper-grey-900);
        padding: 0px var(--menu-padding);
      }
      .menu-bar a.menu-item.separator:after {
        content: '|';
        font-size: 1.2em;
        vertical-align: middle;
        position: relative;
        left: var(--menu-padding);
      }
      .menu-bar a.menu-item.right {
        float: right;
        padding: 0 var(--menu-padding);
      }
    </style>
  </custom-style>

  <div class="menu-bar">
    <dom-repeat items="[[items]]">
      <template>
        <a href="[[item.link]]" class$="menu-item [[item.direction]] [[_should_decorate_with_separator(item)]]">[[item.name]]</a>
      </template>
    </dom-repeat>
  </div>
`,
  properties: {
    items: {
      value: [
        { 
          name: '首页',
          link: '#'
        },
        { 
          name: '导航栏 1',
          link: '#'
        },
        { 
          name: '导航栏 2',
          link: '#'
        },
        { 
          name: '导航栏 3',
          link: '#'
        },
        { 
          name: '导航栏 4',
          link: '#'
        },
        { 
          name: '导航栏 5',
          link: '#'
        },
        { 
          name: '导航栏 6',
          link: '#'
        },
        { 
          name: '导航栏 7',
          link: '#'
        },
        { 
          name: '登陆',
          link: '#',
          direction: 'right' 
        }
      ]
    }
  },
  /**
   * Decorate all left menu items except the last one with '|'.
   */
  _should_decorate_with_separator: function(item) {
      const [lastLeftMenuItem] = _.filter(this.items, function(i){return i.direction != 'right';}).slice(-1);
      return lastLeftMenuItem.name != item.name && item.direction != 'right' ? 'separator' : '';
  },
  is: 'hisff-menu'
});
