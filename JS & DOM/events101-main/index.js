'use strict';
/**
 * Add your functions here...
 */

function targetTextToConsole(event) {
    console.log(event.target.textContent);
}

function tttcAttacher() {
    const button0 = document.querySelector('#button0').addEventListener('click', targetTextToConsole);
}

function lovelyParaAttacher() {
    document.querySelector('#thisisalovelyparagraph').addEventListener('click', lovelyToggle);
}


function lovelyButtonAttacher() {
    document.querySelector("#button1").addEventListener('click', lovelyToggle);

}

function concatAttacher() {
    const in1 = document.querySelector("#in1").addEventListener('change', concatAttacherHandle);
    const in2 = document.querySelector("#in2").addEventListener('change',concatAttacherHandle);    
}

function concatAttacherHandle(e) {
    const out1 = document.querySelector('#out1');
    const in1 = document.querySelector("#in1")?.value;
    const in2 = document.querySelector("#in2")?.value;

    out1.textContent = in1 + in2;
}

function snitchAttacher() {
    const mousewatcher11 = document.querySelector("#mousewatcher");

    mousewatcher11.addEventListener("mouseover", snitchUpdater);
    mousewatcher11.addEventListener("mouseout", snitchUpdater);
}


function reportAttacher() {
    const mouseReporter = document.querySelector("#mousereporter");
    mouseReporter.addEventListener("mousemove", reportUpdater);
}

function reportUpdater(event) {
    const report11 = document.querySelector("#report");
    report11.innerText = `x: ${event.screenX} y: ${event.screenY}`;
}

function idValidationAttacher() {
    document.querySelector("#newid").addEventListener("input", checkForSpaces);
}

function checkForSpaces() {
    const input = document.querySelector("#newid");
    let invalid = false;

    if (input.value === '') {
        invalid = true;
    }

    for (const character of input.value) {
        if (character === ' ') {
            invalid = true;
        }
    }

    if (invalid) {
        input.classList.add("invalid");
    } else if (!invalid && input.classList.contains("invalid")) {
        input.classList.remove("invalid");
    }
}