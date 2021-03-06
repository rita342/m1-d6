//JS Basics

/* Ex.A
   Create a variable called "test" and assign a string to it.
*/
let test = "hello"
console.log(test)

/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.

*/
let a = 10
let b = 20
let sum = a + b
console.log(sum)

/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/
var random;
random = console.log(Math.random() * 20);
/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/

const me = {
    name: "rahel",
    surname: "woticha",
    age: 26,
}


console.log(me)
    /* Ex.E 
        Programmatically remove the age property from the previously create object.
    */
delete me.age
    /* Ex.F 
       Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
    */
me.skills = ["python", "js", "hdl"];
console.log(me)
    /* Ex.G 
       Programmatically remove the last skill from the "skills" array inside the "me" object.
    */
me.skills.pop()

// JS Functions
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/


function dice(min, max) {
    return Math.random() * (max - min) + max;
}
console.log(dice(1, 6))

/* Ex.2 
    Write a function called "whoIsBigger" whi"splitMe" which receives a string ch receives 2 numbers as parameters and returns the biggest one.
*/
function whoIsbigger(a, b) {
    if (a > b) {
        return "a is bigger"
    } else {
        return "b is bigger"
    }
}
console.log(whoIsbigger(1, 2))


/* Ex.3
    Write a function called as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/
function splitMe() {

    const str = "have a  nice day";
    const splitStr = str.split(".");
}
console.log(splitMe)

/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/
function deleteone(str, bool) {
    if (bool == true) {
        removeFirstChar = str.slice(1);
        console.log('Removing the first character', removeFirstChar);
    }
    if (bool == false) {
        removeLastChar = str.slice(0, str.length - 1);
        console.log('Removing the last character: ', removeLastChar);
    }
}
var a1 = true;
var a2 = false;

str = "APPLE"
deleteone(str, a1)


/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/
function onlyLetters() {
    onlyLetters = "I love day 5"
    const withoutNumbers = onlyLetters.replace(/\d+/g, '')

}
console.log(onlyletters(withoutNumbers))
    /* Ex.6 
       Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
    */
function isThisAnEmail(mail) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value)) {
        return true
    } else {
        return false
    }
}

/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/
function whatDayIsIt() {
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
}
console.log(whatDayIsIt(weekday[1]))

/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/

/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date.
*/
function howManyDays(start, end) {
    const date1 = new Date(start);
    const date2 = new Date(end);
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = date2.getTime() - date1.getTime();

    const diffInDays = Math.round(diffInTime / oneDay);


    const oneDay = 1000 * 60 * 60 * 24;


    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
}

console.log(getNumberOfDays("1/14/2021", "5/7/2021"))

/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/
function isTodayMyBirthday() {
    if (mybirthday === "06/05/1995") {
        return true;
    } else {
        return false;
    }

}
(isTodayMyBirthday()

    // JS Arrays // Objs
    // NOTE: movies array is defined at the end of this file!

    /* Ex.11
       Write a function called "deleteProp" which receives an object and a string as parameters, and returns the given object after deleting its property named as the given string.
    */

    function deleteProp() {
        console.log(myobj.actor, myobj.film);
    }
    myobj = { "actor": "Jet Li", "film": " forbidden Kingdom " }; deleteProp(myobj);

    /* Ex.12 
        Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
    */
    const pickOldest = arr => {
        const res = {
            Title: '',
            Year: +Infinity
        };
        arr.forEach(el => {
            const { Title, Year } = el;
            if (Year < res.Year) {
                res.Title = Title;
                res.Year = Year;
            };
        });
        return res;
    }; console.log(pickOldest(movies));

    /* Ex.13
        Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
    */
    var count = movies.length; console.log(count)
    /* Ex.14
        Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
    */
    function onlytheTitles()

    /* Ex.15
       Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
    */
    function onlyInThisMillennium() {
        if (movies.Year >= "2000") {
            return true
        } else {
            break
        }

    }
    onlyInThisMillennium()
    /* Ex.16 
        Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
    */

    /* Ex.17
        Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
    */

    /* Ex.18
        Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the title.
    */
    function searchByTitle(search) {
        let movie = movies.title
        if (movie === search)
            return (movies.title)
    }
    console.log(searchByTitle())

    /* Ex.19
        Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
        this object should contain an array called "match", made by all the movies which contain the given string in the title,
        and another array "unmatch" with all the remaining ones.
    */

    /* Ex.20
       Write a function called "removeIndex" which receives a number as a parameter and returns the movies array without the element in the given position.
    */

    // [EXTRAS] JS Advanced

    /* Ex.21
      Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
      Example:
      halfTree(3)
      *
      **
      ***
    */
    function tree() {
        let a = "*"
        let b = "**"
        let c = "***"
    }
    console.log(tree(a)) console.log(tree(b)) console.log(tree(c))

    /* Ex.22 
      Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
      Example: 
      tree(3)
        *  
       *** 
      *****
    */
    function tree() {
        let a = "*"
        let b = "***"
        let c = "*****"
    }
    console.log(tree(a)) console.log(tree(b)) console.log(tree(c))
    /* Ex.23
      Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
    */
    function isItPrime(num) {
        if (num === 2) {
            return true;
        } else if (num > 1) {
            for (var i = 2; i < num; i++) {

                if (num % i !== 0) {
                    return true;
                } else if (num === i * i) {
                    return false
                } else {
                    return false;
                }
            }
            console.log(isItPrime(7));
            /* This movies array is used throughout the exercises. Please don't change it :)  */
            const movies = [{
                    Title: "The Lord of the Rings: The Fellowship of the Ring",
                    Year: "2001",
                    imdbID: "tt0120737",
                    Type: "movie",
                    Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
                },
                {
                    Title: "The Lord of the Rings: The Return of the King",
                    Year: "2003",
                    imdbID: "tt0167260",
                    Type: "movie",
                    Poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
                },
                {
                    Title: "The Lord of the Rings: The Two Towers",
                    Year: "2002",
                    imdbID: "tt0167261",
                    Type: "movie",
                    Poster: "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
                },
                {
                    Title: "Lord of War",
                    Year: "2005",
                    imdbID: "tt0399295",
                    Type: "movie",
                    Poster: "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
                },
                {
                    Title: "Lords of Dogtown",
                    Year: "2005",
                    imdbID: "tt0355702",
                    Type: "movie",
                    Poster: "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
                },
                {
                    Title: "The Lord of the Rings",
                    Year: "1978",
                    imdbID: "tt0077869",
                    Type: "movie",
                    Poster: "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
                },
                {
                    Title: "Lord of the Flies",
                    Year: "1990",
                    imdbID: "tt0100054",
                    Type: "movie",
                    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
                },
                {
                    Title: "The Lords of Salem",
                    Year: "2012",
                    imdbID: "tt1731697",
                    Type: "movie",
                    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
                },
                {
                    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
                    Year: "1984",
                    imdbID: "tt0087365",
                    Type: "movie",
                    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
                },
                {
                    Title: "Lord of the Flies",
                    Year: "1963",
                    imdbID: "tt0057261",
                    Type: "movie",
                    Poster: "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
                },
                {
                    Title: "The Avengers",
                    Year: "2012",
                    imdbID: "tt0848228",
                    Type: "movie",
                    Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
                },
                {
                    Title: "Avengers: Infinity War",
                    Year: "2018",
                    imdbID: "tt4154756",
                    Type: "movie",
                    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
                },
                {
                    Title: "Avengers: Age of Ultron",
                    Year: "2015",
                    imdbID: "tt2395427",
                    Type: "movie",
                    Poster: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
                },
                {
                    Title: "Avengers: Endgame",
                    Year: "2019",
                    imdbID: "tt4154796",
                    Type: "movie",
                    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
                },
            ]