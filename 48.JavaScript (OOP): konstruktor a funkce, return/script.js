// OOP Objektově orientované programování JavaScript (OOP)
// Atribut - vlastnosti nebo data
// Metoda - schopnosti

// Tvorba objektu s konstruktorem

var Person = function(name,yearBirth,job){
  this.name = name;
  this.yearBirth = yearBirth;
  this.job = job;
  this.calcAge = function(){
    console.log( 2022 - this.yearBirth);
  }
}

var taras = new Person ('Taras', '1981', 'programátor');
var marta = new Person ('Marta', '1991', 'prodavačka');


console.log(taras.name);
console.log(taras.yearBirth);
console.log(taras.job);
taras.calcAge();

console.log(marta.name);
console.log(marta.yearBirth);
console.log(marta.job);
marta.calcAge();