let btn = document.getElementById("enter");
 
function displayGroceries(){
  const items = document.getElementById("item").value;
  itemSplits = items.split(",");
  groceries = itemSplits.map(item => item.trim())
  groceries = groceries.sort();
  for (let i = 0; i < groceries.length; i++) {
    console.log(groceries[i]); 
  }
}

btn.addEventListener('click' , displayGroceries);
btn.addEventListener("click", function(event){
  event.preventDefault()
})