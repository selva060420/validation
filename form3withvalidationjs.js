var form= document.getElementById('form');
var Firstname= document.getElementById('firstname');
var Email= document.getElementById('email');
var Phone= document.getElementById('phone');
var Choose= document.getElementById('choose');
var Help= document.getElementById('large');
 

var whole =[Firstname,Email,Phone,Choose,Help];
var wholename=["Firstname",  "Email" , "Phone No." ," Choose" ,"Help"];
document.getElementById("submit").addEventListener("click",(e) => {
e.preventDefault();
checkInputs();
});


function checkInputs(){

var Firstnamevalue=Firstname.value.trim();
var Emailvalue=Email.value.trim();
var Phonevalue=Phone.value.trim();
var Choosevalue=Choose.value.trim();
var Helpvalue=Help.value.trim();
  
var value =[Firstnamevalue ,Emailvalue ,Phonevalue ,Choosevalue ,Helpvalue];

for(var i=0;i<5;i++){
if(value[i] === ''){
setErrorFor( whole[i] , wholename[i]+ " " + "cannot be blank")
}else{
setSuccessFor(whole[i]);
}
}


if(Firstnamevalue != '' & Emailvalue != '' & Phonevalue != '' & Helpvalue != '' & Choosevalue != '' )
{
document.getElementById('submit').onclick = function(){
location.href="file:///C:/Users/Indhumathi/Desktop/w3%20image.png"};
document.getElementById('ends').innerHTML="Thanks for submitting!";
}


}

function setErrorFor(input,message){
const formcontrol= input.parentElement;
const small= formcontrol.querySelector('small');
small.innerText= message;
formcontrol.className='text1 error';
document.getElementById('ends').innerHTML="Enter All The Mandatory Needs!";
}
function setSuccessFor(input){
const formcontrol= input.parentElement;
formcontrol.className='text1 success'; 
}

