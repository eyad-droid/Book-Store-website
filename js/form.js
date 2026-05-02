
document.querySelector(".contact-form").addEventListener("submit", function(e){

    e.preventDefault();

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("Lname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let recommendations = document.getElementById("Recommendations").value;

    localStorage.setItem("fname", fname);
    localStorage.setItem("lname", lname);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("recommendations", recommendations);

    alert("Data Saved Successfully");

    document.querySelector(".contact-form").reset();

});