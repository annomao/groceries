//get button element
let btn = document.getElementById("enter");
let btnReset = document.getElementById("reset-btn")

function displayGroceries(){
  const items = document.getElementById("item").value;
  itemSplits = items.split(","); //splits input

  //remove white space
  groceries = itemSplits.map(item => item.trim());

  //sort list
  groceries = groceries.sort();

  //create list item
  let list = document.getElementById("item-list");
  for (let i = 0; i < groceries.length; i++) {
    let li = document.createElement("li");
    li.innerText = groceries[i];
    list.appendChild(li);
  }
}
//checks to see if list has items and deletes item if true
function removeList() {
  const list = document.getElementById("item-list");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}

btn.addEventListener('click' , displayGroceries);
btn.addEventListener("click", function(event){
  event.preventDefault()
 })
btnReset.addEventListener("click", removeList);