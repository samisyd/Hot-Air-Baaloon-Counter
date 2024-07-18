
/* document.write("This is JS code"); */
// document.getElementById("count").innerText = 5

//initialize the count as 0
let count= 0;
let countEl = document.getElementById("count-el")
//console.log(countEl)

//listen for clicks on the increment button
function increment(){
    
    // increment the count variable when the button is clicked
    count += 1
    // change the count-el in the HTML to reflect the new count
    countEl.textContent = count
    countEl.textContent += "😀"
}

// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")

// 1. Create a function,  save() , which logs the count when its called
function save() {
    
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let currCt = count + " - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += currCt
    count = 0
    countEl.textContent = count
    // NB: Make sure to not delete the existing content of the paragraph

}  







