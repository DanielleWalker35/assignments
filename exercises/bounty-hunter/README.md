## The Original Bounty Hunter

You are a bounty hunter of the Old Republic. Your parents were killed by a Sith Lord as a child and your goal in life is to kill all the Sith and Jedi.

In order to help you in your quest, and since you are a do-it-yourself kind of bounty hunter, you have learned programming so you can keep track of your bounties and kills!

Objective
Using Express, create an API on the /bounty route that:

GETs a list of all bounties
POSTs new bounties,
DELETEs a bounty
PUTs (updates) a bounty
Since we haven't started connecting to MongoDB quite yet, you can just save your bounties in a bounties array in your server code. Keep in mind that since it isn't being persisted anywhere, anytime you make a change to your server code and restart the server, you'll lose all your bounties.

A bounty object should have:

First Name
Last Name
Living (Boolean)
Bounty Amount (number)
Type (‘Sith’ or ‘Jedi’)
ID (a unique identifier. Use the uuid package to generate unique ids. - npm install uuid and check the docs to see how to use it. It's as simple as requiring the package and running uuid.v4())
Since there isn't a front end set up yet, you'll just use Postman to interact with the server and update the data.

Part 1 - Server Setup and GET & POST routes.
Since we don't have a good way to tell the server which item we want to PUT and DELETE yet, we'll start out just by writing the GET and POST endpoints.

Write a GET endpoint that gets all bounties from the array and sends them to the client.
Write a POST endpoint that adds a new bounty object to the array of bounties.
Remember, you'll have to play the part of the database and add an id property to the incoming bounty before saving it to the array of bounties. This way you'll be able to easily look it up by its id property in order to update and delete it later.
Part 2 - Adding PUT & DELETE
After learning about req.params, now add endpoints that allow you to:

DELETE a bounty from the bounties array, and
PUT (update) an existing bounty.
You'll need to pass the uuid you added when POSTing new bounties as a URL Parameter to the endpoint in order to have a reference to the object you want to update or delete.

Part 3 - Client Setup
Once you're able to complete the first 2 parts of the exercise, spend some time building a React client-side interface for this server you created. Make sure to leave the server running in your terminal, and send your axios requests out to http://localhost:<port-number>/bounty and http://localhost:<port-number>/bounty/<id-number>.

Your front-end React app should be a CRUD application - it should be able to Create (POST) new bounties, Read (GET) existing bounties and show them to the user of your site, Update (PUT) existing bounties (like if you wanted to up the price for a bounty, e.g.), and Delete (DELETE) bounties from the list of all bounties.

For example, maybe when your app loads you automatically make an HTTP call to your server to GET a list of all existing bounties. Then perhaps each bounty has a delete button next to it that, when clicked, DELETEs that one bounty from the list. (Make sure to also remove it from your front-end application!). There might also be a form somewhere for someone to enter a new bounty's information and click a button that creates that as a new bounty on the server. For the Update (PUT), maybe there's an edit button that changes the text fields into input fields where the user can change the values in each input field and hit a "Save" button which submits the PUT request.