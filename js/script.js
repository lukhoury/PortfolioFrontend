


/*script login*/


var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "usuario" && password == "contraseña"){

window.location = "indexLogin.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}


/*fin script login */


var app = new Vue({
  el: '#form1',
  data: function () {
    return {
    email : "",
    emailBlured : false,
    valid : false,
    submitted : false,
    password:"",
    passwordBlured:false
    }
  },

  methods:{

    validate : function(){
this.emailBlured = true;
this.passwordBlured = true;
if( this.validEmail(this.email) && this.validPassword(this.password)){
this.valid = true;
}
},

validEmail : function(email) {
   
var re = /(.+)@(.+){2,}\.(.+){2,}/;
if(re.test(email.toLowerCase())){
  return true;
}

},

validPassword : function(password) {
   if (password.length > 7) {
    return true;
   }
},

submit : function(){
this.validate();
if(this.valid){
this.submitted = true;
}
}
  }
});