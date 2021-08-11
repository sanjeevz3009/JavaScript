const dragEvents = ['dragstart', 'drag', 'dragenter', 'dragleave', 'dragover', 'drop', 'dragend'];

let sections;

function addCell(parent, txt) {
  const td = document.createElement('td');
  td.textContent = txt;
  parent.append(td);
}

function handleAllDragEvents(event) {
  let received = '';
  const time = Date.now();

  // do the drag and drop magic so something actually happens.
  if (event.type === 'dragstart') {
    event.dataTransfer.setData('text/plain', time);
  }

  if (event.type === 'dragover') {
    if (event.target.id === 'droptarget') {
      // only allow dropping in one place.
      event.preventDefault();
    }
  }

  if (event.type === 'drop') {
    received = event.dataTransfer.getData('text/plain');
    event.preventDefault();
  }

  // report the actual event if the user has requested it
  const eventTypeCheckBox = document.querySelector('#x' + event.type);
  if (eventTypeCheckBox.checked) {
    const tr = document.createElement('tr');
    addCell(tr, time);
    addCell(tr, event.type);
    addCell(tr, event.target.id);
    addCell(tr, event.currentTarget.id);
    addCell(tr, received);
    document.querySelector('#feedback').append(tr);
    tr.scrollIntoView({ smooth: true });

    // update event counter (in brackets next to each event name)
    const counter = document.querySelector('#x' + event.type + 'count');
    counter.dataset.count++;
    counter.textContent = window['x' + event.type + 'count'].dataset.count;
  }
}

// eslint-disable-next-line no-unused-vars
function toggle(e) {
  selected[e] = !selected[e];
  localStorage.setItem('eventexpo', JSON.stringify(selected));
  console.log('stored', e, localStorage.eventexpo);
}

let selected = {};

function createSwitches() {
  let str = '';
  try {
    if (localStorage.eventexpo) {
      selected = JSON.parse(localStorage.eventexpo);
    } else {
      selected = { dragstart: true, dragend: true, drop: true };
    }
    for (const event of dragEvents) {
      const checked = selected[event] ? 'checked' : '';
      str += `<label><input type="checkbox" ${checked} onclick="toggle('${event}')" id="x${event}"><p>${event} (<span id=x${event}count data-count=0>0</span>)</p></label>`;
    }
  } catch (e) {
    str = "<p class=error>Hmmmm.  <code>localStorage</code> could not be accessed.  If you're on Safari, set <em>'Disable local file restrictions'</em> in the <em>Develop</em> menu to fix this security feature.</p>";
  }
  document.querySelector('#switches').innerHTML += str;
}

function prep() {
  sections = document.getElementsByTagName('section');
  for (const section of sections) {
    for (const event of dragEvents) {
      section.addEventListener(event, handleAllDragEvents);
    }
  }
  const dragme = document.createElement('p');
  dragme.id = 'dragme';
  dragme.draggable = true;
  dragme.textContent = 'Drag me!!';
  sections[0].append(dragme);
  createSwitches();
}

window.addEventListener('load', prep);
