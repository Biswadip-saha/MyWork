// Clear button

const clearBtn = document.querySelector('#clear');
function onclear() {
    // const itemList = document.querySelector('ul');
    const items = document.querySelectorAll('li');

    // itemList.innerHTML = '';

    // while (itemList.firstChild) {
    //     itemList.removeChild(itemList.firstChild);
    // }

    items.forEach((item) => item.remove());
}

// .onclick is deprecated use addEventListener

clearBtn.addEventListener('click', onclear);

// Remove the eventlistener

// setTimeout(() => clearBtn.removeEventListener('click', onclear), 50000);
// setTimeout(() => clearBtn.click(), 50000);

// Logo

const logo = document.querySelector('img');

const onDoubleclick = () => {
    console.log('double clicked the logo');
    if (document.body.style.backgroundColor != 'purple') {
        document.body.style.backgroundColor = 'purple';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
};

logo.addEventListener('dblclick', onDoubleclick);

// More eventListener:-
// `contextmenu` (RightClick),
// `mousedown` (Hold),
// `mouseup` (Leaving the hold),
// `wheel` (Scroll from the element),
// `mouseover` (Hover on the element),
// `mouseout` (Leaving the mouse over area),
// `dragstart` (Drag start event),
// `dragend` (Drag end event),
// `drag` (Drag event)

// Event Object

logo.addEventListener('click', function (e) {
    console.log(e.target);
});

document.querySelector('a').addEventListener('click', function (e) {
    e.preventDefault();
    console.log('Link was clicked');
});

/*
- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to (Can be same as target)
- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element
- `offsetY` - The y position of the mouse click relative to the element
- `pageX` - The x position of the mouse click relative to the page
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen
- `screenY` - The y position of the mouse click relative to the screen
- preventDefault() - Prevents the default behaviour such as submiting in the page as informs or links
*/

// Keyboard Events

const itemInput = document.getElementById('item-input');
const onKeypress = (e) => {
    console.log('keypress');
};
const onKeyUp = (e) => {
    console.log('keyup');
};
const onKeyDown = (e) => {
    console.log('keydown');
};
const onKey = (e) => {
    console.log(e.key);

    // key
    if (e.key === 'Backspace') {
        console.log('You hit enter');
    }

    // keycode
    // https://www.toptal.com/developers/keycode/table-of-all-keycodes

    // code
    console.log(e.code);
    if (e.code === 'Digit1') {
        console.log('You pressed 1');
    }

    // repeat
    if (e.repeat) {
        console.log('You are holding down ' + e.key);
    }
};

// itemInput.addEventListener('keypress', onKeypress)
// itemInput.addEventListener('keyup', onKeyUp)
// itemInput.addEventListener('keydown', onKeyDown)
itemInput.addEventListener('keydown', onKey);

// Keycode info

window.addEventListener('keydown', showKeyCodes);

function showKeyCodes(e) {
    const insert = document.getElementById('insert');
    insert.innerHTML = '';

    const keyCodes = {
        'e.key': e.key === ' ' ? 'space' : e.key,
        'e.keycode': e.keyCode,
        'e.code': e.code,
    };

    for (let key in keyCodes) {
        const div = document.createElement('div');
        div.className = 'key';
        const small = document.createElement('small');

        const keyText = document.createTextNode(key);
        const textValue = document.createTextNode(keyCodes[key]);

        small.appendChild(keyText);
        div.appendChild(textValue);
        div.appendChild(small);
        insert.appendChild(div);
    }
}

// Input Events

const priorityInput = document.getElementById('priority-input');
const checkboxInput = document.getElementById('checkbox');
const headingInput = document.querySelector('h1');

function onInput(e) {
    headingInput.textContent = e.target.value;
}
function onChecked(e) {
    headingInput.textContent = e.target.checked ? 'Checked' : 'Not Checked';
}
function onFocus(e) {
    console.log('Input is Focused');
    itemInput.style.outlineStyle = 'solid';
    itemInput.style.outlineWidth = '1px';
    itemInput.style.outlineColor = 'green';
}
function onBlur(e) {
    console.log('Input is notFocused');
    itemInput.style.outlineStyle = 'none';
}

itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('change', onInput); // You can use input in event type also
checkboxInput.addEventListener('input', onChecked);

itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);

// Form Submission

const form = document.getElementById('item-form');

function onSubmit(e) {
    e.preventDefault();

    if (itemInput.value === '' || priorityInput.value === '0') {
        alert('Please Fill in all fields');
        return;
    }

    console.log(itemInput.value, priorityInput.value);
}
function onSubmit2(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const itemInfo = formData.get('item');
    const priorityInfo = formData.get('priority');
    const entries = formData.entries();

    console.log(formData);
    console.log(itemInfo, priorityInfo);
    console.log(entries);

    for (let entry of entries) {
        console.log(entry);
    }
}

form.addEventListener('submit', onSubmit);
form.addEventListener('submit', onSubmit2);

// Event Bubbling

// the event is first capture and handled by the innermost element and then propagated to outer elements till document
// to stop propagation in mid the process use : e.stopPropagation()

// Event Delegation and Multiple Elements

const list = document.querySelector('ul');

list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});

// Window Events And Page loading

// On Page Load
// window.onload = function () {
//   document.querySelector('h1').textContent = 'Hello World';
// };

// window.addEventListener('load', () => console.log('Page Loaded'));

// On DOM Load
// window.addEventListener('DOMContentLoaded', () => console.log('DOM Loaded'));

// console.log('Run me');

// Resize Event
// window.addEventListener('resize', () => {
//   document.querySelector(
//     'h1'
//   ).innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
// });

// Scroll Event
// window.addEventListener('scroll', () => {
//   console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);

//   if (window.scrollY > 70) {
//     document.body.style.backgroundColor = 'black';
//     document.body.style.color = 'white';
//   } else {
//     document.body.style.backgroundColor = 'white';
//     document.body.style.color = 'black';
//   }
// });

// Focus & Blur Events
// window.addEventListener('focus', () => {
//   document.querySelectorAll('p').forEach((p) => {
//     p.style.color = 'blue';
//   });
// });

// window.addEventListener('blur', () => {
//   document.querySelectorAll('p').forEach((p) => {
//     p.style.color = 'black';
//   });
// });