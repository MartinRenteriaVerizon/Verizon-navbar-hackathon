const data = require('./data.json')

const urlSections = data.navsection[0].items

// console.log(data.navsection[0].items[0].link.section_header);
// console.log(data.navsection[0].items[0].link.link_title);
// console.log(data.navsection[0].items[0].link.url)

for (let i = 0; i < urlSections.length; i++) {
  console.log(urlSections[i].link.link_title)
}

if (typeof window !== "undefined") {
  console.log("You are on the browser");
} else {
  console.log("You are on the server");
}

// alert(document.body.id);
