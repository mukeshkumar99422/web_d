//declaring constants
// you can NOT:
    // Reassign a constant value
    // Reassign a constant array
    // Reassign a constant object

// But you CAN:
    // Change the elements of constant array
    // Change the properties of constant object
const accountId=144553
//declaring variables(prefer to use let(local variable))
let accountState;
let accountEmail="hitesh@google.com"   //functional scope     
var accountPassword="1234"             //block scope
//we can declare variables like this(prefer not to use this)
accountCity="jaipur"

// accountId=2     //constant change not allowed
console.log(accountId);

accountEmail="mukeshkumargoogle.com"
accountPassword="212121"
accountCity="benglore"
//print in tabular form(multiple variables at once)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])