import '@polymer/polymer/polymer-legacy.js';

import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

import '@polymer/paper-styles/color.js';
import '@polymer/paper-styles/typography.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-media-query/iron-media-query.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';

import 'underscore/underscore-min.js';


Polymer({
  _template: html`
  <custom-style>
    <style>
      .menu-bar {
        --menu-padding: 15px;
        --background-color: #262626;
      }

      .menu-bar {
        @apply --paper-font-menu;
        color: white;
        background-color: var(--background-color);
        padding: var(--menu-padding);
      }

      .menu-bar a.menu-item {
        display: inline-block;
        text-decoration: none;
        color: white;
        font-weight: bold;
        background-color: var(--background-color);
        padding: 0px var(--menu-padding);
      }
      .menu-bar a.menu-item.separator:after {
        font-size: 1.2em;
        vertical-align: middle;
        position: relative;
        left: var(--menu-padding);
      }
      .menu-bar a.menu-item.right {
        float: right;
        padding: 0 var(--menu-padding);
      }

      .drawer-list {
        margin: 0 20px;
      }

      .drawer-list a {
        display: block;
        padding: 0 16px;
        line-height: 40px;
        text-decoration: none;
        color: var(--paper-grey-700);
      }

      .drawer-list a.iron-selected {
        color: black;
        font-weight: bold;
      }
      .logo {
          display: inline-block;
          vertical-align: bottom;
          width: 105px;
          height: 28px;
      }
    </style>
  </custom-style>

  <iron-media-query query="max-width: 650px" query-matches="{{smallScreen}}"></iron-media-query>

  <dom-if if="[[!smallScreen]]">
    <template>

      <div class="menu-bar">
        <hisff-image image="./images/logo.png" class="logo"></hisff-image>
        <dom-repeat items="[[items]]">
          <template>
            <a href="[[item.link]]" class$="menu-item [[item.direction]] [[_should_decorate_with_separator(item)]]">[[item.name]]</a>
          </template>
        </dom-repeat>
      </div>
    </template>
  </dom-if>

  <dom-if if="[[smallScreen]]">
    <template>
      <div class="menu-bar">
        <paper-icon-button icon="menu" on-click="_toggleDrawer"></paper-icon-button>
      </div>
      <app-drawer opened="{{drawerOpened}}" swipe-open tabindex="0">
        <iron-selector role="navigation" class="drawer-list">
          <dom-repeat items="[[items]]">
            <template>
              <a href="[[item.link]]" class$="[[item.direction]]">[[item.name]]</a>
            </template>
          </dom-repeat>
        </iron-selector>
      </app-drawer>
    </template>
  </dom-if>
`,
  properties: {
    items: {
      value: [
        { 
          name: '2018 HISFF',
          link: '#'
        },
        { 
          name: '公共放映计划',
          link: '#'
        },
        { 
          name: '评委',
          link: '#'
        },
        { 
          name: '资讯',
          link: '#'
        },
        { 
          name: '活动',
          link: '#'
        },
        { 
          name: '往届优秀短片',
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
  _toggleDrawer() {
     this.drawerOpened = !this.drawerOpened;
  },
  is: 'hisff-menu'
});
