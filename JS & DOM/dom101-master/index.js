/*
 * This is index.js
 * Open index.html in your browser to check what
 * you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

// add your functions here

function replaceText(elem, str) {
    const replacethis = document.querySelector("#replacethis");
    replacethis.textContent = str;
}

function addTextTo(elem, str) {
    const addto = document.querySelector("#addto");
    addto.append(str);
}

function moreBears() {
    const animals = document.querySelector("#animals");
    animals.src = "http://placebear.com/400/200";
    animals.alt = "A bear.";
    animals.title = "A BEAR!";
}

function setId(elem, str) {
    elem.id = str;
    return elem;
}

function setClass(elem, str) {
    elem.className = str;
    return elem;
} 

function addAClass(elem, str) {
    elem.classList.add(str);
    return elem;
}

function removeAClass(elem, str) {
    elem.classList.remove(str);
    return elem;
}

function newElement(name) {
    const tag = document.createElement(name);
    return tag;
}

function findElementById(id) {
    const findElement = document.getElementById(id);
    return findElement;
}

function findElementsByQuery(query) {
    const findElement = document.querySelectorAll(query);
    return findElement;
}

function reverseList(query) {
    const listItems = document.querySelector(query);
    let arrayItems = [];

    for (let i=0; i<listItems.children.length; i++) {
        arrayItems.push(listItems.children.item(i).textContent);
    }

    listItems.innerHTML = " ";
    for (let i=0; i<arrayItems.length; i++) {
        listItems.insertAdjacentHTML("afterbegin", `<li>${arrayItems[i]}</li>`);
      }

      return listItems;
}

function mover(moveThis, appendToThis) {
    const dest = document.querySelector(moveThis);
    const dest2 = document.querySelector(appendToThis);
    dest2.appendChild(dest);
}

function filler(list, candidates) {
    for (let i=0; i<candidates.length; i++) {
        list.insertAdjacentHTML("beforeend", `<li>${candidates[i]}</li>`);
    }
}

function dupe(selector) {
    const thingToBeDuped = document.querySelector(selector);
    let cloning = thingToBeDuped.cloneNode(true);    
    thingToBeDuped.parentElement.append(cloning);
}

function removeAll(selector) {
    const match = document.querySelectorAll("#noevens p");
    for (let i=0; i<match.length; i++) {
        if (match[i].textContent === "I hate you") {
            match[i].remove();
        }
    }
}

function getUserData() {
    const username = document.querySelector("#username").value;
    const speed = document.querySelector("#speed").value;
    const student = document.querySelector("#student").checked;

    const result = {"name": username, "speed": parseInt(speed), "student": student};
    return result;  
}