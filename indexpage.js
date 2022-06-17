let slideIndex = [1,1];
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}

function gotoOrder(){
  window.location.href="order_medicines.html";
}
function gotocart(){
  window.location.href="cart.html";
}
function gotoSignup(){
  window.location.href="signup.html"
}
var isCheck = localStorage.getItem("customerData");
if(isCheck.length ==0)
{
  document.getElementById("changeLogin").innerText="Login/Signup";
}
else{
  document.getElementById("changeLogin").innerText="User";
}