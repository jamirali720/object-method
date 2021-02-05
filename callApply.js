const normalPerson = {
    firstName : 'Rahim',
    lastName : 'uddin',
    salary : 15000,
    getFullName : function(){
        console.log(this.firstName, this.lastName)
    },
    chargeBill : function(amount, tips, tax){
        this.salary = this.salary- amount - tips - tax;
        return this.salary;
    }
}
// normalPerson.chargeBill(200);
// normalPerson.chargeBill(5000)
// console.log(normalPerson.salary);




const adamAli = {
    name: 'adam ali',
    id: 121,
    phone : 01814245427,
    salary : 15000,

    billCharge : function(){
        var vat = this.salary * 0.15;           // vat is to inserted into  function not out of the function;
        this.salary = this.salary - vat;
      
       
    }
}
// adamAli.billCharge()
// console.log(adamAli.salary)





const heroPerson  = {
    firstName : 'Jamir ',
    lastName : 'Ali',
    salary : 25000, 
}


// const heroMan1  =  adamAli.billCharge.bind(heroPerson);
// heroMan1()
// console.log(heroPerson.salary)



// const heroMan = normalPerson.chargeBill.bind(heroPerson);
// heroMan(5000)
// console.log(heroPerson.salary)

const hubbyPerson  = {
    firstName : 'samsul ', 
    lastName : 'alam',
    salary : 30000,
}
 normalPerson.chargeBill.call(hubbyPerson, 5000, 500, 50)  // this is call method   with more than one arguments;
 console.log(hubbyPerson.salary)

 adamAli.billCharge.call(y=hubbyPerson)
 console.log(hubbyPerson.salary)

 const happyPerson = {
     firstName : 'ashraful ',
     lastName : 'Islam', 
     salary : 15000,
 }

 normalPerson.chargeBill.apply(happyPerson,[5000, 500, 50])   // this is apply method  define with [] after first argument;
 console.log(happyPerson.salary)