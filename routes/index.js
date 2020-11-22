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
        description: "<div class='paragraph-container'><p>Create a program that:</p>    </div>        <ul>              <li>Takes a float from user input</li>              <li>                Assigns that input to a variable (<span class='var-style'>radius</span>) </li> <li>Calculates the area of a circle using 3.14 as pi</li>              <li>Prints the area</li>            </ul>",
        slideShow: "https://docs.google.com/presentation/d/1tiejS-VzwIYJ9z0xqgue0z0_bTe87vqzufwjSwMtjQY/edit?usp=sharing",
        youtube: "https://youtu.be/kAuMwTu12uE"
      },
      june21: {
        day: "Sunday June 21",
        time: "Time: 2pm-3pm CST",
        topics: "<li>Last live lesson</li>              <li>Guess word clouds</li>              <li>Ways to keep learning</li>              <li>Coding competitions</li>              <li>Parting words</li>",
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
        description: "<div class='paragraph-container'> <p> Take your code from ice Breaker I and format the print statements to create sentences. </p> </div> <ul> <li> For example, <span class='black-span' ><span class='color1-span'>print</span>(<span class='color2-span' >f'My name is {name} and I am {age} years old.'</span ><span class='color3-span'>)</span></span > </li> </ul> <h2 class='res_eve_des project-header' > Email Converter </h2> <p>Create a program that:</p> <ul> <li>Takes a yahoo email address from user input</li> <li> Assigns that input to a variable (<span class='var-style' >email</span >) </li> <li> Takes the “@yahoo.com” part off of the address using string indexing and splicing </li> <ul> <li>Hint: Use the Strings Cheat Sheet</li> </ul> <li> Assigns the username of the email address to a variable (<span class='var-style' >username</span >) </li> <li> Assigns <span class='black-span' >username <span class='color3-span'>+</span> <span class='color2-span' >''@gmail.com'</span ></span > to a variable named <span class='var-style'>new_email</span> </li> <li> Prints <span class='var-style'>new_email</span> </li> </ul>"
      },
    }
      res.render('pages/assignment', {info: crashContent[req.params.day]});
  });

};
