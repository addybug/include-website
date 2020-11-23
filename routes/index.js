'use strict';

module.exports = function(app) {

  app.get('/crash-course/live-lesson/:day', function(req, res) {
    let crashContent = {
      june13: {
        day: "Saturday June 13",
        time: "Time: 10am-12pm CST",
        topics: "<li>Python introduction</li> <li>Data types</li> <li>Variables</li> <li>Strings</li>",
        title: "Song Lyrics",
        description: "<p> Find your favorite song on Genius and print the chorus line by line in Python. </p> <ul> <li> Hint: use <span class='function-style'>print</span>() and <span class='var-style'>/n</span> </li> </ul> <h2 class='res_eve_des project-header' > Ice Breaker 1 </h2> <p> Create variables (e.g. “<span style='color: #333333; font-weight: bold' >name</span>”, “<span class='var-style'>age</span>”) and set their values to the corresponding fact about yourself. Then, print the variable. Create at least 10 variables and use proper Python naming conventions. </p>",
        slideShow: "https://docs.google.com/presentation/d/1g6oshn4ALGeCruvrAJfxwfFVMzuUI9PwasGhNUmhOJM/edit?usp=sharing",
        youtube: "https://youtu.be/a8IVRrz1DOc"
      },
      june14: {
        day: "Sunday June 14",
        time: "Time: 1pm-3pm CST",
        topics: "<li>Conditionals</li> <li>Loops</li> <li>Functions</li> <li>Lists</li>  <li>Dictionaries</li>",
        title: "Area Calculator",
        description: "<p>Create a program that:</p> <ul> <li>Takes a float from user input</li> <li> Assigns that input to a variable (<span class='var-style'>radius</span>) </li> <li>Calculates the area of a circle using 3.14 as pi</li> <li>Prints the area</li> </ul>",
        slideShow: "https://docs.google.com/presentation/d/1tiejS-VzwIYJ9z0xqgue0z0_bTe87vqzufwjSwMtjQY/edit?usp=sharing",
        youtube: "https://youtu.be/kAuMwTu12uE"
      },
      june21: {
        day: "Sunday June 21",
        time: "Time: 2pm-3pm CST",
        topics: "<li>Last live lesson</li> <li>Guess word clouds</li> <li>Ways to keep learning</li> <li>Coding competitions</li> <li>Parting words</li>",
        title: "",
        description: "",
        slideShow: "https://docs.google.com/presentation/d/1A5agrdAqPzAKDBF0k-v3TjXMFKkOZ6-Y8O-Phqd3T7A/edit?usp=sharing",
        youtube: "https://youtu.be/nHIj-zW-bI8"
      }
    }
      res.render('pages/live-lesson', {info: crashContent[req.params.day]});
  });

  app.get('/crash-course/:day', function(req, res) {
    let crashContent = {
      june15: {
        day: "Monday June 15",
        title: "Ice Breaker 2",
        description: "<p> Take your code from ice Breaker I and format the print statements to create sentences. </p> <ul> <li> For example, <span class='black-span' ><span class='color1-span'>print</span>(<span class='color2-span' >f'My name is {name} and I am {age} years old.'</span ><span class='color3-span'>)</span></span > </li> </ul> <h2 class='res_eve_des project-header' > Email Converter </h2> <p>Create a program that:</p> <ul> <li>Takes a yahoo email address from user input</li> <li> Assigns that input to a variable (<span class='var-style' >email</span >) </li> <li> Takes the “@yahoo.com” part off of the address using string indexing and splicing </li> <div class='small-margin'> <ul> <li>Hint: Use the Strings Cheat Sheet</li> </ul> </div> <li> Assigns the username of the email address to a variable (<span class='var-style' >username</span >) </li> <li> Assigns <span class='black-span' >username <span class='color3-span'>+</span> <span class='color2-span' >''@gmail.com'</span ></span > to a variable named <span class='var-style'>new_email</span> </li> <li> Prints <span class='var-style'>new_email</span> </li> </ul>",
        viewAttachments: "unview",
        view2: "unview",
        starter1: "", starter2: ""
      },
      june16: {
        day: "Tuesday June 16",
        title: "Middle Characters",
        description: "<p>Create a program that:</p> </div> <ul> <li>Takes a string as an input</li> <li> If the length of the string is divisible by 2, print the middle 2 characters </li> <div class='small-margin'> <ul> <li> Hint: Use this <a href='https://www.freecodecamp.org/news/the-python-modulo-operator-what-does-the-symbol-mean-in-python-solved/#:~:text=The%20%25%20symbol%20in%20Python%20is,basic%20syntax%20is%3A%20a%20%25%20b' class='attachment-links2' > this </a> article. </li> </ul> </div> <li>Else, print the middle character</li> </ul> <h2 class='res_eve_des project-header' > Choose Your Own Adventure </h2> <p> Have you ever played a Choose Your Own Adventure game on your phone or read the Choose Your Own Adventure series? If not, take a minute to look it up and get familiar with the concept because today you will be writing your own! </p> <ul> <li> Print out the beginning of a story. Be as creative as you want! </li> <li>Give the user at least 3 options</li> <li> Print out different results depending on the user’s choice </li> </ul> <div class='smaller-margin'> <p> For this project, write at least 5 different sets of choices for the user. Share your programs in Slack so other students can play! </p>",
        viewAttachments: "unview",
        view2: "unview",
        starter1: "", starter2: ""
      },
      june17: {
        day: "Wednesday June 17",
        title: "Email Converter 2",
        description: "<p> Download the starter code form the website and create: </p> </div> <ul> <li>A function that returns the domain of the email</li> <li> 3 functions that take the domain of the email address as a parameter and return the new email address with a different domain (<span class='var-style' >to_gmail</span >, <span class='var-style'>to_yahoo</span>, <span class='var-style'>to_outlook</span >) </li> <ul> <li>Hint: Use Use the slides in “Live Lesson 2”</li> </ul> </ul> <h2 class='res_eve_des project-header' > Alphabet Loop </h2> <div class='paragraph-container'> <p> Download the starter code and write a function that: </p> </div> <ul> <li>Takes in a string as a parameter</li> <li>Takes each letter of the string and puts them into a list</li> <div class='list-styling small-margin-bottom'> <ul> <li> For example, <span class='color2-span'>'cat'</span> to <span style='color:black' >[<span class='color2-span'>'c'</span>, <span class='color2-span'>'a'</span>, <span class='color2-span'>'t'</span>]</span > </li> <li>Hint: Use the slides in “Live Lesson 2”</li> </ul> </div> <li>Loop through all the elements of the list</li> <div class='list-styling'> <ul> <li> Use the <span class='var-style' >get_char_value</span > function in the starter code to get a 0-25 digit number that represents the letter </li> <li> Find the element that corresponds to that index in <span class='var-style' >alphabet_list</span > </li> </ul> </div> <li> Print <span class='black-span' ><span class='color1-span'></span>(<span class='color2-span' >f'{letter} is for {alphabet_list[letter_value]}.'</span ><span class='color3-span'></span>)</span > </li> <div class='list-styling'> <ul> <li>For example, “A is for Apple.”</li> </ul> </ul>",
        viewAttachments: "",
        view2: "",
        starter1: "https://drive.google.com/file/d/1h6mbaWsClrFUHo6vtao13I8VHItHwhb1/view?usp=sharing",
        starter2: "https://drive.google.com/file/d/1SpEE_7HxzfL0mNzsgkj5VNt7fahCurRu/view?usp=sharing"
      },
      june18: {
        day: "Thursday June 18",
        title: "Ice Breaker III",
        description: "<p> Using your Ice Breaker II Code, create a dictionary and store all of your variables as key-value pairs in that dictionary. Adjust your print statements so that they will print the key and value from the dictionary. <br> <br> <br> <br> <br></p>",
        viewAttachments:"unview",
        view2: "unview",
        starter1: "", starter2: ""
      },
      june19: {
        day: "Friday June 19",
        title: "Final Project: Word Cloud",
        description: "<ul> <li>Download the starter code from the website</li> <li> Find your favorite book on <a href='https://www.gutenberg.org/' class='res_eve_des paragraph-links' >Project Gutenberg</a > and download the .txt file </li> <li> Upload the file in <a href='https://www.repl.it' class='res_eve_des paragraph-links' >repl.it</a > </li> <li> Follow the instructions in the starter code to import the book </li> <li>Put all of the words in the book into a list</li> <li> Remove all of the <span class='var-style' >common_words</span > from the list </li> <ul> <li>Hint: Convert the word to lowercase before comparing</li> </ul> <li> Create a dictionary and loop through the list to count the frequency of the word </li> <ul> <li>Assign the word as a key and the value 1</li> <li> If the word has already been assigned as a key, increment the value by 1 </li> </ul> <li> Run your code to create a word cloud. Save your word cloud until Sunday and we will try to guess what book it is. </li> </ul>",
        viewAttachments: "",
        view2: "unview",
        starter1: "https://drive.google.com/file/d/1XaUYC8i6Nz6cWpHCQImmSOQW2OiqImnF/view?usp=sharing",
        starter2: ""
      }
    }
      res.render('pages/assignment', {info: crashContent[req.params.day]});
  });

};
