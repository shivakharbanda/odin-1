console.log("hello");

const container = document.getElementById("container");

const content = document.createElement('div');

content.classList.add('content');
content.textContent = 'This is the glorious text-content';

container.appendChild(content);

const p = document.createElement('p');
p.classList.add("red-p")
p.textContent = "Hey I'm red!"
p.style.color = 'red';

container.appendChild(p)

const head = document.createElement('h3');
head.classList.add('blue-h3');
head.textContent = "I'm a blue h3";
head.style.color = "blue";

container.appendChild(head)

const div2 = document.createElement('div');
div2.classList.add("div2");

div2.style.cssText = "border: black; background: pink;";

const h1 = document.createElement('h1');
h1.classList.add('h1-div2');
h1.textContent = "I'm in a div";

div2.appendChild(h1);


const p2 = document.createElement('p');
p2.classList.add(p2-div2);
p2.textContent = "ME TOO!";

div2.appendChild(p2);

container.appendChild(div2);
