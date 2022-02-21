// OOP Objektově orientované programování JavaScript (OOP)
// Atribut - vlastnosti nebo data
// Metoda - schopnosti

// Tvorba objektu s konstruktorem

var Person = function(name,yearBirth,job){
  // Atributy
  this.name = name;
  this.yearBirth = yearBirth;
  this.job = job;
  // Metoda
  this.calcAge = function(){
    return ( 2022 - this.yearBirth);
  }
}

var taras = new Person ('Taras', '1981', 'programátor');
var marta = new Person ('Marta', '1991', 'prodavačka');


console.log(taras.name);
console.log(taras.yearBirth);
console.log(taras.job);
console.log(taras.calcAge());

console.log(marta.name);
console.log(marta.yearBirth);
console.log(marta.job);
console.log (marta.calcAge());