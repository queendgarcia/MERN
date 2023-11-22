//class behaves almost similar to what we have in java/ C#

class Account {
  constructor(accName, accBal){
      this.AccountName = accName
      this.AccountBalance = accBal
  }

  getAccountDetails = function () {
      return `Account Details are ${this.AccountName } and ${this.AccountBalance }`
  }

  getDetails = () => `Account Details are ${this.AccountName } and ${this.AccountBalance }`
  
}

let accObj = new Account("Khan", "$120000")

console.log(accObj.getAccountDetails())
console.log(accObj.getDetails())


//Question : create a class to calculate area of anything - rectangle, circle, one object of your choice