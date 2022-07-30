// the count variale is in place as the starting number 
let count = 0


// we will grab the id 'increaseBtn' from our html and use the onlick eventListner to show the action made when button is clicked
document.getElementById('increaseBtn').onclick = function() {
    count++
    userDisplay()
}

// we will grab the id 'decreaseBtn' from our html and use the onlick eventListner to show the action made when button is clicked
document.getElementById('decreaseBtn').onclick = function() {
    count--
    userDisplay()
}
// this function will update the count display
function userDisplay(){
    document.getElementById('countLabel').innerHTML = count
}

// run program and watch numbers increment or decrement 