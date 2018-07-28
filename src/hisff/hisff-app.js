import '@polymer/polymer/polymer-legacy.js';

import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

import './hisff-menu.js';
import './hisff-header.js';
import './hisff-banner.js';
import './hisff-banner-v2.js';
import './hisff-mosaic.js';
import './hisff-footer.js';

Polymer({
  _template: html`
     <!-- <hisff-menu></hisff-menu> -->
     <hisff-header></hisff-header>
     <div id="sq-content" class="sq-site-content sq-clearfix">
     	<!-- <hisff-banner></hisff-banner> -->
     	<hisff-banner-v2></hisff-banner-v2>
     	<hisff-mosaic></hisff-mosaic>
     </div>
     <hisff-footer></hisff-footer>
  `,
  is: 'hisff-app'
});
