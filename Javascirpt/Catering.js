function validateForm() {
    
     var fname = document.getElementById("fname").value;
   
     var lname = document.getElementById("lname").value;
    
     var email = document.getElementById("email").value;

     var Subject = document.getElementById("Subject").value;
 
    if (fname == null || fname == "") {
        alert("First name must be filled out");
        return false;
    } else if (sname == null || sname == "") {
        alert("Last name must be filled out");
        return false;
    } else if (email == null || email == "") {
        alert("Email must be filled out");
      return false;
    }
  alert('Thank you,  redirect to http://127.0.0.1:5500/HomeLayout.html');
  window.location.href = "http://127.0.0.1:5500/HomeLayout.html";
}