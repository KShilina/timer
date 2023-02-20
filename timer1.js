// Implement an alarm clock / timer which will beep after a specified amount of time has passed.
// The user can specify an unlimited number of alarms using command line arguments

//get a command line arguments
const args = process.argv.slice(2);
console.log(args);
//to loop through an array by using the forEach method we need a callback function (or anonymous function):
//The function will be executed for every single element of the array. It must take at least one parameter which represents the elements of an array:
args.forEach((arg) => {
  //to convert the inputs to numbers
  const time = Number(arg);
  // If the input is not a number or not positive, skip it
  if (time <= 0 || isNaN(time)) {
    console.log(`${arg} is not a number.`);
    return;
  }
  // Set a timer for the specified time before beeping
  setTimeout(() => {
    // Beep sound
    process.stdout.write("\x07");
    //beep sound is not working
    console.log(`The ${time} seconds beepping!`);
  }, time * 1000);
});
