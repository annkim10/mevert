# mevert
Mevert is an application where users can take a quiz, which determine their levels of introversion and extroversion, which is then used to provide the user with personalized activities that will enjoy.  If users do not like the suggested activities they can view the entire list and pick activities they enjoy from there.  Users can then schedule activities on a calendar, they create, read, update, and delete the activities listed on the calendar.  Users can also view activities they have selected on their profile page, where they can write diary entries regarding how the feel about the activity and give it ratings so that they can refer back to it later. 

Live Link to the site: https://mevert.herokuapp.com/?#/

## Technologies Used:
1) Mapbox Map API
2) Full Calendar API
3) React/Redux 
4) Express.js
5) Node.js
6) MongoDB 

## Major Features 
1) A major feature that was integrated into this project was the calendar API, which would allow users to schedule and update activities and be able to visually view what their schedule looks like.  The calendar API was difficult to implement due to the fact it had to connected to the backend and front end to be able to implement the entire CRUD functionality.  

![calendar](https://github.com/annkim10/mevert/blob/main/frontend/public/calendar.gif)

2) Another major feature that was integrated in this project was the allowing users to take a quiz and then recommending personalized activities to them.  It was difficult to set up the quiz due to the fact that the user had to click to select their option but they also had to click next to get to the next question on the quiz.  Initially it was very difficult to get both of these clicks to work, as a result, we had to create custome event listeners that would effectively allow users to select an option and move on to the next question.  After the user has completed the quiz, we had to give personalized recommendations to the users.  We created a custom algorithm that utilizies the user's quiz results and based on the introverism and extroversion percentage, we provide recommendations.  For example if the person is 80% introvert and 20% extrovert, 5 out of the 6 activities recommended will be geared towards introverts and 1 activity will be geared towards extroverts. 

![personality_test](https://github.com/annkim10/mevert/blob/main/frontend/public/ezgif.com-gif-maker.gif)

3) Users also have access to resources to accomplish the selected activities. We added some youtube videos utilizing the react-youtube library, and   implemented a map to provide locations related to the activity using Mapbox API.



4) 