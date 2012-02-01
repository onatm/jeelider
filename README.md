# Jeelider

* Author:    Onat Yigit Mercan - onatmercan [at] gmail [dot] com
* Date:      February, 2012
* Version:   1.0.0
* GitHub:    <https://github.com/onatm/jeelider>

# What is Jeelider

Jeelider is an oop jQuery image slider gallery.

## Features

* Multiple sliders can be created in same page.
* Fully customizable.
* Only 4kb!

## Requirements

* jQuery 1.4 or newer.

## Example

Here a simple example of the usage of Jeelider:

* Javascript:

```javascript
$(document).ready(function(){	
	$("#slides").jeelider({
		name: 'jeelider',
		slideClass: 'slide',
		pageClass: 'pages',
		prevNext: true,
		prevNextClass: 'navigation',
		prevClass: 'previous-button',
		nextClass: 'next-button',
		prevText: '< Previous',
		nextText: 'Next >',
		speed: 900,
		interval: 3000
	});
});
```

* HTML:

```html
<div class="jeelider">
	<div class="frame">
		<div id="slider-container">
			<div id="slides">
				<div class="slide">
					<div class="image">
						<a href="#"><img src="images/01.jpg" alt="" /></a>
					</div>
					<div class="caption-">
						<p>Image 1</p>
					</div>
				</div>
				<div class="slide">
					<div class="image">
						<a href="#"><img src="images/02.jpg" alt="" /></a>
					</div>
					<div class="caption-">
						<p>Image 2</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="pages">
	</div>
	<div class="navigation">
	</div>
</div>
```

* CSS:

```css
.jeelider{ margin: 20px; }
.frame{ width: 700px; background-color: #EEE; padding: 10px; }
#slider-container{ overflow: hidden; position: relative; width: 700px; height: 200px; }
#slides{ position: absolute; }
.slide{ position: relative; float: left; width: 700px; height: 200px; }
.image{ position: relative; float: left; }
.caption{ z-index: 100; position: absolute; bottom:0px; width:700px; height:40px; line-height:40px; background-color: #EEE; opacity:0.6; }
.caption p{ margin:0 5px; padding:0; }
.pages{ margin-top: 10px; }
.pages ul{ margin: 0; padding: 0; }
.pages li{ margin-right:5px; float:left; list-style:none; }
.pages li a{ padding: 5px; text-decoration: none; background-color: #EEE; color: #000; }
.pages li.active a{ background-color: #000; color: #EEE; }
.pages li a:hover{ background-color: #000; color: #EEE; }
.navigation a{ text-decoration: none; }
.navigation .previous-button{ margin: 2px; }
.navigation .next-button{ margin: 2px; }
```