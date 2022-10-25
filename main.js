
//Change the font color of the paragraph to light blue.

let paragraph = document.querySelector("p");
paragraph.style.color = "lightblue";

//Change the font size of the heading to 48px.
let header = document.querySelector("h1");
header.style.fontSize = '48px';

//Change the text of the paragraph to be the following Hipster Ipsum:
paragraph.innerText = "Lorem ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress.";

//Change the 13th item to be half transparent. (Look this up!)
let item13 = document.querySelector("#item-13");
item13.style.opacity = "0.5";

//Change the 3rd item's text to say:
let item3 = document.querySelector("#item-3");
item3.innerText = "I say, Hi!";

//Change the image below the list to be whatever image you want.
let myImage = document.querySelector("img");
myImage.src = "https://c4.wallpaperflare.com/wallpaper/343/446/426/anime-naruto-itachi-uchiha-sasuke-uchiha-wallpaper-thumb.jpg";
myImage.style.height = "300px";

//Using HTML, add a new image of your choice below or to the right of the other image and give it a unique id.
let myImage2 = document.querySelector("#TOM");
myImage2.src = "https://www.freecodecamp.org/news/content/images/2020/05/myspace-tom-profile.jpg";
myImage2.style.height = "300px";

//Using HTML, add a 16th <li> to the list. Once again with HTML, give it an ID that follows the others' numbering scheme. 
//Give that <li> the following text:
let item16 = document.querySelector("#item-16");
item16.className = "item";
item16.innerText = "Won't get fooled again.";