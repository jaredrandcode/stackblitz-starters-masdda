console.log('Hello!');
function todaysDate(){
const d=new Date();
return "todays date is "+d
}
console.log(todaysDate())
const body = document.body
const d = new Date();
if (d.getHours() > 20 || d.getHours()< 8){
    body.style["backgroundColor"] = "black";
    body.style["color"] = "white";
} else {
    body.style["backgroundColor"] = "white";
    body.style["color"] = "black";
}