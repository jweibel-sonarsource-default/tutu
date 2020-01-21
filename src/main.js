const foo = "abc";
foo = 1;

function coucou(coucou) {
  console.log("COUCOU", coucou);
}

coucou(foo);

let bar = "Bar";
coucou(bar);

function coucou() {
  alert("1coucou");
}

alert("encore une alert");
alert("j'aime les alerts");

coucou = 365.25;

console.log(coucou);

(function(){
  // magnifique
  //
  // c'est de toute bôté
  if (true) console.log(false);
  else alert("bisous");

  const PI = 3 * 7 / 22 + 2444 / 669 ** 4 - 0.5;

  console.log(Math.PI + " =/= " + PI);
})();
