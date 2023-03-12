class Vehicle{
    constructor(make,model,color,price){
        this.make=make;
        this.model=model;
        this.color=color;
        this.price=price;

    }
}
console.log("1.========================Vehicle Information using constructor====================="); 
const toyota= new Vehicle("Toyota","Corolla","Black",3500000);
 console.log(toyota);

 const hyundai= new Vehicle("Hyundai","Kiya","White",1000000);
 console.log(hyundai);

 const maruti= new Vehicle("Maruti Suzuki","Swift","Red",800000);
 console.log(maruti);


 console.log(" 2.==================Using Traverse============");

 let toyotaCar={
    color:'black',
    make:'toyota',
    model:'corolla',
    price:3500000,
 }
 let hyundaiCar={
    color:'black',
    make:'Hyundai',
    model:'Kiya',
    price:1000000,
 }
 let marutiCar={
    color:'black',
    make:'Ford',
    model:'Fiesta',
    price:600000,
 }
 

 const arrayOfVehicles=[toyotaCar,hyundaiCar,marutiCar];

 
for (let index = 0; index < arrayOfVehicles.length; index++) {
    const element = arrayOfVehicles[index];
    console.log(`${element.color}, ${element.make}, ${element.model},${element.price}`);


}


class College{
    constructor(location,name,university,depts,grade){
        this.location=location;
        this.name=name;
        this.university=university;
        this.depts=depts;
        this.grade=grade;

    }
}
console.log("1.=======================College Information using constructor====================="); 
const SSAC= new College("Chadachan","SSAC","Rani Channamma University",7,"A");
 console.log(SSAC);

 const KCP= new College("Vijayapur","KCP","VTU University",5,"A+");
 console.log(KCP);

 const Darbar= new College("Vijayapur","Darbar","Rani Channamma University",2,"B");
 console.log(Darbar);



 
 let collegeSSAC={
    location:"Chadachan",
    name:'SSAC',
    university:'Rani Channamma University',
    depts:7,
    grade:"A",
 }
 let collegeKCP={
    location:"Vijayapur",
    name:'KCP',
    university:'VTU University',
    depts:5,
    grade:"A+",
 }
 let collegeDarbar={
    location:"Vijayapur",
    name:'Darbar',
    university:'Rani Channamma University',
    depts:2,
    grade:"B",
 }
 

 const college=[collegeSSAC,collegeKCP,collegeDarbar];

 
for (let index = 0; index < college.length; index++) {
    const element = college[index];
    console.log(`${element.location},${element.name}, ${element.university}, ${element.depts},${element.grade}`);


}

console.log("=======Given number is prime number or not=================");
function primeNumber(n){

     if(n<=1)
     return false;
    
    
        for(let index=2;index<n;index++)
        if(n%index==0)
        return false;
        
    return n;
}

var result=primeNumber(11);
console.log(`Given number is prime number:${result}`);

