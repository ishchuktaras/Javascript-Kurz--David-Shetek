/* **************
 * Objects (Objekty)
 */
// Metody u objektu = funkce

var taras = {
    firstName: 'Taras',
    secondName: 'Ishchuk',
    birthYear: '1981',
    driveLicence: true,
    family: ['Matvii', 'Eva', 'Sofia', 'Angelina', 'Marta'],
    calculateAge: function() {
        this.age = 2022 - this.birthYear;
    }
}
taras.calculateAge();
console.log(taras);