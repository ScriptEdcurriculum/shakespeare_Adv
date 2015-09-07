# Shakespearean Insult Generator

![Baller Shakespeare](https://pbs.twimg.com/profile_images/585897673544376320/-5fUjpSL.jpg)

##Do Now 
Begin this session by completing the [Do Now](doNow.md) activity.

##Scope
To capitalize on the viral fury of the underground 'Shakespearean Insult' battle scene, you have been tasked by Cheesy Jokes Inc. with designing and creating a webapp to help users find the best Shakespearean insult to help them be victorious.


##Project Criteria
Your Manager has laid out the following requirements for the project:

* Implement a mock API to retreive the jokes
* Allow users to interact with the application to get a new joke
* Implement the ability to convert the joke to a voice text

##Learning Objectives
By the end of this project the employee will be able to...

* Understand the difference between a GET and POST requests (HTTP Methods)
* Interpret the supplied API documentation and use the API for the application (APIs)
* Understand the role of the client and the role of the server (Client-Service Interaction)
* Understand how the client and the server interact (Client-Server Interaction)
* Analyze and interpret the supplied documentation to their project (Reading Comprehension)
* Ability to explain and discuss projects in terms of APIs and HTTP requests (Technical Vocabulary)

##References/Tools
* [Get/Post Request](http://www.w3schools.com/tags/ref_httpmethods.asp)
* [Web Speech API Documentation](https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html)
* [Web Speech Overview](http://stiltsoft.com/blog/2013/05/google-chrome-how-to-use-the-web-speech-api/)

##Vocabulary
* Application Program Interface (API)
* GET Requests
* POST Requests
* AJAX Requests
* Client
* Server
* Endpoint

##Instructions
You are given a stripped-down project (starter code) to add the required functionality, which must be cloned into your own workspace.  And make sure to read the comments!

###1) API Creation

####Why do I need this:

As a developer, you will rely on components created by other people or other teams. One way to interact with other components is through a systematic interface - known as the API (Application Programming Interface).  An API provides a set of specific formats for the interaction between the callee and the caller - such as specifying the required inputs, the expected outputs, and possible error cases.  Some APIs return information about products and recommended products (Amazon), post updates to social networks (Twitter or Facebook), or send money to your friend (Paypal, Venmo, etc.).

####What am I going to do:

In this step, you will step into the role of an architect and create an API used by your website to retreive jokes from the service.  The API will need to specify the inputs and the output, as well as mocking the expecting output (pretending to be the server and returning an output).

####Creating Mock Endpoint
1. Go to [mockable.io](https://www.mockable.io/)
2. Click "Try Now"
3. Select "DEFINE A NEW REST API"
4. Creating an endpoint
  1. Set Path - Set the path you want to hit to get the list of Shakespearean insults.  This shouldn't have any spaces and should describe the data the user is fetching.  Something like "insults" or "shakespeare" would make sense.
  2. Set Verb - The verb is just the type of HTTP request we want to make.  We'll be using the GET verb because we're just fetching data from the backend.  If we wanted to store data in the backend we'd probably use the POST verb.
  3. Set Response Body - This is what the backend will return to us when we make a request to this endpoint.  Try pasting in the following JSON (JavaScript Object Notation):

```json
        [
            {
                "insult": "I scorn you, scurvy companion. What, you poor, base, rascally, cheating, lack-linen mate! Away, you moldy rogue, away!"
            },
            {
                "insult": "Thou mewling toad-spotted miscreant!"
            },
            {
                "insult": "[Thou art] a most notable coward, an infinite and endless liar, an hourly promise breaker, the owner of no one good quality."
            },
            {
                "insult": "Thou puking rump-fed ratsbane!"
            },
            {
                "insult": "Thou jarring beef-witted flap-dragon!"
            },
            {
                "insult": "Methink'st thou art a general offence and every man should beat thee."
            }
        ]
```

  4. Click "Save" at the bottom of the screen
5. Starting the endpoint
  1. You should see the endpoint you just created with a red button on the left that says "Stopped".  It should look like this:
![Endpoint Stopped](http://i.imgur.com/wPAQ1Nk.png)

  2. Click the "Stopped" button to make your endpoint live!  The button should now look like this:
![Endpoint Started](http://i.imgur.com/RhIX6SU.png)

  3. Now we should test out the endpoint.  Click on the link underneath the "Name" column.  It should take you to a page that looks like this:
![Edit Endpoint](http://i.imgur.com/CzPbwfN.png)

  4. Click on one of the links in this section and make sure it takes you to a page with the JSON you had entered for the Response Body
![Endpoint Links](http://i.imgur.com/dxsxsde.png)

6. *IMPORTANT* - Your temporary account will expire in a day, so you if you want your mockable.io endpoint to keep working you must create an account in order to keep this API available.  Don't worry!  It's free!  Here's how you do it:
  1. Toward the top of the mockable site you should see this:
![Endpoint Will Expire](http://i.imgur.com/Ddu12Vz.png)

  2. Click the "Tell me more" link which will take you to the next screen.
  3. Click one of the icons at the bottom of the screen to sign in (Google, Facebook, or StackExchange).

    ![LoginIcons](http://i.imgur.com/pZo0Kjj.png)

7. You should now have a working endpoint for your project!  Congratulations!


###2) Adding User Interface

####Why do I need this:

If you look at Facebook, you notice that users can submit comments or like a post without

requiring the page to reload. This ability to get information or perform an action without a page

reload provides a better, more seamless experience for users.

####What am I going to do:

You will implement the ability to show a new joke to the user without the need of reloading the

entire page

####How I will do this:

1. Add a button to index.html which will be used to trigger a new insult.
2. Add an area in index.html to display the insult text.
3. In main.js, write a function to fetch insults from the server.
4. Write a function to take the server response and store it locally.
5. Call the fetch function when the script runs.
6. Create an event handler for the button so that clicking the button triggers a new insult.
7. Write a function to retrieve a random insult from the insults array.
8. Write a function to display the insult on the screen.

###3) Speech Implementation

####Why do I need this:

This is a natural extention of the previous two steps. You will be add another method of

interaction by providing the user the ability to hear the insult, instead of reading the insult. To avoid

the need to build out an entire system to convert text to speech, this functionality will use the Web

Speech's API to convert text to audio.

####What am I going to do:

You will implement a method to use Web Speech's API based on their documentation (with

assistance from the web) to voice out the text.

#####How I will do this:

9. In speak.js, use the text to voice javascript API to speak a string of text.
10. Back in main.js, use the function you just wrote to speak the insult as it's displayed.

##Bonus Criteria 
Your Manager has offered a stipend of $500 for each of the bonus requirements listed below: 

1. Make the same project but with motivational statements instead of Shakespearean insults
2. Figure out a way so you don't reuse any of the insults until the user has gone through them all (but keep their order random!).
3. Make a magic 8-ball project that returns a different answer each time.  If you're using a mobile device, you could have it give a different answer each time you shake or add an 8-ball animation each time it gives a new answer.

##Grading Criteria
Your manager will be grading your capibility on this project based on [this rubric](assessment.md)

##How to Submit
This project must be pushed back up to your repo on GitHub. Then you will share your link with the instructor.

To push to GitHub run the following commands in your terminal:  
`git status`  
`git add .`  
`git commit -m "example comment"`  
`git push origin master`

##Homework
Instructor will assign homework based on progress in class.
