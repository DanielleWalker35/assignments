## Thing Finder

Choose a thing/noun of any kind, then write an express server with a GET route that sends back an array of that thing.

Your GET endpoint should be able to check for any query parameters that may have been passed into the url of the request and filter the results based on those query parameters.

For example, let's say I chose "fruit" as my noun. A GET request to http://localhost:8000/fruit would return an array with all fruits on my server (use an array to store the fruits, and you may want to hard code a few in there so you have some data to work with when the server restarts itself.).

However, a GET request to http://localhost:8000/fruit?type=banana should filter out any fruits in the array that don't have a type of banana and return an array to me (in Postman, Angular, or whatever front end I'm using) with only the objects with a type of banana.

For the purposes of this exercise, you can write your server code with the assumption that there is only one query parameter option available. So in the above example, I can write my server's GET route to only filter if req.query.type isn't undefined.