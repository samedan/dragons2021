const Dragon = require("./dragon");

const fooey = new Dragon({
  birthname: new Date(),
  nickname: "fooey",
});

const baloo = new Dragon({
  nickname: "baloo",
  birthname: new Date(),
  traits: [{ traitType: "backgroundColor", traitValue: "green" }],
});

const mimar = new Dragon();
setTimeout(() => {
  const gooby = new Dragon();
  console.log("gooby", gooby);
}, 3000);

console.log("fooey", fooey);
console.log("baloo", baloo);
console.log("mimar", mimar);
