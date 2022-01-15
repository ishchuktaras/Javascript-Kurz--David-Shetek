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
    calculateAge: function(birthYear) {
        return 2022 - birthYear;
    }
}
console.log(taras.calculateAge(1981));