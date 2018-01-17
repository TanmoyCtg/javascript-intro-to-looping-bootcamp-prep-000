function forLoop(array){
  for(let i = 0; i< 25;i++){
    if (i === 1){
      console.log("I am " + i + " strange loop.")
    }
    else{
      console.log("I am ${i} strange loops.")
    }
  }
  return array;
}
function whileLoop(n) {
  countdown = 0
  while (countdown < n){
    console.log(countdown++)
  }
  return "done"
}
function maybeTrue() {
  return false
}
function doWhileLoop(array) {
  do {

  } while (array.length>0 && maybeTrue());
}
