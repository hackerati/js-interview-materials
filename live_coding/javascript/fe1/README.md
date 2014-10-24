JavaScript interview 1:
-----------------------

* Hackeratus = Interviewer
* Candidate = Candidate

Part 1. The Scenario
--------------------

Candidate is given a completed, but totally screwed up bit of code running on an apache server on their machine.

Candidate must debug the program in whichever browser they are comfortable with. Interviewer should have options already installed on computer. This might be worth picking up a macbook air or something to dedicate to live coding interview problems down the road.

Application should display a list of tweets, and a button to load more tweets into the window.

1. First problem we see is a problem with CORS headers. Ask candidate if they can describe the relationship between client and server and in this case, how they would reconcile the error.

Since the url we're using is a twitter api endpoint, and we can't just tell the dev team to resolve the issue, we're looking for a conversation about authentication, forcing CORS headers, or sending client tokens and secrets as URL params. 


2. After the conversation, resolve the problem by directing the candidate attention to the json file in the same directory. Ask them to hook up that file and pretend it is being returned by the api. They should only need to change the ajax request and point it to the new file. If they do anything else, ask them why and talk about the benefits of their decision.


3. The next error is silent... but deadly... You will probably need to lead the candidate to this solution. Its kind of shitty, I feel bad about it, but there's always the possibility that an API is returning malformed data. The static JSON file is not valid json. 

The only hint you need to give the candidate is that the json might be invalid. See how they go about fixing it. Hopefully they go to some sort of validator online, and can fix the issue quickly.


4. The next thing is a malformed request string. This isn't as bogus a move as it sounds. It will be evident in the console what the error is, so this will give the candidate a chance to show us his debugging skillz.


5. Next step is to see if the client uses break points and can step through functions. There's a function that parses the json and in the for each loop, I pass the key into the function instead of the object. Hopefully they set some break points, look at the values of each object in the function, and notice that an object is not being passed in.


6. Ask the candidate to format the dates to a nice human readable format. Date() is a piece of garbage in javascript, but there's a lot of conversion of dates in BamX's app and api. Easy in Python, not as straight forward in JavaScript.



Part 2. Event Driven Javascript
=====

7. Direct the dev's attention to the event handlers. Ask them to click on stuff and notice that its totally boned. Ask why it doesn't work.

So this has to do with script loading mostly. Ask about asynchronous script loading, what is the best way to fix it. Could be jQuery.read() <--its not   Could be to move where the script is included <-- it is.  Ask them to fix it.   It doesn't work because the javascript loads before the dom elements its trying to register handlers for.


8. Ask about event delegation. Why is it used? What is the problem with registering an event handler on every list element?  What's a circular reference? Why do memory leaks suck?


9. 'Load More' button appends the contents of an array (an array which gets bigger and bigger with each click) to the list of tweets. This is problematic. Ask the candidate to just append the two tweets that get returned from the api each time (we're still pretending the json file is the api)


10. Right now, you can click more than one tweet and highlight the background. Ask the dev to make it so only one tweet can be highlighted at a time. Quick and dirty is fine, just making sure they understand the link between css and javascript with adding and removing classes. 



I think they should be able to get through this in about 20/30 minutes. The most important part of this exercise is the conversation that comes out of it. The exercises are fine and will tell us a lot about their habits as a Javascript developer, but we would like to divine the level of understanding they have as regards web services and the clients role in that.
