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
        return 2022 - this.birthYear;
    }
}
console.log(taras.calculateAge());