// Task-1 -

// Function with a required argument > name
function MyName(name) {
  console.log("Hello", name);
}

// Function with a default argument > Surbhi
function MyDefaultName(name = "Surbhi") {
  console.log("Hello", name);
}

// Function calling the first two functions > MyName and MyDefaultName
function callBothFunctions() {
  MyName("Jaime"); // Calling the first function with a name argument
  MyDefaultName(); // Calling the second function without sending any argument
}

// Calling the function that calls both the above functions
callBothFunctions();
