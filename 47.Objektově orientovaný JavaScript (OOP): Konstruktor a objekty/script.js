// OOP Objektově orientované programování JavaScript (OOP)
// Atribut - vlastnosti nebo data
// Metoda - schopnosti

// Tvorba objektu bez konstruktoru


var taras = {
  name: 'Taras',
  yearBirth: '1981',
  job: 'Programátor'
}

var marta = {
  name: 'Marta',
  yearBirth: '1991',
  job: 'Prodavačka'
}

var angelina = {
  name: 'Angelina',
  yearBirth: '2008',
  job: 'Školačka'
}

// Tvorba objektu s konstruktorem

var Person = function(name,yearBirth,job){
  this.name = name;
  this.yearBirth = yearBirth;
  this.job = job;
}

var taras = new Person ('Taras', '1981', 'programátor');
var marta = new Person ('Marta', '1991', 'prodavačka');


console.log(taras.name);
console.log(taras.yearBirth);
console.log(taras.job);

console.log(marta.name);
console.log(marta.yearBirth);
console.log(marta.job);