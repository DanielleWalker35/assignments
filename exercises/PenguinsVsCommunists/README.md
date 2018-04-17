## Penguins vs. Communists

The year is 1950 during the Cold War. The Soviet communists are making plans to invade Antarctica. The penguins of the south aren't going down without a fight.

You will decide the fate of the penguins or communists through Javascript callbacks.

## Project Requirements
- Create two parties (Create a Javascript class and use the new keyword to instantiate the parties)
- Each party has a name ("Penguins" and "Communists" - or whatever you want)
- Each party has a starting population of 1,000,000
- Flip a coin (random number between 1 and 2) to see which party attacks first
- Create a function called sendNuke(party, onHit, onMiss) where:
   the first parameter party is the Javascript object of the party that will be attacked
   the second parameter onHit is a callback function that will be called if the attack is successful
   the third parameter onMiss is a callback function that will be called if the attack is unsuccessful
   the onHit and onMiss functions each take one parameter of type party (just forwarding the party you already passed into sendNuke)
- Print messages in the callbacks that are appropriate - e.g. if the attack missed then it would log "The Penguins' nuke    missed the Communists and instead landed in the ocean" or something along those lines
- A random algorithm will be used to determine if the attack is a miss or a hit (this can happen in the sendNuke function
- If an attack is successful initiate a random damage amount
- After an attack is completed (or missed) the opposing party will initiate an attack.
- This process will repeat until one of the parties reaches a 0 population