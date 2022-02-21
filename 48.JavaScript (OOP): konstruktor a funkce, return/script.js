// OOP Objektově orientované programování JavaScript (OOP)
// Atribut - vlastnosti nebo data
// Metoda - schopnosti

// Tvorba objektu s konstruktorem

var Person = function(name,yearBirth,job){
  // Atributy
  this.name = name;
  this.yearBirth = yearBirth;
  this.job = job;
  // ***** Metoda *****
  // this.calcAge = function(){
  //   return ( 2022 - this.yearBirth);
  // } 
}

Person.prototype.calcAge = function(){
  return ( 2022 - this.yearBirth);
}

var taras = new Person ('Taras', '1981', 'programátor');
var marta = new Person ('Marta', '1991', 'prodavačka');

console.log(taras);
console.log(marta);