import '@polymer/polymer/polymer-legacy.js';

import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';



Polymer({
  _template: html`
  <link rel='stylesheet' href='./style/square.css' type='text/css' media='all' />
  <header id="sq-masthead" class="sq-site-header sq-black sticky">
    <div class="sq-container sq-clearfix">
      <div id="sq-site-branding">
                  <a href="https://demo.hashthemes.com/square/" rel="home">
            <img src="https://demo.hashthemes.com/square/wp-content/uploads/2016/09/square-logo.png" alt="Square">
          </a>
              </div><!-- .site-branding -->

      <div class="sq-toggle-nav">
        <span></span>
      </div>
      
      <nav id="sq-site-navigation" class="sq-main-navigation">
        <div class="sq-menu sq-clearfix"><ul id="menu-primary-menu" class="sq-clearfix"><li id="menu-item-136" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-18 current_page_item menu-item-136"><a href="https://demo.hashthemes.com/square/">Home</a></li>
<li id="menu-item-123" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-123"><a href="https://demo.hashthemes.com/square/about-us/">About us</a></li>
<li id="menu-item-297" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-297"><a href="#">Layouts</a>
<ul class="sub-menu">
  <li id="menu-item-305" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-305"><a href="https://demo.hashthemes.com/square/right-sidebar/">Right Sidebar</a></li>
  <li id="menu-item-299" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-299"><a href="https://demo.hashthemes.com/square/left-sidebar/">Left Sidebar</a></li>
  <li id="menu-item-298" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-298"><a href="https://demo.hashthemes.com/square/no-sidebar/">No Sidebar</a></li>
  <li id="menu-item-317" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-317"><a href="https://demo.hashthemes.com/square/no-sidebar-condensed/">No Sidebar – Condensed</a></li>
</ul>
</li>
<li id="menu-item-118" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-118"><a href="https://demo.hashthemes.com/square/team/">Team</a>
<ul class="sub-menu">
  <li id="menu-item-119" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-119"><a href="https://demo.hashthemes.com/square/team/jenny-smith/">Jenny Smith</a></li>
  <li id="menu-item-120" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-120"><a href="https://demo.hashthemes.com/square/team/cristina-deo/">Cristina Deo</a></li>
  <li id="menu-item-121" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-121"><a href="https://demo.hashthemes.com/square/team/john-smith/">John Smith</a></li>
  <li id="menu-item-122" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-122"><a href="https://demo.hashthemes.com/square/team/perry-warner/">Perry Warner</a></li>
</ul>
</li>
<li id="menu-item-117" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-117"><a href="https://demo.hashthemes.com/square/blog/">Blog</a></li>
<li id="menu-item-288" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-288"><a href="https://demo.hashthemes.com/square/shop/">Shop</a>
<ul class="sub-menu">
  <li id="menu-item-286" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-286"><a href="https://demo.hashthemes.com/square/checkout/">Checkout</a></li>
  <li id="menu-item-287" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-287"><a href="https://demo.hashthemes.com/square/cart/">Cart</a></li>
  <li id="menu-item-285" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-285"><a href="https://demo.hashthemes.com/square/my-account/">My Account</a></li>
</ul>
</li>
<li id="menu-item-179" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-179"><a href="https://demo.hashthemes.com/square/contact/">Contact</a></li>
</ul></div>     </nav><!-- #site-navigation -->
    </div>
  </header><!-- #masthead -->
  `,
  is: 'hisff-header'
});
