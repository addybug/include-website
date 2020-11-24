'use strict';

module.exports = function(app) {

  //Crash Course in Python
  app.get('/crash-course/live-lesson/:day', function(req, res) {
    let content = {
      june13: {
        day: "Saturday June 13",
        time: "Time: 10am-12pm CST",
        topics: "<li>Python introduction</li> <li>Data types</li> <li>Variables</li> <li>Strings</li>",
        title: "Song Lyrics",
        description: "<p> Find your favorite song on Genius and print the chorus line by line in Python. </p> <ul> <li> Hint: use <span class='function-style'>print</span>() and <span class='var-style'>/n</span> </li> </ul> <h2 class='res_eve_des project-header' > Ice Breaker 1 </h2> <p> Create variables (e.g. “<span style='color: #333333; font-weight: bold' >name</span>”, “<span class='var-style'>age</span>”) and set their values to the corresponding fact about yourself. Then, print the variable. Create at least 10 variables and use proper Python naming conventions. </p>",
        slideShow: "https://docs.google.com/presentation/d/1g6oshn4ALGeCruvrAJfxwfFVMzuUI9PwasGhNUmhOJM/edit?usp=sharing",
        youtube: "https://youtu.be/a8IVRrz1DOc",
        starter: "", view: "unview"
      },
      june14: {
        day: "Sunday June 14",
        time: "Time: 1pm-3pm CST",
        topics: "<li>Conditionals</li> <li>Loops</li> <li>Functions</li> <li>Lists</li>  <li>Dictionaries</li>",
        title: "Area Calculator",
        description: "<p>Create a program that:</p> <ul> <li>Takes a float from user input</li> <li> Assigns that input to a variable (<span class='var-style'>radius</span>) </li> <li>Calculates the area of a circle using 3.14 as pi</li> <li>Prints the area</li> </ul>",
        slideShow: "https://docs.google.com/presentation/d/1tiejS-VzwIYJ9z0xqgue0z0_bTe87vqzufwjSwMtjQY/edit?usp=sharing",
        youtube: "https://youtu.be/kAuMwTu12uE",
        starter: "", view: "unview"
      }
    }
    if(req.params.day in content){
      res.render('pages/live-lesson', {info: content[req.params.day]});
    }
    else {
      res.send("404: Page Not Found", 400);
    }
  });

  app.get('/crash-course/:day', function(req, res) {
    let content = {
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
        description: "<div class='large-margin'><p> Download the starter code form the website and create: </p> </div> <div class='small-margin'> <ul> <li>A function that returns the domain of the email</li> <li> 3 functions that take the domain of the email address as a parameter and return the new email address with a different domain (<span class='var-style' >to_gmail</span >, <span class='var-style'>to_yahoo</span>, <span class='var-style'>to_outlook</span >) </li> <div class='small-margin'> <ul> <li>Hint: Use Use the slides in “Live Lesson 2”</li> </ul> </ul> </div></div> <h2 class='res_eve_des project-header' > Alphabet Loop </h2> <div class='paragraph-container'> <p> Download the starter code and write a function that: </p> </div> <ul> <li>Takes in a string as a parameter</li> <li>Takes each letter of the string and puts them into a list</li> <div class='list-styling small-margin-bottom'> <ul> <li> For example, <span class='color2-span'>'cat'</span> to <span style='color:black' >[<span class='color2-span'>'c'</span>, <span class='color2-span'>'a'</span>, <span class='color2-span'>'t'</span>]</span > </li> <li>Hint: Use the slides in “Live Lesson 2”</li> </ul> </div> <li>Loop through all the elements of the list</li> <div class='list-styling'> <ul> <li> Use the <span class='var-style' >get_char_value</span > function in the starter code to get a 0-25 digit number that represents the letter </li> <li> Find the element that corresponds to that index in <span class='var-style' >alphabet_list</span > </li> </ul> </div> <div class='smaller-margin'> <li> Print <span class='black-span' ><span class='color1-span'></span>(<span class='color2-span' >f'{letter} is for {alphabet_list[letter_value]}.'</span ><span class='color3-span'></span>)</span > </li> </div> <div class='list-styling'> <ul> <li>For example, “A is for Apple.”</li> </ul> </ul> </div>",
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
        description: "<div class='large-margin'> <ul> <li>Download the starter code from the website</li> <li> Find your favorite book on <a href='https://www.gutenberg.org/' class='res_eve_des paragraph-links' >Project Gutenberg</a > and download the .txt file </li> <li> Upload the file in <a href='https://www.repl.it' class='res_eve_des paragraph-links' >repl.it</a > </li> <li> Follow the instructions in the starter code to import the book </li> <li>Put all of the words in the book into a list</li> <li> Remove all of the <span class='var-style' >common_words</span > from the list </li> <div class='small-margin'> <ul> <li>Hint: Convert the word to lowercase before comparing</li> </ul> </div> <li> Create a dictionary and loop through the list to count the frequency of the word </li> <div class='small-margin'> <ul> <li>Assign the word as a key and the value 1</li> </ul> </div> <li> If the word has already been assigned as a key, increment the value by 1 </li> <li> Run your code to create a word cloud. Save your word cloud until Sunday and we will try to guess what book it is. </li> </ul> </div>",
        viewAttachments: "",
        view2: "unview",
        starter1: "https://drive.google.com/file/d/1XaUYC8i6Nz6cWpHCQImmSOQW2OiqImnF/view?usp=sharing",
        starter2: ""
      },
      june20: {
        day: "Saturday June 20",
        title: "Word Cloud",
        description: "<p>Keep working. You got this! <br> <br> <br> <br> <br> </p>",
        viewAttachments: "unview",
        view2: "unview",
        starter1: "", starter2: ""
      }
    }
    if(req.params.day in content){
      res.render('pages/assignment', {info: content[req.params.day]});
    }
    else {
      res.send("404: Page Not Found", 400);
    }
  });

  //Advanced Concepts in Python
  app.get('/advanced-concepts/live-lesson/:day', function(req, res) {
    let content = {
      june21: {
        day: "Sunday June 21",
        time: "Time: 2pm-3pm CST",
        topics: "<li>Last live lesson</li> <li>Guess word clouds</li> <li>Ways to keep learning</li> <li>Coding competitions</li> <li>Parting words</li>",
        title: "", description: "",
        slideShow: "https://docs.google.com/presentation/d/1A5agrdAqPzAKDBF0k-v3TjXMFKkOZ6-Y8O-Phqd3T7A/edit?usp=sharing",
        youtube: "https://youtu.be/nHIj-zW-bI8",
        starter: "", view: "unview"
      },
      june27: {
        day: "Saturday June 27",
        time: "Time: 10am-12pm CST",
        topics: "<li>Github</li> <li>Atom</li> <li>Classes</li> <li>Built-in Modules</li> <li>os</li> <li>shutil</li>",
        title: "", description: "",
        slideShow: "https://docs.google.com/presentation/d/1O3AtENpbqFarXDrRoUsnwE2Y-Dx-eYTOZcHjtXN_g2Y/edit?usp=sharing",
        youtube: "https://youtu.be/2w0uxwfmLn4",
        starter: "", view: "unview"
      },
      june28: {
        day: "Sunday June 28",
        time: "Time: 1pm-3pm CST",
        topics: "<li>GUIs</li><li>tkinter</li>",
        title: "", description: "",
        slideShow: "https://docs.google.com/presentation/d/1QeJuYuaaq_voAfd3JusCCPHdwx_RK771o2EGKQHmBBk/edit?usp=sharing",
        youtube: "https://youtu.be/PwNQfVtboVg",
        starter: "", view: "unview"
      },
      july1: {
        day: "Wednesday July 1",
        time: "Time: 12pm-2pm CST",
        topics: "<li>pygame</li>",
        title: "Snake Game",
        description: "<p> For this lab, you will be exploring pygame by creating a snake game. If you missed Live Lesson 3, you will need to go look at the slides or watch the presentation because it contains information that is vital to this project. For those of you who have never played a snake game, here is a <a href='https://www.google.com/search?q=snake+game&rlz=1C1CHBF_enUS858US858&oq=snake+game&aqs=chrome..69i57j69i59j35i39j0j69i60j69i65j69i61j69i60.2366j0j7&sourceid=chrome&ie=UTF-8' class='paragraph-links' >link</a > to the description of the game. Download the starter code and follow the commented instructions to complete the assignment. Then, play the game and share your high score with the Slack group! </p> <p class='smaller-margin'> For this project, you’ll be using pygame. Below, you will find links to the documentation for this package. Use it if you run into problems working on the project. </p> <div class='small-margin'><ul> <li> <a href='https://www.pygame.org/docs/' class='paragraph-links' >pygame</a > </li> </ul> </div>",
        slideShow: "https://docs.google.com/presentation/d/1a1GpLv7cBik_ZP3zU8qRIZyDyRTwlj_EFo-noP-eat4/edit?usp=sharing",
        youtube: "https://youtu.be/d0_170HfjAQ",
        starter: "https://drive.google.com/file/d/163g3GdJFRymIiuuavO2vgvHVQpuX3D1c/view?usp=sharing",
        view: "",
      },
      july5: {
        day: "Sunday July 5",
        time: "Time: 1pm-2:30pm CST",
        topics: "<li>CSV</li> <li>Web Scraping</li> <li>Beautiful Soup</li> <li>Requests</li> <li>Selenium</li>",
        title: "", description: "",
        slideShow: "https://docs.google.com/presentation/d/1p9wYGWRfVlMOcBk7LxMHf2JEXNdHwy0FO6DAX5CV33U/edit?usp=sharing",
        youtube: "https://youtu.be/E1JjguUK_Wk",
        starter: "", view: "unview"
      },
      july9: {
        day: "Thursday July 9",
        time: "Time: 2pm-3pm CST",
        topics: "<li>APIs</li> <li>Requests</li> <li>Json</li>",
        title: "Pokemon Requests",
        description: "<p> Your project today is to use <a href='https://pokeapi.co/' class='paragraph-links' >PokeAPI</a > to access Pokemon data. The goal is to get the names of the first 151 Pokemon and their abilities. Use the instructions in the starter code attached to complete the assignment. </p>",
        slideShow: "https://docs.google.com/presentation/d/1xES65suPC5XPdyvuzplwt3b6KqGiCx91hvgrxC-YyLE/edit?usp=sharing",
        youtube: "https://youtu.be/WTPcvrGJJmk",
        starter: "https://drive.google.com/file/d/1_nPRP-xWMCLWWZdQEqe_m3Az-CPaYnu4/view?usp=sharing",
        view: ""
      },
      july12: {
        day: "Sunday July 12",
        time: "Time: 2pm-3pm CST",
        topics: "<li>How to continue learning</li>",
        title: "Image Sort",
        description: "<p>Keep working. You got this! </p>",
        slideShow: "https://docs.google.com/presentation/d/1HSXckmvk9lEewN5EOuo12bzJi8zFtSZzcTZsMAHJGc0/edit?usp=sharing",
        youtube: "", starter: "", view: "unview"
      }
    }
    if(req.params.day in content){
      res.render('pages/live-lesson', {info: content[req.params.day]});
    }
    else {
      res.send("404: Page Not Found", 400);
    }
  });

  app.get('/advanced-concepts/:day', function(req, res) {
    let content = {
      june29: {
        day: "Monday June 29",
        title: "File Organizer",
        description: "<p> Today, you will be creating a utility script to organize the files on your computer. The goal is to create a Python program that sorts files by type such as photos, documents, and audio. Download the starter code and follow the commented instructions. In the starter code zip file is a folder to test your script on. Create a repository to put your code into and paste the URL in the Submission Form once you’ve completed the project. </p> <div class='paragraph-container'> <p> For this project, you’ll be using two built-in modules: os and shutil. Below, you will find links to the documentation for these modules. Use them if you run into problems working on the project. </p> </div> <ul> <li> <a href='https://docs.python.org/3/library/os.html' class='paragraph-links' >os</a > </li> <li> <a href='https://docs.python.org/3/library/shutil.html' class='paragraph-links' >shutil</a > </li> </ul>",
        viewAttachments: "",
        view2: "unview",
        starter1: "https://drive.google.com/file/d/1orDVh-c52Jq2DNGwCMeIP48S0ELCy7E0/view?usp=sharing",
        starter2: ""
      },
      june30: {
        day: "Tuesday June 30",
        title: "Rock Paper Scissors",
        description: "<p> The goal of this project is to create a rock paper scissors game using tkinter. Using the starter code below, you will create a basic rock paper scissors game by following the instructions in the commented code. If you have any extra time, consider adding images, animations, or additional information to the display. Get as fancy with this project as you want! </p> <div class='paragraph-container'> <p > For this project, you’ll be using a built-in package and a built-in module: tkinter and random. Below, you will find links to the documentation for these modules. Use them if you run into problems working on the project. </p> </div> <ul> <li> <a href='https://docs.python.org/3/library/tkinter.html' class='paragraph-links' >tkinter</a > </li> <li> <a href='https://docs.python.org/3/library/random.html' class='paragraph-links' >random</a > </li> </ul>",
        viewAttachments: "",
        view2: "unview",
        starter1: "https://drive.google.com/file/d/1KwcGgYnAEmc5k1DBDjp26OPAu6fQvix3/view?usp=sharing",
        starter2: ""
      },
      july2: {
        day: "Thursday June 2",
        title: "Snake Game",
        description: "<p>Keep working. You got this! <br> <br> <br> <br> <br> </p>",
        viewAttachments: "unview",
        view2: "unview",
        starter1: "", starter2: ""
      },
      july3: {
        day: "Friday July 3",
        title: "MP3 Player",
        description: "<p> Your final project for the week will be an MP3 player using tkinter and pygame. You will create a GUI for an MP3 player that can play, pause, and stop MP3 files from a directory on your computer. In the starter code zip file, there is a folder of free MP3 music that you can use to practice on or you can download your own. </p>",
        viewAttachments: "",
        view2: "unview",
        starter1: "https://drive.google.com/file/d/11O1kY13_01OwAPk4eZXSdB9Zm_QIF8tf/view?usp=sharing",
        starter2: ""
      },
      july4: {
        day: "Saturday July 4",
        title: "MP3 Player",
        description: "<p>Keep working. You got this! <br> <br> <br> <br> <br> </p>",
        viewAttachments: "unview",
        view2: "unview",
        starter1: "", starter2: ""
      },
      july6: {
        day: "Monday July 6",
        title: "Beautiful IMDB Scrape",
        description: "<p> For this lab, you will be scraping the top 50 TV shows on IMDB of your favorite genre using requests and BeautifulSoup. Go to <a href='https://www.imdb.com/chart/toptv/?ref_=nv_tvv_250' class='paragraph-links' >this</a > link and pick your favorite genre. Use that link in your script. Create a CSV file with the rank, name, length, genre(s), and rating. <br> <br> <br> <br> </p>",
        viewAttachments: "unview",
        view2: "unview",
        starter1: "", starter2: ""
      },
      july7: {
        day: "Tuesday July 7",
        title: "Sandbox Scraping",
        description: "<p> Today, you will practice web scraping using Selenium. Go to <a href='http://toscrape.com/' class='paragraph-links' >this</a > website to find safe websites to scape. You will be doing both of the websites, but start with Books since it is easier. The goal is to parse the data from the websites into a CSV file. Your code may take some time to run. </p> <h3 class='second-assignment-color'>Books</h3> <div class='small-margin'> <p> Loop through each page and store the name of the book and the price in a CSV file. </p> </div> <ul> <li> Hint: Hint: Each page has 20 items and there are 50 pages. </li> </ul> <h3 class='second-assignment-color'>Quotes</h3> <div class='small-margin'> <p> Loop through each quote and store the author of the quote and the quote in a CSV file. If you want an extra challenge, click “Login” and write a script that logs into the website. (Any username and password combination works.) </p>",
        viewAttachments: "unview",
        view2: "unview",
        starter1: "", starter2: ""
      },
      july8: {
        day: "Wednesday July 8",
        title: "Sandbox Scraping",
        description: "<p>Keep working. You got this! <br> <br> <br> <br> <br> </p>",
        viewAttachments: "unview",
        view2: "unview",
        starter1: "", starter2: ""
      },
      july10: {
        day: "Friday July 10",
        title: "Pokemon Requests",
        description: "<p>Keep working. You got this! <br> <br> <br> <br> <br> </p>",
        viewAttachments: "unview",
        view2: "unview",
        starter1: "", starter2: ""
      },
      july11: {
        day: "Saturday July 11",
        title: "Image Sort",
        description: "<p> For your final project, you will use <a href='https://www.clarifai.com/' class='paragraph-links' > Clarifai API </a> to sort the images in the starter code. You will sort the images based on which image tag matches the four directories in the starter code into directories similar to those you created in File Organizer. Refer to Live Lesson 5 for an example of requesting image tags from Clarifai. </p>",
        viewAttachments: "",
        view2: "unview",
        starter1: "https://drive.google.com/file/d/1aulrlgitKveADLB2uVb-5M3fXD4BirKf/view?usp=sharing",
        starter2: ""
      }
    }
    if(req.params.day in content){
      res.render('pages/assignment', {info: content[req.params.day]});
    }
    else {
      res.send("404: Page Not Found", 400);
    }
  });

  //Machine Learning in Python
  app.get('/machine-learning/live-lesson/:day', function(req, res) {
    let content = {
      july25: {
        day: "Saturday July 25",
        time: "Time: 2pm-4pm CST",
        topics: "<li>Intro to Machine Learning</li> <li>Set Up Tools</li> <li>Data Preprocessing</li> <li>Simple Linear Regression</li>",
        title: "", description: "",
        slideShow: "https://docs.google.com/presentation/d/1lYHbWd6pfZNTyE04qaL0Rtz5tego0BRSqnoF_SWQUGU/edit?usp=sharing",
        youtube: "https://youtu.be/IqBu6w4KFbk",
        starter: "", view: "unview"
      },
      july27: {
        day: "Monday July 27",
        time: "Time: 1pm-3pm CST",
        topics: "<li>Multiple Linear Regression</li> <li>Nonlinear Regression</li>",
        title: "", description: "",
        slideShow: "https://docs.google.com/presentation/d/17OLlOfVmV3eU6gU3z3_VtvUFYxokkrp0dcU5hzg41FA/edit?usp=sharing",
        youtube: "https://youtu.be/9Hzy_M8N3vU",
        starter: "", view: "unview"
      },
      july29: {
        day: "Wednesday July 29",
        time: "Time: 1pm-3pm CST",
        topics: "<li>Classification</li> <li>K-Nearest Neighbors</li> <li>Decision Trees</li>",
        title: "", description: "",
        slideShow: "https://docs.google.com/presentation/d/1984jDJ41fQYebI7NWAHA6N7a1Elu04irl5MlhlcvGsk/edit?usp=sharing",
        youtube: "https://youtu.be/mu8iWHfIfic",
        starter: "", view: "unview"
      }
    };
    if(req.params.day in content){
      res.render('pages/live-lesson', {info: content[req.params.day]});
    }
    else {
      res.send("404: Page Not Found", 400);
    }
  });

  app.get('/machine-learning/:day', function(req, res) {
    let content = {
      july26: {
        day: "Sunday July 26",
        title: "Simple Linear Regression Practice",
        description: "<p>Use the starter code below to practice!</p>",
        viewAttachments: "",
        view2: "unview",
        starter1: "https://drive.google.com/file/d/1so_a-r8wuJ45Rd-WY0Qye3hATnhX3Isl/view?usp=sharing",
        starter2: ""
      },
      july28: {
        day: "Tuesday July 28",
        title: "Multiple Linear Regression Practice",
        description: "<p>Use the starter code below to practice!</p>",
        viewAttachments: "", view2: "",
        starter1: "https://drive.google.com/file/d/1K2S_bjoZLjJC6hntO54VPYPlelqIk_Hm/view?usp=sharing",
        starter2: "https://drive.google.com/file/d/1TSCZyYje8t0r-isrRTkYbCw0ZGJpQAYJ/view?usp=sharing"
      },
      july30: {
        day: "Thursday July 30",
        title: "K-Nearest Neighbors Practice",
        description: "<p>Use the starter code below to practice!</p> <h2 class='res_eve_des assignment-header' > Decision Tree Practice </h2> <div class='paragraph-container'> <p>Use the starter code below to practice!</p> </div>",
        viewAttachments: "", view2: "",
        starter1: "https://drive.google.com/file/d/1MBEJkDmJ6a1QTIC_oJw8Krd0XpWQemTK/view?usp=sharing",
        starter2: "https://drive.google.com/file/d/1InGXPs7GmzMfv3sJSeJQnEiAVkDR8yM5/view?usp=sharing"
      },
      july31: {
        day: "Friday July 31",
        title: "K-Nearest Neighbors Practice",
        description: "<p>Keep working. You got this!</p> <h2 class='res_eve_des project-header' > Decision Tree Practice </h2> <div class='paragraph-container'> <p>Keep working. You got this!</p> </div>",
        viewAttachments: "", view2: "",
        starter1: "https://drive.google.com/file/d/1MBEJkDmJ6a1QTIC_oJw8Krd0XpWQemTK/view?usp=sharing",
        starter2: "https://drive.google.com/file/d/1InGXPs7GmzMfv3sJSeJQnEiAVkDR8yM5/view?usp=sharing"
      }
    };
    if(req.params.day in content){
      res.render('pages/assignment', {info: content[req.params.day]});
    }
    else {
      res.send("404: Page Not Found", 400);
    }
  });

};
