document.getElementById("submit-btn").addEventListener("click", function () {
    const email = document.getElementById("user-email");
    const pass = document.getElementById("user-pass");
    // console.log(email.value, pass.value);
    if (email.value == "admin@gmail.com" && pass.value == "admin07") {
        // console.log("Valid user!");
        window.location.href = "bank.html";
    }
});
