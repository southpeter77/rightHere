[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
    <img src="client/public/rightHereLogo.png" alt="Logo" width="120" height="auto">
  </a>

  <h3 align="center">Right Here</h3>

  <p align="center">
    The Right Here is a location driven photo sharing app. This app will provide the user the ability to take a photo using their device or upload a photo directly from their device and save it with the user's current location and share with other users. The photo and location will be saved in database as a 'marker' that can help users to see what others have posted near by you or certain area that you searched for. It can be useful to show your old memory that you forgot about that place and near by.
    <br />
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#technical-stack">Technical Stack</a></li>
        <li><a href="#introduction">Introduction</a></li>
        <li><a href="#mvp">MVP</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#api-frontend">API Frontend</a></li>
    <li><a href="#api-backend">API Backend</a></li>

  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

### Technical Stack

* The project runs a React/Redux front end with google map react and react webcam packages
* The Backend uses Express and S3 with postgreSQL.


### introduction

Have you attended a wedding or other specail occations where you write your name on a guestbook to let them you 'you were here'? We want to know who were there with us for our special moment and let others know too. You've probably written 'I was here' on a desk at school and some even write 'I was here' on the cubicle divider in public restroom. When we go back to the place after awhile, we will see our little mark and think 'oh right, I was there before!' and think of the good memory. 

This is where Right Here app comes in. You can capture your memories in photos, save and share the photos along with the location. Right Here organize photos by location and location driven app. 

### MVP
the MVP for this website encompasses the following:

1.  Places
    1. Ability to search places using user's current location
    2. create the place using current location.
    3. add a marker("i was here") in that place
    4. show all the markers within certain distance of that place.
    5. can edit the name of the place
    5. can delete the place with all the markers in side
2.  Markers
    1. Ability to create marker using user's current location and the picture that was provided
    2. add description and name
    3. show all the markers near by (within the location)
    4. can edit and delete the marker
3. Picture
    1. Can update location, marker, profile picture
4. Relationship
    1. Can create a relationship with other users
    2. only connected users can comment on their marker



<!-- GETTING STARTED -->
## Getting Started
-----------

To get a local copy up and running follow these simple steps.

### Prerequisites

Express, react, s3, google map react, react webcam...

### Installation


1. Clone the repo
   ```sh
   git clone https://github.com/southpeter77/rightHere.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create your postgres database and connect it to the app.

4. run backend at the root level
   ```sh
   npm start
   ```
5. cd into Client directory to run frontend
   ```sh
   npm start
   ```
6. browser will open automatically.


<!-- USAGE EXAMPLES -->
## Usage
-----------

One user can enjoy a dinner at a restaurant down the street and simply post a photo and it will become a 'i was here' mark at the restaurant. Other user will be able to see the photo of the first user at the same restaurant. The first user can come back to the same street after awhile but he totally forgot about the restaurant but now he feels like he was there before and try so hard to remember why. Using this app, he will easily find out about the photo he took near by his current location and see his old memory about the restaurant. 

Useful for traveling, events, festival, resturant and other special occations.

## API Frontend
--------------------------
|Path|HTTP Verb|Meaning|
|-|-|-|
|/|GET|Show Splash Page|
|/myprofile|GET|Show my profile Page|
|/myprofile|POST|edit profile Page|
|/profile/id|GET|Show profile Page of id|
|/profile/id|POST|edit the user (relationship)|
|/login|GET|Show log in page|
|/login|POST|Log in a user|
|/signup|GET|Show sign up page|
|/signup|POST|sign up a user|
|/marker|GET|use camera|
|/marker|POST|save a photo ( create markers)|
|/search/places|GET|get a list of places|
|/search/places|POST|search a places|
|/search/places/marker|GET|get a list of markers|
|/search/places/marker/id|GET|get a marker of id number id|
--------------------------

## API Backend
-----------
|Path|HTTP Verb|Meaning|
|-|-|-|
|/api/login|POST|logs in a user|
|/api/signup|POST|signs in in a user|
|/api/myprofile|GET|get my profile data|
|/api/myprofile|PUT|edit my profile data|
|/api/profile/id|GET|get id's profile data|
|/api/profile/id|PUT|edit relationship of id user|
|/api/search/places|GET|get data of places near by current location|
|/api/search/places|POST|create a place data current location|
|/api/search/places|DELETE|delete a place data current location|
|/api/search/places/markers|GET|get data of markers of that place|
|/api/search/places/markers/id|GET|get data of that id's marker of that place|
|/api/search/places/markers/id|POST|create a new marker of that place|
|/api/search/places/markers/id|PUT|edit the id's marker of that place|
|/api/search/places/markers/id|DELETE|delete the id's marker of that place|








[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/peter-kang-129184166/
