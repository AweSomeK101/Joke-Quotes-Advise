"use strict";

var btn = document.querySelectorAll('.btn');
var first = document.querySelector(".first");
var second = document.querySelector(".second");
var third = document.querySelector(".third");

btn.forEach(e => {
    e.addEventListener('click', btnEvt)
})


function dad() {
    fetch("https://icanhazdadjoke.com/", {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    })
        .then(res => {
            return res.json()
        })
        .then(data => {
            hidden();
            if (data.joke.includes('?')) {
                first.innerHTML = data.joke.substring(0, data.joke.indexOf('?') + 1);
                second.innerHTML = data.joke.substring(data.joke.indexOf('?') + 1, data.joke.length)
            }
            else {
                first.innerHTML = data.joke;
            }
        })
        .catch(err => console.log(err));
}

function advise() {
    fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(data => {
            hidden();
            first.innerHTML = data.slip.advice;
        })
}


function ProgQuotes() {
    fetch('https://programming-quotes-api.herokuapp.com/quotes/random')
        .then(res => res.json())
        .then(data => {
            hidden();
            first.innerHTML = data.en;
            third.innerHTML = data.author;
        })
}


function quotes() {
    fetch('https://quote-garden.herokuapp.com/api/v2/quotes/random')
        .then(res => res.json())
        .then(data => {
            hidden();
            first.innerHTML = data.quote.quoteText;
            third.innerHTML = data.quote.quoteAuthor;
        })
}

function KanyeQuotes() {
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(data => {
            hidden();
            first.innerHTML = data.quote;
            third.innerHTML = "Kanye West";
        })
}


function jokes() {
    fetch('https://sv443.net/jokeapi/v2/joke/Programming,Miscellaneous,Pun')
        .then(res => res.json())
        .then(data => {
            hidden();
            if (data.type == 'single') {
                first.innerHTML = data.joke;
            }
            else {
                first.innerHTML = data.setup;
                second.innerHTML = data.delivery;
            }
        })
}

function dark() {
    fetch('https://sv443.net/jokeapi/v2/joke/Dark')
        .then(res => res.json())
        .then(data => {
            hidden();
            if (data.type == 'single') {
                first.innerHTML = data.joke;
            }
            else {
                first.innerHTML = data.setup;
                second.innerHTML = data.delivery;
            }
        })
}

function clear() {
    first.innerHTML = "";
    second.innerHTML = "";
    third.innerHTML = "";
}

function hidden() {
    document.querySelector(".text").classList.toggle('hidden');
    document.querySelector(".spin").classList.toggle('hidden');
}

function btnEvt(e) {
    e.preventDefault();
    var choi = e.target.id;
    hidden();
    clear();
    switch (choi) {
        case 'joke': jokes();
            break;

        case 'dad': dad();
            break;

        case 'dark': dark();
            break;

        case 'advise': advise();
            break;

        case 'quote': quotes();
            break;

        case 'prog': ProgQuotes();
            break;

        case 'kanye': KanyeQuotes();
            break;
    }
}