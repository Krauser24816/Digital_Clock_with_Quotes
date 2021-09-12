
let retString = "";

//API for fetching Quotes(API Link:- https://github.com/lukePeavey/quotable)
function newQuote(){
    fetch('https://api.quotable.io/random?minLength=40&maxLength=60')
        .then(response => response.json())
        .then(data => {
            console.log(`${data.content} —${data.author} `)
            retString = `${data.content} —${data.author} `
        })
        return retString;
}

let blinkText = newQuote();
let text = blinkText.split(" ");
let idx = 0;
let emptyString = "";

setInterval(showTime, 1000);
function showTime() {
    //These lines of codes help us get time.
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";

    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hour = 12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + " : " + min + " : " + sec + " " + am_pm;
    document.querySelector("body > div.clock").innerHTML = currentTime;

    //These lines of codes help us get Quotes word by word displayed.
    //Watch them carefully.
    if (idx == text.length) {
        idx = 0;
        emptyString ="";
        let newString = newQuote();
        text = newString.split(" ");
    }
    let displayText = text[idx];
    emptyString += " " + (displayText);

    idx++;
    document.getElementById("quote1").innerHTML = emptyString;


}
showTime();



