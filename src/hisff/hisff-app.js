import '@polymer/polymer/polymer-legacy.js';

import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

import './hisff-menu.js';

Polymer({
  _template: html`
     <hisff-menu></hisff-menu>
  `,
  is: 'hisff-app'
});
