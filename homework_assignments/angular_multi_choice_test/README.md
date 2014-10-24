AngularJS Homework 1
--------------------

So this one could be a live coding exercise for an Angular veteran, or a take home assignment for everyone else.

Given a json file of questions and answer options, create a SPA with AngularJS that displays each question with its list of multiple choice answers. 

EC1: Application must record user's email address and save that user's email to Firebase. 

EC2: Application must record answer for each question and associate it with the user somehow.

EC3: Candidate must take test.


I have an app scaffolded out. It provides a view and a text field for the candidate to get started. Suggest that the user starts by recording the email address, and displaying it in the header for the remainder of the test.

Firebase provides an Angular service called AngularFire 
* https://www.firebase.com/docs/web/libraries/angular/quickstart.html

Ask them to use that service

URL for questions and users:

https://hackerati-ng-quest.firebaseio.com/
https://hackerati-ng-quest.firebaseio.com/questions
https://hackerati-ng-quest.firebaseio.com/users

URL for answer key

https://hackerati-ng-answers.firebaseio.com/Each question should be presented as a tile with the Q's and A's

Each tile should animate to the next. 

Test should thank user and provide feedback that everything was recorded correctly. Ask how error handling works.
