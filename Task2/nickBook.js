const prompt = require('prompt-sync')({sigint: true});

// array of objects, each has a name and nick 

const knownPeople = [
    {
        name: "Mehmet Mazi",
        nick: "Memz",
    },
    {
        name: "Surav Kc",
        nick: "Zoro",
    },
    {
        name: "Sanjeev Srithevan",
        nick: "Sanj",
    },
];

let command;

do {
    console.log();
    command = prompt("Enter command (or enter 'help'): ");
    if (command === "help") {
        console.log("Available commands: ");
        console.log(" help      print this help");
        console.log(" stop      exit the program");
        console.log(" count     show how many persons we know");
        console.log(" add       add a person");
        console.log(" nick      search by nick");
        console.log(" name      search by name");
    }

    if (command === 'count') {
        console.log(`Record count: ${knownPeople.length}`);
    }

    if (command === 'add') {
        const name = prompt("name: ");
        const nick = prompt("nick: ");

        const newPerson = {}
        newPerson.name = name;
        newPerson.nick = nick;

        // add the new person at the end of the array 

        knownPeople[knownPeople.length] = newPerson;
        console.log(`Added ${name}, new record count: ${knownPeople.length}`);
    }

    if (command == 'name') {
        const name = prompt("Nick to search for: ");
        for (const person of knownPeople) {
            if (person.name.includes(name)) {
                console.log(`"${person.name}" has nick "${person.nick}"`);

            }
        }
    }

    if (command === 'name') {
        const name = prompt("Name to search for: ");
        for (const person of knownPeople) {
            if (person.name.includes(name)) {
                console.log(`"${person.name}" has nick "${person.nick}"`);
            }
        }
    }

}   while (command !== "stop");

