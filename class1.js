class Person{
    constructor (name, dob) {
    this.name=name;
    this.dob=dob;
    }
    getAge() {
    let today=new Date();
    let birthdate=new Date(this.dob);
    let age= today.getFullYear()-birthdate.getFullYear();
    return age 
    }
    }
    let person2= new Person("Kashmala", "2011-02-02")
    console.log("My name is " +person2.name+" and my age is "+person2.getAge())


    class Car{

        constructor(brand, model, year){
        
        this.brand= brand;
        
        this.model=model;
        
        this.year=year;
        
        }
        
        start(){
        
        console.log("Car started");
        
        }
        
        stop(){
        
        console.log("Car stopped")
        
        }
        
        }
        
        class superCar extends Car{
        
        constructor(brand, model, year, topSpeed){
        
        super(brand, model, year);
        
        this.topSpeed=topSpeed;
        
        }
        
        nitroboost(){
        
        console.log("Nitroboost activated")
        
        }
        
        }
        
        let car1=new Car("Tata","Nexon",2023);
        
        let supercar1=new superCar("Audi","RS5", 2024, 350);
        
        car1.start();
        
        supercar1.stop();
        
        supercar1.nitroboost();