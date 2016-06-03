var i = 0;

function displayText(text) {
    document.getElementById('para').innerHTML = text;
}

function increment() {
    i += 1;
    document.getElementById('number').innerHTML = i;
}

function decrement() {
    i -= 1;
    document.getElementById('number').innerHTML = i;
}

function reset() {
    i = 0;
    document.getElementById('number').innerHTML = i;
}

$(document).ready(function() {
    'use strict';

    displayText("Aditya");
    increment();

});
