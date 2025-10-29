function login() {
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let msg = document.getElementById("msg");

    // Demo credentials
    const correctPhone = "9999999999";
    const correctPassword = "ola123";

    if (phone === correctPhone && password === correctPassword) {
        msg.style.color = "green";
        msg.innerHTML = "Login Successful ✅";

        // Redirect to homepage after login
        setTimeout(() => {
            window.location.href = "home.html"; // you can create this page later
        }, 1000);

    } else {
        msg.style.color = "red";
        msg.innerHTML = "Invalid Login ❌";
    }
}
