## Parsing JSON

The following exercise should be completed in vanilla JavaScript.

Write a Javascript function called parsePokemon.

Use http://api.vschool.io:6543/pokemon.json as your url for your XHR request to get the big list of pokemon.

The function should parse the JSON and create an array of objects that look like this:

{
    name: 'Charmander',
    resource_uri: 'api/v1/pokemon/8/'
},
{(Another pokemon object)},
{(Another pokemon object)},
{(Another pokemon object)},
...
etc.  
Then make each Pokemon's name show up on a separate line in an HTML document. This means you won't be using node.js to run this JavaScript.