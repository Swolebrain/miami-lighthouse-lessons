

var a2 = new Audio();
a2.src = "http://www.fvi-grad.com/audio/a.mp3";
a2.load();
a2.play();


/*end phase 1
  Agenda: What we are making
  CTRL-ESC -> documents -> CTRL+SHIFT+N new folder, call it keyboard
  Browse to your folder under documents
  Tab over to "select folder"
  Ctrl+n
  
    
  Explanations:
  - Why are we using HTML? Because it's easy. Everybody can run it. With 
  other languages, you need to install them and stuff, and then run your
  programs from a terminal... It's difficult to package your programs.
  - What a website is: a program you download and your browser runs
  - What HTML is: a language to specify the structure of the contents of the site. Good
  html is meaningful and even a machine should be able to tell whats a menu, what's main
  content, etc.
  - Where does javascript and coding come in? It's how you program behaviors into your site.
    HTML just says this text goes inside this block, this other text goes next to it, etc. 
    With javascript, that's how you can say "hey browser, when the user hits the 'a' key then
    play a piano note."
  - So now we are going to start learning programming.
  - First thing to learn: what a variable is. Basically a little virtual bucket that can store 
  a value. Just like in math we can say y = 5 or x = 10, same thing goes in programming.
  - Next thing to learn, what an object is and does. 
      -All code eventually comes down to zeroes and ones.
      -What an object is, it's basically someone took the time to package a bunch of
      functionality into something easy for you to use. For example, playing a sound could
      be probably 200 lines of code in 0's and 1's but with the javascript audio object, we
      can play it in just 4 lines. 
      -What coding really is, then, it's the process of learning how to write in this language
      and also how to use the objects that are already made for you.
  

*/



document.onkeydown = function(){
  a2.currentTime = 0;
  a2.play();
};
