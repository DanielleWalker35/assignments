var neighbor = {
    name: "Allison",
    age: 35,
    address: 3456,
    favoriteFoods: ["cheese", "carrots", "pineapple", "celery"],
    bestFriends: [{
            name: "Danielle",
            age: 35,
            address: 1224,
            feelAboutAllison: function (){
                console.log("She's the greatest");
            },
            favoriteFoods: ["pizza", "bacon", "strawberries", "pineapple", "steak"],
            pets: [{
                    type: "dog",
                    name: "scottie",
                    age: "10",
                },
                {
                    type: "fish",
                    name: "stickers",
                    age: 3,
                }
            ]
        },
        {
            name: "Jessica",
            age: 24,
            address: 3266,
            feelAboutAllison: function (){
                console.log("She's my best friend");
            },
            hobbies: ["flute", "singing", "dancing", "painting"],
            pets: [{
                    type: "cat",
                    name: "chester",
                    age: 4,
                },
                {
                    type: "fish",
                    name: "blue",
                    age: 2,
                },
                {
                    type: "dog",
                    name: "buster",
                    age: 5,
                }
            ],
        },
        {
            name: "Jerry",
            age: 30,
            address: 5778,
            feelAboutAllison: function (){
                console.log("She's my hero");
            },
            favoriteFoods: ["turkey", "pickles", "strawberries", "pizza"],
            family: [{
                    name: "Bob",
                    relation: "Dad",
                    height: 6,
                    age: 60,
                    children: [{
                            name: "Pepper",
                            age: 25,
                        },
                        {
                            name: "Jerry",
                            age: 30,
                        },
                        {
                            name: "Peggy",
                            age: 22,
                        }
                    ],
                },
                {
                    name: "Martha",
                    relation: "Mom",
                    height: 5,
                    age: 58,
                    children: [{
                            name: "Pepper",
                            age: 25,
                        },
                        {
                            name: "Jerry",
                            age: 30,
                        },
                        {
                            name: "Peggy",
                            age: 22,
                        }
                    ],
                },
                {
                    name: "Sally",
                    relation: "Wife",
                    height: 5,
                    age: 31,
                },
                {
                    name: "Olivia",
                    relation: "Daughter",
                    height: 4,
                    age: 8,
                }
            ]
        }
    ],

}
for (var i = 0; i < neighbor.bestFriends.length; i++) {
    neighbor.bestFriends[i].feelAboutAllison();
}
neighbor.happy = true;
neighbor.hair = "long";
neighbor.favoriteFoods.push("peanut butter", "cinnamon rolls");


console.log(neighbor);