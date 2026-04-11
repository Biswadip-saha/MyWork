// Accessing elements the hard way

// console.log(document.links[0]);

// Changing innerHTML

// document.body.innerHTML = ' <h1> Hello World </h1> '

// Accessing elements by id

// console.log(document.getElementById('main'));
// console.log(document.getElementById('app-title').id);
// console.log(document.getElementById('app-title').getAttribute('id'));
// document.getElementById('app-title').setAttribute('id', 'title');

const title = document.getElementById('app-title');
console.log(title.textContent);

// const main = document.getElementById('main')
// main.innerHTML = '<h1> Hello World </h1>'

// Accesing elements by name

// console.log(document.querySelector('h1'));
// console.log(document.querySelector('input[type = "text"]'));
// document.querySelector('#main h1').innerText = 'Hello'

// DOM Manipulation

let output;

// output = document.all
// output = document.documentElement
// output = document.body.children

// output = document.doctype
// output = document.domain
// output = document.URL
// output = document.characterSet
// output = document.contentType

// output = document.forms
// output = document.forms[0].id
// document.forms[0].id = 'newid'
// document.forms[0].className = 'newclass'
// output = document.forms[0].method
// output = document.forms[0].action

// output = document.links
// output = document.images
// output = document.images

// title.textContent = 'Hello World'
// title.innerText = "Hello again"
// title.innerHTML = '<strong> Shoping List </strong>'

// Styles

// title.style.color = 'red'
// title.style.backgroundColor = 'black'
// title.style.padding = '10px'

// Accessing multiple elements

const listItems = document.querySelectorAll('.item');
// console.log(listItems);
// listItems.forEach((item) => {
//     item.style.color = 'red';
// });

// Traversing the DOM

const parent = document.querySelector('#item-list');
// output = parent.children[0].innerText
// output = parent.children[0].className
// output = parent.children[0].nodeName
// parent.firstElementChild.innerText = 'Child 1'
// parent.latElementChild.innerText = 'Child 1'

const child = document.querySelector('.item');
// output = child.parentElement
// output.style.padding= '10px'

const siblingEle = document.querySelector('.item:nth-child(2)');
// output = siblingEle;
// output = siblingEle.nextElementSibling;
// output.style.color = 'green';
// output = siblingEle.previousElementSibling;

// Nodes

const nodeParent = document.querySelector('.parent');
// output = nodeParent.childNodes;
// output = nodeParent.childNodes[0].nodeName;
// output = nodeParent.childNodes[3].outerHTML;
// output = nodeParent.childNodes[7].style.color = 'Red';
// output = nodeParent.firstChild;
// output = nodeParent.lastChild;

const nodeChild = document.querySelector('.container');
// output = nodeChild.parentNode
// output = nodeChild.parentElement
// output = nodeChild.parentElement;

const nodeSibling = document.querySelector('.item:nth-child(2)');
// output = nodeSibling.nextSibling;
// output = nodeSibling.previousSibling;

console.log(output);

// Create And Append Elements

const div = document.createElement('div');
// div.className = 'my-element';
// div.id = 'my-element';
// div.setAttribute('title', 'my-element');

const text = document.createTextNode('Hello World');
// div.appendChild(text)
// document.querySelector('ul').appendChild(div)

console.log(div);

// Insert Elements, Texts And Html

/*
<!-- beforebegin -->
<p>
    <!-- afterbegin -->
    Text
    <!-- beforeend -->
</p> 
<!-- afterend -->
*/

// insertAdjacentElements
// insertAdjacentText
// insertAdjacentHTML
// insertBefore

// Replace item

// function replaceFirstItem() {
//     const firstItem = document.querySelector('li:first-child');

//     const li = document.createElement('li');
//     li.textContent = 'Replaced First';

//     firstItem.replaceWith(li);
// }
// replaceFirstItem();

// function replaceSecondItem() {
//     const secondItem = document.querySelector('li:nth-child(2)');

//     secondItem.outerHTML = '<li>Replaced Second</li>';
// }
// replaceSecondItem();

// function replaceAllItems() {
//     const lis = document.querySelectorAll('li');

// lis.forEach((item, index) => {
//   // item.outerHTML = '<li>Replace All</li>';
//   if (index === 1) {
//     item.innerHTML = 'Second Item';
//   } else {
//     item.innerHTML = 'Replace All';
//   }
// });

//     lis.forEach(
//         (item, index) =>
//             (item.outerHTML =
//                 index === 1 ? '<li>Second Item</li>' : '<li>Item</li>')
//     );
// }
// replaceAllItems();

// function replaceChildHeading() {
//     const header = document.querySelector('header');
//     const h1 = document.querySelector('header h1');

//     const h2 = document.createElement('h2');
//     h2.id = 'app-title';
//     h2.textContent = 'Shopping List';
//     header.replaceChild(h2, h1);
// }
// replaceChildHeading();

// Remove Elements

// function removeClearButton() {
//     document.querySelector('#clear').remove();
// }
// removeClearButton();

// function removeFirstChild() {
//     const ul = document.querySelector('ul');
//     const li = document.querySelector('li:first-child');

//     ul.removeChild(li);
// }
// removeFirstChild();

// function removeItem(num){
//     const ul = document.querySelector('ul')
//     const li = document.querySelector(`li:nth-child(${num})`)

//     ul.removeChild(li)
// }
// removeItem(2)

