let btn = document.getElementById("enter");
 
function displayGroceries(){
  let items = document.getElementById("item").value;
  groceries = items.split(",");
  for (let index = 0; index < groceries.length; index++) {
    console.log(groceries[index].trim()); 
  }
}

btn.addEventListener('click' , displayGroceries);
btn.addEventListener("click", function(event){
  event.preventDefault()
})