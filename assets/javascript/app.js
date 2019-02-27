// Process flow for this javascript
  //create variables to use.  Totale Questions, score, correct answers, results
  //create a function to capture the users selection for each question
  //create a prompt that will warn the user when they have missed a quesiton
  //validate the users response to the correct answer
  // display score to user
  // create a display with the correct answers for the users
  //create a timer for the game

  //these are the variables that I created for this js
var totalQuestions = 5;
var score = 0;
var correctAnswers = ["a", "c", "d", "c", "b"]; 
var results = 0;

//function that will capture the users response for each question.  I used document.getElentByID first since that is what I have been using but could not get it to work.  I found document.forms on https://www.w3schools.com/jsref/coll_doc_forms.asp and this worked.
//this will store the users' answers in memeory but will not display-that will come later.
function userAnswers(){
  var q1 = document.forms["triviaForm"]["q1"].value;
  var q2 = document.forms["triviaForm"]["q2"].value;
  var q3 = document.forms["triviaForm"]["q3"].value;
  var q4 = document.forms["triviaForm"]["q4"].value;
  var q5 = document.forms["triviaForm"]["q5"].value;

  //created this alert to make sure the for is recongizing the users input.
  //alert(q1);
  //adding in a check to make sure users can't click submit without filling out the full form.  I am only checking one question before creating the for loop.
    // if(q1 === null || q1 === "") {
      // alert("You didn't answer question 1");
        //return false;
      // }

      //This is the for loop that I tried to use.   It is not working as I wanted.   Will come back later and try to make it work.
    //for(i=1; i <= totalQuestions; i++) {
      //if(eval("q"+i) === null || eval("q"+i) === "") {
        //alert("You didn't answer question " + i);
        //return false;        
    //}

    //Since I know the "if" alert worked from test earlier I am going to use that same format for each question.  I understand this is not "DRY" and will work on the for loop later.
    if(q1 === null || q1 === "") {
      alert("You didn't answer question 1");
        return false;
     }
     if(q2 === null || q2 === "") {
      alert("You didn't answer question 2");
        return false;
     }
     if(q3 === null || q3 === "") {
      alert("You didn't answer question 3");
        return false;
     }
     if(q4 === null || q4 === "") {
      alert("You didn't answer question 4");
        return false;
     }
     if(q5 === null || q5 === "") {
      alert("You didn't answer question 5");
        return false;
     }

     //checking the users answers to the correct answer array.  if the score matches then the score varialbe will increase by 1.  I tested these and they work.  Really want to try and get the for loop to work for this.  These are commented out incase the for loop doesn't work.

    // if(q1 === correctAnswers[0]) {
      // score++;
    // }
    // if(q2 === correctAnswers[1]) {
     // score++;
   // }
   // if(q3 === correctAnswers[2]) {
    //  score++;
   // }
   // if(q4 === correctAnswers[3]) {
   //   score++;
   // }
   // if(q5 === correctAnswers[4]) {
     // score++;
   // }

   //for this for loop-  I set the i variable to 1.  I am trying eval again to get the correct question number.  And I have correctAnswers [i-1] so that the correct answer will be pulled from the array.  This is the first time I have tried i-1.  I wanted to test this as I was not sure it would work but it did.  
  for(i = 1; i<=totalQuestions; i++){
    if(eval("q" + i) === correctAnswers[i - 1]) {
      score++;
    }
  }
    //created an alert to make sure I am calculating the score correctly.  This worked so will comment it out.
    //alert("You scored " + score + " out of " + totalQuestions);
    
    //for this will display the score to the user..
    var results = document.getElementById("results");
    results.innerHTML = "<h3> You scored <span>" + score + " out of " + totalQuestions + "</span></h3>";

    // I do not want the for to truly submit so I am using the return flase below.   I read about this and used the example from https://javascript.info/forms-submit
    return false;
    
}