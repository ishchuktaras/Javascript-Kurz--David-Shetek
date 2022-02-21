// OOP Objektově orientované programování JavaScript (OOP)

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


console.log(taras.name);