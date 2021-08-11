/*
 * This is index.js
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

async function showMessage(elem, url) {
    const response = await fetch(url);
    const text = await response.text();
    elem.textContent = text;
}

window.addEventListener('load', showMessage);

async function showList(elem, url) {
    const response = await fetch(url);
    const convertJson = await response.json();
    for (const i of convertJson) {
        const li = document.createElement('li');
        li.textContent = i;
        elem.append(li);
    }

}

window.addEventListener('load', showList);

async function interval(elem, url) {
    const response = await fetch(url);
    const text = await response.text();
    elem.textContent = text;
}
// let intervalID = window.setInterval(startShowingMessage, 1000, elem, url);

function startShowingMessage(elem, url) {
    let intervalID = window.setInterval(interval, 1000, elem, url);
}

async function handleError(elem, url) {
    const response = await fetch(url);
    if (response.ok) {
        const text = await response.text();
        elem.textContent = text;
    } else {
        elem.textContent = "OH DEAR";
    }
}

async function drawBoxInterval(canvas, url) {
    const ctx = canvas.getContext('2d');
    const response = await fetch(url);
    console.log(response);
    const text1 = await response.json();
    console.log(text1.x, text1.y);

    ctx.fillRect(text1.x, text1.y, 10, 10);
}

function drawBox(canvas, url) {
    let intervalID = window.setInterval(drawBoxInterval, 1000, canvas, url);
} 


// function filler(list, candidates) {
//     for (let i=0; i<candidates.length; i++) {
//         list.insertAdjacentHTML("beforeend", `<li>${candidates[i]}</li>`);
//     }
// }