// I couldnt sleep until I figured this out... but I finally have something functional.
// I am 95% confident it even meets the criteria for full points!
// I even.. understand what is going too? :0

// an array of names, jobs, and prices
const freelancers = [
  { name: "Dayman", occupation: "Meteorite Hunter", price: 420 },
  { name: "Nightman", occupation: "Programmer", price: 69 },
  { name: "ahAHah", occupation: "Vape Sommelier", price: 666 },
  { name: "Champion of SUN", occupation: "Drag Queen", price: 888 },
  { name: "Michealangelo", occupation: "Underwater Welder", price: 3 },
  { name: "Donatello", occupation: "Sk8r Boi", price: 21 },
  { name: "Leonardo", occupation: "Mob Therapist", price: 121 },
  { name: "Rafael", occupation: "Influencer", price: 777 },
  { name: "Borat", occupation: "Nice/Not Consultant", price: 777 },
];

//This function creates my list and generates my average price calculation.
function activeElements() {
  // creating some containers and variables.
  const freelanceContainer = document.querySelector("#list");
  const avgContainer = document.querySelector("#avgCalc");
  let priceSum = 0;
  let priceAvg = 0;

  freelancers.forEach(() => {
    // I originally thought they all had to be a random mix of the names/jobs/prices in the array.
    // I realize now that was not part of the criteria, but I wasted so much time on it yesterday I just had to finish the job.
    const newFreelancer = document.createElement("li");
    const rName =
      freelancers[Math.floor(Math.random() * freelancers.length)].name;
    const rGig =
      freelancers[Math.floor(Math.random() * freelancers.length)].occupation;
    const rPrice =
      freelancers[Math.floor(Math.random() * freelancers.length)].price;

    newFreelancer.textContent = `${rName}, a ${rGig}.... $${rPrice}`;
    freelanceContainer.append(newFreelancer);
    // I wanted to make a function to do this calculation, but I struggled to get the accurate rName, rGig, and rPrice
    // outside of this foreach. This works, but its not as pretty as it should be.
    priceSum += rPrice;
    priceAvg = priceSum / freelancers.length;

    avgContainer.textContent = `The Average gig price is currently $${Math.round(
      priceAvg
    )} (updated every 20 seconds, for your convenience!)`;
  });
  //   calling my function that adds a new freelancer every few seconds.
  addRando();
}

// A function that adds a mysterious random freelancer into the mix at an interval of 2.269 seconds.
// Because of my struggle to make the average price calculator its own function,
// I couldnt get prices from addRando to be included in the live average price traker, causing an innacuracy.
// So I resorted to adding a Free (non number) price that wouldnt alter the average price tracker.
function addRando() {
  royJobs = [
    { occupation: "Bad Advice" },
    { occupation: "Good Advice" },
    { occupation: "Dad Jokes" },
    { occupation: "Insomnia" },
    { occupation: "Sourdough" },
    { occupation: "Alright Stories" },
    { occupation: "Guitar Noodling" },
  ];

  setInterval(() => {
    const freelanceContainer = document.querySelector("#list");
    const randoFreelancer = document.createElement("li");

    const name = "Roy";
    const job = royJobs[Math.floor(Math.random() * royJobs.length)].occupation;
    const bigBucks = "FREE WHILE SUPPLIES LAST!!";

    randoFreelancer.textContent = `${name}, Some ${job}.... $${bigBucks}`;
    freelanceContainer.append(randoFreelancer);
    console.log(randoFreelancer);
  }, 2269);
}

activeElements();

// I originally wanted my list to populate freelancers one at a time.
// then once an amount of freelancers = freelancer.length was reached,
// I wanted the next new freelancer generated to replace the oldest/nextoldest freelancer in the list.
// I never figured out how to do that and I would like to figure out how!
// I added this is close but not quite solution to that problem. The page reloads every 12 seconds, triggering a fresh information.
setTimeout(function () {
  window.location.reload();
}, 20000);
