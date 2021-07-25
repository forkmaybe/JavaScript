//Pluralsight REVISION OF JavaScript
//Strings
'This is a string.';
"This is the 2nd string.";

"It's six o'clock.";
'Remember to say "please" and "thank you."';

'It\'s six o\'clock.';
"Remember to say \"please\" and \"thank you.\"";

"caterpillar".length;

"THE KIDS".toLowerCase();

"I wish I were big.".toUpperCase();

"   but keep the middle spaces   ".trim();

//numbers
12345;
10 + 3.14159;
1 / 3;
11 / 10;
1 + (4 / 3);
-3;
5 - 7;

//booleans
var kitchenLights = false;
kitchenLights = true;
kitchenLights;

//operators
1 + 2;
50 - 15;
3 * 12;
12 / 4;
1 + 100 * 5;
(1 + 100) * 5;
"news" + "paper";
var dinner = "sushi";

//variables
var x = 100;
x + 102;
var x = 100;
var y = x + 102;
y;
//Outputs 202
var weather = "rainy";
weather = "sunny";
weather;
var camelCase = "lowercase word, then uppercase";
var dinner2Go = "pizza";
var I_AM_HUNGRY = true;
var _Hello_ = "what a nice greeting"
var $_$ = "money eyes";

//functions
function addTwoNumbers(x, y) {
       return x + y;
}

function greetThePlanet() {
       return "Hello world!";
}
greetThePlanet();

function square(number) {
       return number * number;
}
square(16);

//conditionals
if (10 > 5) {
      var outcome = "if block";
}
outcome;

if ("cat" === "dog") {
      var outcome = "if block";
} else {
      var outcome = "else block";
}
outcome;

if (false) {
      var outcome = "if block";
} else if (true) {
      var outcome = "else if block";
} else {
      var outcome = "else block";
}
outcome;

if (false) {
      var outcome = "if block";
} else if (true) {
      var outcome = "first else if block";
} else if (true) {
      var outcome = "second else if block";
} else {
      var outcome = "else block";
}
outcome;

if (false) {
      var outcome = "if block";
} else if (false) {
      var outcome = "else if block";
}
outcome;

//Arrays
var breakfast = ["coffee", "croissant"];
var hodgepodge = [100, "paint", [200, "brush"], false];
hodgepodge;//output is array and includes another array inside
breakfast;//output is array

var sisters = ["Tia", "Tamera"];
sisters[0];
//prints the first element

var actors = ["Felicia", "Nathan", "Neil"];
actors[actors.length - 1];
//Last element

var colors = ["red", "yelo", "blue"];
colors[1] = "yellow";//setter
colors;

["a", "b", "c", 1, 2, 3].length;
//length is outputted as 6
["tortilla chips"].concat(["salsa", "queso", "guacamole"]);
//combined 2 arrays into one
["Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"].pop();//returns last
["John", "Kate"].push(8);//added 8 to array and returns length of 3
["a", "b", "c"].reverse();//reverses the order in the array

var course = {
       name: "GRA 2032",
       start: 8,
       end: 10
};
course.name;
course["name"];//both access for the value the same result

var character = {
       name: "Donna",
       hair: "red"
};

character.hair = "blonde";//setter
character;//object 
var character = {
       name: "Donna",
       hair: "red"
};
character["hair"] = "blonde";//same setter
character;

var person= {
       firstName: "Jack",
       lastName: "Smith",
       fullName: function () {
          return this.firstName + "   " + this.lastName;        
       }
 };

person.fullName();//runs function 






















