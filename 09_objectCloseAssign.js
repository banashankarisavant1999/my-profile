console.log("1.Create the Object--->bankSBI with literls.");
console.log("2.Create the Object-->bank location with properties street,city,pin");
console.log("3.Close bankSBI and banklocation object using 'Object.assign()' method and log");

const bankSbi={
 BankName:"SBI",
 Branch:"Wakad",
 AccountNo:123456,
 Location:"Hinjawadi"
 
}
console.log(bankSbi);
const bankLocation={
    street:"Wakad",
    city:"Pune",
    pin:411057,
}
console.log(bankLocation);
//
const merged_obj=Object.assign({},bankSbi,bankLocation);
console.table(merged_obj);

const rateOfInterest={
    homeLoanInterest:10.00,
    personalLoanInterest:3.00,
    dueInterest:4.00

}
console.log(rateOfInterest);
const sbiDetails=Object.assign({},bankSbi,bankLocation,rateOfInterest);
console.log("Merging the step1, step2 and step 4 objects into new Object sbiDetails");
console.log(sbiDetails);
console.log("6.Traverse this merged object using for in loop");

for(let i in sbiDetails)

console.log(sbiDetails);
