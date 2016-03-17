var password = '54321';
//======= Conditional Statements =======

// if statement
if (password == 54321) {
  console.log("The condition is true.");
};

//if else statement
if (password === 54321 ) {
  console.log("The condition is true.");
} 
else {
  console.log("The condition is false.");
};

//else if statement
if (password === 54321) {
  console.log('The first condition is true.');
} 
else if (password == '54321') {
  console.log('The second condition is true.');
} 
else {
  console.log('The conditions are false.');
};

//======= Switch Statement =======
var password = 543214,
    username = 'cond-log';
switch (true) {
  case (password == 54321 && username == 'cond-log') :
    console.log('You have entered a correct login credentials');
    break;
  case (password == 54321 && username != 'cond-log') :
    console.log('Please check your username');
    break;
  case (password != 54321 && username == 'cond-log') :
    console.log('Please check your password');
    break;
  case (password != 54321 && username != 'cond-log') :
    console.log('You have entered both password and username wrong');
    break;
}
//
