Jatta Ecommerce mobile template
---
_________
Plan
-


- Table of Contents
- How to change the color of theme
- Elements and page decoration
- jQuery Features
- Typography Features
- How to add content
- How to change contact adress

A. How to change the color of theme
-
Change the current class to the body.
Example:  

    <body class="blue_skin">
Copy file style.css from folder thema_blue_skin/style, if you change color blue, and paste in you folder style.

All the main color theme styles are collected at the beginning, if you want to change the color, make it a little different shade, you need to find an element with color, they are written with the inheritance of a class that is written in the body, and to change to the color you want, for example,
    
    .blue_skin #header {background: rgba(39,170,225,0.8);} 

B. Elements and page decoration
--
- Sliders

Example of code slider:
  
		<div class="camera_wrap camera_blue_skin" id="camera_index">
		    <div data-src="images/slide1.jpg"></div>
		    <div data-src="images/slide1.jpg"></div>
		    <div data-src="images/slide1.jpg"></div>
		</div><!-- #camera_index -->
		
Path to the image is written in the attribute data-src.
We have a large variety of sliders, check them out below! 
You can add a caption to the slide, just put a div with class "camera_caption" into the div above: 
  
     <div data-src="images/slide1.jpg">
	   <div class="camera_caption">The text of your caption</div>
     </div>
    
You can also put some HTML elements into your slides. These elements must be wrapped into a div with position:absolute and they can be included in the transition effect too: 
  
     <div data-src="images/slide1.jpg">
	<div class="fadeIn camera_effected">The text of your html element</div>
     </div>

To add a video into your slideshow you should put an iframe into one of your slides: 
  
     <div data-src="images/slide1.jpg">
	<iframe src="http://player.vimeo.com/video/1084537" width="100%"
	height="100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen
	allowFullScreen></iframe>
     </div>

- Lists on the page

Lists may be in the form of navigation, such as

     <nav id="menu">
	  <ul>
		<li>
			<a href="category.html">
				<span class="icon icon-Myicons-25"></span>
				<span class="icon-go icon-Myicons-19"></span>Electronics
			</a>
		</li>
		<li>
			<a href="category.html">
				<span class="icon icon-Myicons-26"></span>
				<span class="icon-go icon-Myicons-19"></span>Clothing
			</a>
		</li>
		<li>
			<a href="category.html">
				<span class="icon icon-Myicons-24"></span>
				<span class="icon-go icon-Myicons-19"></span>Souvenirs
			</a>
		</li>
		<li>
			<a href="category.html">
				<span class="icon icon-Myicons-23"></span>
				<span class="icon-go icon-Myicons-19"></span>Food
			   </a>
		</li>
	 </ul>
     </nav>
    
You can make a list with no icons:

     <!-- group_list -->
             <div class="group_list delivery_option_list">
	 <ul>
		<li><a href="map.html"><em>Boston</em>
			<span class="icon-link icon-Myicons-02"></span></a></li>
		<li><a href="map.html"><em>Chicago</em>
			<span class="icon-link icon-Myicons-02"></span></a></li>
		<li><a href="map.html"><em>New York</em>
			<span class="icon-link icon-Myicons-02"></span></a></li>
		<li><a href="map.html"><em>Dallas</em>
			<span class="icon-link icon-Myicons-02"></span></a></li>
		<li><a href="map.html"><em>Astin</em>
			<span class="icon-link icon-Myicons-02"></span></a></li>
		<li><a href="map.html"><em>Richmond</em>
			<span class="icon-link icon-Myicons-02"></span></a></li>
		<li><a href="map.html"><em>Kinston</em>
			<span class="icon-link icon-Myicons-02"></span></a></li>
		<li><a href="map.html"><em>Beaufort</em>
			<span class="icon-link icon-Myicons-02"></span></a></li>
	</ul>
     </div><!-- group_list -->

- Buttons

You can use big buttons with the help of class .btn_big, and with small class .btn_small.

Color management add another class .btn_send - for the base color, regardless of the theme, and .sign-button - color yours theme

     <a href="#" class="btn_big btn_send">Button</a>
     <a href="#" class="btn_small sign-button">Button</a>
    
There are buttons with icons, example, on page product

     <div class="iten_line_btn">
	    <a href="#" class="add_btn add_btn_cart js_add_btn_cart">
	    <i class="icon icon-Myicons-16"></i><span>Add to cart</span></a>
	    <a href="#" class="add_btn add_btn_wish js_add_btn_wish">
	    <i class="icon icon-Myicons-15"></i><span>Add to Whishlist</span></a>
     </div>	
    
And small button with icon on page wishlist.html

     <a href="#" class="add_cart js_add_cart">
     <span class="icon icon-Myicons-16"></span>
     <span class="text_cart">Add to cart</span>
     </a>

- Forms

You can use the form on the page:

     <div class="form"><!-- form -->
     <form action="#">
	    <div class="row">
	     	<input class="inp_t" type="text" value="" placeholder="E-mail"         name="email"/>   
      </div>
	      <div class="row">
		<input class="inp_t" type="password" value="" placeholder="Password"
		name="pass"/>
		<a class="forgot_link fade" href="remind.html">Forgot?</a>
	</div>
	     <button class="sign-button btn_small">Sign in</button>
	     <a href="join.html" class="link_form btn_small fade">Join</a>
         </form>
     </div><!-- form -->
    
You can add text area in you form:

     <div class="row">
	      <textarea class="textar" name="massege" id="" cols="30" rows="10"
	      placeholder="Massage"></textarea>
     </div>
    
- Fonts, icons, text

All icons is graph.
For performance reasons, all icons require a base class and individual icon class. To use, place the following code just about anywhere. Be sure to leave a space between the icon and text for proper padding.

Icon classes cannot be directly combined with other components. They should not be used along with other classes on the same element. Instead, add a nested and apply the icon classes to the icon classes cannot be directly combined with other components. They should not be used along with other classes on the same element. Instead, add a nested 

     <code>&lt;span&gt;</code> 

and apply the icon classes to the 

     <code>&lt;span&gt;</code>.</p>

All icons are collected in the font file, and are connected via @font-face

     @font-face {
     font-family: 'icomoon';
     src:url('fonts/icomoon.eot?r1tng9');
     src:url('fonts/icomoon.eot?#iefixr1tng9') format('embedded-opentype'),
	     url('fonts/icomoon.woff?r1tng9') format('woff'),
	     url('fonts/icomoon.ttf?r1tng9') format('truetype'),
	     url('fonts/icomoon.svg?r1tng9#icomoon') format('svg');
     font-weight: normal;
     font-style: normal;
     }
    
Font has been generated using the site https://icomoon.io
Initially style.css file has a list of classes for icons.

     ...
     .icon-Myicons-03:before {
	     content: "\e602";
     }
     .icon-Myicons-04:before {
    	 content: "\e603";
     }
     .icon-Myicons-05:before {
	     content: "\e604";
     }
     .icon-Myicons-06:before {
	     content: "\e605";
     }
     ...
    
Example used:

     <span class="icon icon-Myicons-29"></span>
    
- One item

Insert container with item in your list ul

     <li class="item"><!-- item -->
	   <a href="tovar.html" class="fade">
		   <em class="status s_new">New</em>
		   <span class="img_item">
			   <img src="images/item.png" alt="">
		   </span>
		   <div class="info_item">
			     <span class="title_item">Title item</span>
			     <p>Information about item</p>
		   </div>
	    </a>
     </li>
    
C. jQuery Features
---

- Slider

The site uses a plugin for slider camera http://www.pixedelic.com/plugins/camera/
To call a slider needed element in your main.css prescribe the following:

     $('#camera_index').camera({
         height: '65%',
         loader: 'bar',
         thumbnails: false,
         hover: false,
         opacityOnGrid: false
     });
    
The site developers have a lot of different settings

- Dropdown menus

Submenus can have an infinite ammount of items! 

     <nav id="menu" class="category js_category">
     <ul>
     <li>
         <a href="catalog.html">
             <span class="icon-go icon-Myicons-19"></span>Tablets
         </a>
             <ul class="subcategory">
             <li><a href="catalog.html"><span class="icon-go icon-Myicons-02"></span>Nokia</a></li>
             <li><a href="catalog.html"><span class="icon-go icon-Myicons-02"></span>Samsung</a></li>
             <li><a href="catalog.html"><span class="icon-go icon-Myicons-02"></span>HTC</a></li>   
             </ul>
     </li>
     </ul>
     </nav>
    
Jquery function is in the file main.js

- Toggles


     <div class="row">
         <label class="left">Only in stock</label>  
         <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox   js_switch"  id="myonoffswitch" checked>
     </div>
    
    
To create a checkbox, call .iButton() on a jQuery element.

     $(".js_switch").iButton();
     <!-- The iButton script -->
     <script type='text/javascript' src='js/jquery.ibutton.js'></script>
    
Detailed documentation can be found on the website

http://www.givainc.com/labs/ibutton_jquery_plugin.cfm

- Tabs

Tabs are very easy to use but you should understand that tabs expand on a horizontal basis. Their title SHOULD not be big, as this will cause them to jump a row on devices such as nokias or blackberries that have lower screen sizes. We suggest using a page similar to http://www.responsinator.com/ to test your tabs. Usually 4 tabs, 5/6 letters in each will be exactly the right size.

     <div class="wrap-tabs">
         <ul class="tabs clearfix">
         <li class="first"><a href="#tab1">Tab 1</a></li>  
         <li class=""><a href="#tab2">Tab 2</a></li>
         <li class="last"><a href="#tab3">Tab 3</a></li>
     </ul>
         <div class="tab_container">
		   <div id="tab1" class="tab_content">
			 <p>
				Tab 1 Text
            		</p>
	        </div>
		<div id="tab2" class="tab_content">
			  <p>
				  Tab 2 Text
            		 </p>
	         </div>
		 <div id="tab3" class="tab_content">
			 <p>
				  Tab 3 Text
			 </p>
             </div>
         </div>
     </div>
    
Jquery function is in the file main.js

- Checkboxes

Checkbox examples can be found bellow, copy and paste them to create them

     <div class="row">
         <label class="radio_sort one_radio js_radio_sort">
              <input type="checkbox" name="season" value="value"><span></span>
             value
         </label>
     </div>
    
On the filter status is another kind of checkbox

     <div class="row">
         <label class="check_status js_status_label">
         <input type="checkbox" name="sale" value="sale"><span></span>
	        Sale
         </label>
     </div>
    
-  Slider values

-- Handles

The number of handles can be set using the start option. This option accepts an array of initial handle positions. Set one value for one handle, two values for two handles.

Using HTML5 input elements

     <div id="price_rang" class="price_range expand">  
         <div class="range"></div>
         <div class="range-fields">
             <span class="between">From</span>
             <input class="input_start input-base" type="text"/>$
             <span class="between">to</span>
             <input class="input_end input-base"  type="text"/>$
         </div>
     </div>
    
To create a slider, call .noUiSlider() with your options on a jQuery element.

     $('.price_range .range').noUiSlider({
         range: [0,20000],
         start: [0,20000],
         handles: 2,
         connect: true,
         serialization: {
             to: [ $('.input_start'), $('.input_end') ],
             resolution: 1,
         }        
     });
    
Detailed description and settings can be found on the website of the developers http://refreshless.com/nouislider/

     <!-- The noUiSlider script -->
     <script type='text/javascript' src='js/jquery.nouislider.min.js'></script>
    
- Star Rating

Detailed description and settings can be found on the website http://wbotelhos.com/raty

Example:

     <div class="js_star stars" data-rating="4"></div>

- Call function:

     $('.js_star').raty({
         readOnly : true,
             score: function() {
         return $(this).attr('data-rating');
         }
     });
    
File jquery.raty.min.js, and images star-off.png, star-on.png

D. Typography Features
-- 

- Text Alignments


     <div class="container_content">
         <div class="content">
             <div class="content_box">
                 <p class="left"><strong>Aligne Left</strong></p>
                 <p class="left">Stunning. Innovative. Simply ispired.
                 The Samsung Galaxy S5 is technology
                 that truly impacts your life. Make split-
                 -second moment yours. Watch HD
                 movies and games roar to life. Or track
                 your life...</p>
              </div>
             <div class="content_box">
                 <p class="center"><strong>Aligne Center</strong></p>
                 <p class="center">Stunning. Innovative. Simply ispired.
                 The Samsung Galaxy S5 is technology
                 that truly impacts your life. Make split-
                 -second moment yours. Watch HD
                  movies and games roar to life. Or track
                 your life...</p>
             </div>
             <div class="content_box last">
                 <p class="right"><strong>Aligne Right</strong></p>
                 <p class="right">Stunning. Innovative. Simply ispired.
                 The Samsung Galaxy S5 is technology
                 that truly impacts your life. Make split-
                 -second moment yours. Watch HD
                 movies and games roar to life. Or track
                 your life...</p>
              </div>
         </div>
     </div>
    
- Quote styles


     <div class="content">	
         <div class="content_box">
             <p class="quete">Good thing. Took a discount. Pleased with the price
			 and quality. The material is good, everything is fine.
			 Recommend to all!</p>
             <div class="row_user">
                 <span class="name_user">Ronny</span> - 
                 <span class="date_rev">29 may 2014</span>
             </div>
         </div>
     </div>

- List styles

-Ordered list

     <div class="content">
         <div class="content_box">
             <ol>
                 <li>Text list</li>
			     <li>Text list</li>
			     <li>Text list</li>
			     <li>Text list</li>
			     <li>Text list</li>
			     <li>Text list</li>
             <ol>
         </div>
     </div>

-Unordered list

     <div class="content">
         <div class="content_box">
             <ul>
                 <li>Text list</li>
                 <li>Text list</li>
			     <li>Text list</li>
		   	     <li>Text list</li>
			     <li>Text list</li>
			     <li>Text list</li>
		    <ul>
	     </div>
     </div>

- Review


     <div class="content_box">
         <div class="one_review">
             <div class="line_star">
                 <div class="js_star stars" data-rating="4"></div>
                 <div class="row_user">
				 <span class="name_user">Ronny</span> - 
                 <span class="date_rev">29 may 2014</span>
             </div>
         </div>
             <div class="text_rev">
                 <p>Good thing. Took a discount. Pleased with the price
				 and quality. The material is good, everything is fine.
			     Recommend to all!</p>
             </div>
         </div>
     </div>
    
- Circles


     <div class="content action_box">
         <div class="wrap_box">
             <div class="wrap_circle">
                 <a href="#" class="circle reg">Circle 1</a>
                 <a href="#" class="circle new">Circle 2</a>
             </div>
         </div>
     </div>	
     
E. How to add content
--

Container: a container is the main housing div for your template, every item you'll be inserting in a template will be added inside one wrapper, called container

     <div class="container"></div>
    
Content: a content is a wrapper for content in your template, add 

     <div class="content"></div> 
         <div class="container">
         <div class="content">
             <p>This is a demo</p>
         <div>
     <div>
    
F. How to change contact address
---

File contact.html has contacts data, edit it and replace the address there with yours! It is also possible to insert the iframe with map. Can make a map with its location, and insert it.