
const changes = document.querySelectorAll("strong")
function highlight() {
    //Write your code here
	changes.forEach((change)=>{
        change.style.color="blue"
            })
}
function return_normal() {
    //Write your code here
	changes.forEach((change)=>{
        change.style.color="black"
            })
	

    
}
