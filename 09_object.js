


let person = {
    name: "Gaj",
    city: "Pune",
    experience: 10
}

console.log(person);

//console.table(person);
console.log(`Type of person is: ${typeof person}`);
console.log(`====== Accessing object properties =========`);

 let personCity = person["city"]; // [] Notation

console.log(`Person city is: ${personCity}`);

 const personExp = person.experience; // dot Notation

console.log(`Person experience is: ${personExp}`);