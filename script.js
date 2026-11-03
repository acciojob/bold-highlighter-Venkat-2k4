
const changes = document.querySelectorAll("strong")
function highlight() {
    //Write your code here
	changes.forEach((change)=>{
        change.style.color= 'rgb(0, 128, 0)'
            })
}
function return_normal() {
    //Write your code here
	changes.forEach((change)=>{
        change.style.color="black"
            })
	

    
}
