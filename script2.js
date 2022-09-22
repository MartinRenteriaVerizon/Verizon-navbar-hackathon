import data from "./data.json" assert { type: "json" };


console.log(data)

const urlSections = data.navsection[0].items;

for (let i = 0; i < urlSections.length; i++) {
  const button = document.createElement("button");
  const node = document.createTextNode(urlSections[i].link.link_title);
  button.appendChild(node);
  const element = document.getElementById("businessNav");

  element.appendChild(button);
}

console.log(data.navsection[0].items[0].link.link_title);

