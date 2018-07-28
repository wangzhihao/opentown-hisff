import '@polymer/polymer/polymer-legacy.js';

import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';



Polymer({
  _template: html`
<link rel='stylesheet' href='./style/square.css' type='text/css' media='all' />
<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css' type='text/css' media='all' />
<!-- view-source:https://demo.hashthemes.com/square/ -->
<footer id="sq-colophon" class="sq-site-footer">
   <div id="sq-top-footer">
      <div class="sq-container">
         <div class="sq-top-footer sq-clearfix">
            <div class="sq-footer sq-footer1">
               <aside id="nav_menu-5" class="widget widget_nav_menu">
                  <h5 class="widget-title">MORE LINKS</h5>
                  <div class="menu-footer-menu-container">
                     <ul id="menu-footer-menu" class="menu">
                        <li id="menu-item-195" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-195"><a href="https://demo.hashthemes.com/square/about-us/">About us</a></li>
                        <li id="menu-item-196" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-196"><a href="https://demo.hashthemes.com/square/blog/">Blog</a></li>
                        <li id="menu-item-197" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-197"><a href="https://demo.hashthemes.com/square/responsive-design/">Responsive Design</a></li>
                        <li id="menu-item-198" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-198"><a href="https://demo.hashthemes.com/square/services/">Services</a></li>
                        <li id="menu-item-199" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-199"><a href="https://demo.hashthemes.com/square/team/">Team</a></li>
                        <li id="menu-item-200" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-200"><a href="https://demo.hashthemes.com/square/shop/">Shop</a></li>
                     </ul>
                  </div>
               </aside>
            </div>
            <div class="sq-footer sq-footer2">
               <aside id="nav_menu-4" class="widget widget_nav_menu">
                  <h5 class="widget-title">Custom Links</h5>
                  <div class="menu-footer-menu-container">
                     <ul id="menu-footer-menu-1" class="menu">
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-195"><a href="https://demo.hashthemes.com/square/about-us/">About us</a></li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-196"><a href="https://demo.hashthemes.com/square/blog/">Blog</a></li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-197"><a href="https://demo.hashthemes.com/square/responsive-design/">Responsive Design</a></li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-198"><a href="https://demo.hashthemes.com/square/services/">Services</a></li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-199"><a href="https://demo.hashthemes.com/square/team/">Team</a></li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-200"><a href="https://demo.hashthemes.com/square/shop/">Shop</a></li>
                     </ul>
                  </div>
               </aside>
            </div>
            <div class="sq-footer sq-footer3">
               <aside id="categories-6" class="widget widget_categories">
                  <h5 class="widget-title">Categories</h5>
                  <ul>
                     <li class="cat-item cat-item-9"><a href="https://demo.hashthemes.com/square/category/brochure/" title="This is test description for the brochure category.">Brochure</a></li>
                     <li class="cat-item cat-item-8"><a href="https://demo.hashthemes.com/square/category/graphics/" >Graphics</a></li>
                     <li class="cat-item cat-item-7"><a href="https://demo.hashthemes.com/square/category/logo/" >Logo</a></li>
                     <li class="cat-item cat-item-10"><a href="https://demo.hashthemes.com/square/category/visiting-card/" >Visiting card</a></li>
                     <li class="cat-item cat-item-6"><a href="https://demo.hashthemes.com/square/category/websites/" >Websites</a></li>
                  </ul>
               </aside>
            </div>
            <div class="sq-footer sq-footer4">
               <aside id="text-3" class="widget widget_text">
                  <h5 class="widget-title">About Us</h5>
                  <div class="textwidget">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
               </aside>
            </div>
         </div>
      </div>
   </div>
   <div id="sq-bottom-footer">
      <div class="sq-container sq-clearfix">
         <div class="sq-site-info">
            WordPress Theme                 <span class="sep"> | </span>
            <a target="_blank" href="http://hashthemes.com/wordpress-theme/square/">Square</a> by Hash Themes               
         </div>
         <div class="sq-site-social">
            <a class="sq-facebook" href="#" target="_blank"><i class="fa fa-facebook"></i></a><a class="sq-twitter" href="#" target="_blank"><i class="fa fa-twitter"></i></a><a class="sq-googleplus" href="#" target="_blank"><i class="fa fa-google-plus"></i></a><a class="sq-pinterest" href="#" target="_blank"><i class="fa fa-pinterest"></i></a><a class="sq-youtube" href="#" target="_blank"><i class="fa fa-youtube"></i></a><a class="sq-linkedin" href="#" target="_blank"><i class="fa fa-linkedin"></i></a><a class="sq-instagram" href="#" target="_blank"><i class="fa fa-instagram"></i></a>             
         </div>
      </div>
   </div>
</footer>
<!-- #colophon -->
  `,
  is: 'hisff-footer'
});
