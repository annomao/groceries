let btn = document.getElementById("enter");
 
function displayGroceries(){
  const items = document.getElementById("item").value;
  itemSplits = items.split(",");
  groceries = itemSplits.map(item => item.trim())
  groceries = groceries.sort();
  let list = document.getElementById("item-list");
  for (let i = 0; i < groceries.length; i++) {
    let li = document.createElement("li");
    li.innerText = groceries[i];
    list.appendChild(li);
  }
}

btn.addEventListener('click' , displayGroceries);
btn.addEventListener("click", function(event){
  event.preventDefault()
 })