const btn = document.getElementById("submit");

btn.addEventListener("click", function() {
    const email = document.getElementById("email-input").value;
    const pass = document.getElementById("pass-input").value;

    if (email === "AdminSEF123" && pass === "SeF@ctORy$$456") {
        window.location.href = "./todo.html";
        
    } else {
        alert('Invalid email or password. Please try again.');
    }
    
});

// const bttn = document.getElementById("bttn")

// bttn.addEventListener("click", function(){
//     const element = ``
// })

