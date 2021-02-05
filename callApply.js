const normalPerson = {
    firstName : 'Rahim',
    lastName : 'uddin',
    salary : 15000,
    getFullName : function(){
        console.log(this.firstName, this.lastName)
    },
    chargeBill : function(amount){
        this.salary = this.salary- amount;
        return this.salary;
    }
}
normalPerson.chargeBill(200);
normalPerson.chargeBill(5000)
console.log(normalPerson.salary);




const adamAli = {
    name: 'adam ali',
    id: 121,
    phone : 01814245427,
    salary : 15000,

    billCharge : function(){
        var vat = this.salary * 0.15;
        this.salary = this.salary - vat;
      
       
    }
}
adamAli.billCharge()
console.log(adamAli.salary)





const heroPerson  = {
    firstName : 'Jamir ',
    lastName : 'Ali',
    salary : 25000, 
}


const heroMan1  =  adamAli.billCharge.bind(heroPerson);
heroMan1()
console.log(heroPerson.salary)



const heroMan = normalPerson.chargeBill.bind(heroPerson);
heroMan(5000)
console.log(heroPerson.salary)