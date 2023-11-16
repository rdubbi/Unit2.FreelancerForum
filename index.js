// Far from finished, this is my work so far:

// Static HTML Elements on my page.
const body = document.body;

const h1 = document.createElement("h1");
h1.innerText = "42069err.";

const h2 = document.createElement("h2");
h2.innerText = "formerly known as fiverr.com";

const h3 = document.createElement("h3");
h3.innerText = "someday this will calculate the average price...";

const h4 = document.createElement("h4");
h4.innerText =
  "The following list will display the name, occupation and price our 420690errs are offering! The average price is updated in real time above.";

const ul = document.createElement("ul");
ul.innerText = "ul";

const li = document.createElement("li");
li.innerText = "li";

ul.append(li);
body.append(h1, h2, h3, h4, ul);

// Attempting to call the function gigLister() in order to generate random combinations of names, occupations and prices.
gigLister();

const freelancers = [
  { name: "Dayman", occupation: "Meteorite Hunter", price: 420 },
  { name: "Nightman", occupation: "programmer", price: 69 },
  { name: "ahAHah", occupation: "vaporizer sommelier", price: 666 },
  { name: "Champion of SUN", occupation: "Drag Queen", price: 888 },
  { name: "Michealangelo", occupation: "Underwater Welder", price: 3 },
  { name: "Donatello", occupation: "A sk8r boi", price: 21 },
  { name: "Leonardo", occupation: "mob boss therapist", price: 121 },
  { name: "Rafael", occupation: "influencer", price: 777 },
];

function gigLister() {
  // iterate through array of objects called freelancer.
  for (let freelancer = 0; freelancer < freelancers.length; freelancer++) {
    // generate get random names, occupations, and prices
    const freelancerName =
      freelancers.name[Math.floor(Math.random() * freelancers.length)];
    const freelancerGig =
      freelancers.occupation[Math.floor(Math.random() * freelancers.length)];
    const freelancerPrice =
      freelancers.price[Math.floor(Math.random() * freelancers.length)];
    // create a list html element
    const element = document.createElement("li");
    //   add text including random combination name, occupation and price.
    element.innerText =
      freelancerName + " / " + freelancerGig + " / " + freelancerPrice;
  }
  //   add list item with text to ul previously created.
  ul.append(element);
}
