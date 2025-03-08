// Modal Control
function showLogin() {
    document.getElementById("auth-modal").style.display = "block";
    document.getElementById("auth-title").textContent = "Login";
}

function showSignup() {
    document.getElementById("auth-modal").style.display = "block";
    document.getElementById("auth-title").textContent = "Sign Up";
}

function closeModal() {
    document.getElementById("auth-modal").style.display = "none";
}

// Authentication Logic
let users = [];

function authenticateUser() {
    const username = document.getElementById("username").value;
    if (!username) return alert("Enter a valid username");

    localStorage.setItem("currentUser", username);
    document.getElementById("user-name").textContent = username;
    document.getElementById("profile-name").textContent = username;

    document.getElementById("auth-modal").style.display = "none";
    document.querySelector(".nav-right").style.display = "none";
    document.getElementById("dashboard").classList.remove("hidden");
}

// Logout Function
function logout() {
    localStorage.removeItem("currentUser");
    document.getElementById("dashboard").classList.add("hidden");
    document.querySelector(".nav-right").style.display = "flex";
}

// Auto-login if user exists
window.onload = function () {
    const user = localStorage.getItem("currentUser");
    if (user) {
        document.getElementById("user-name").textContent = user;
        document.getElementById("profile-name").textContent = user;
        document.querySelector(".nav-right").style.display = "none";
        document.getElementById("dashboard").classList.remove("hidden");
    }
};



// Show login form
function showLogin() {
    document.getElementById("loginForm").style.display = "block";
}

// Login function
function login() {
    let username = document.getElementById("username").value;
    
    if (username) {
        document.getElementById("user-name").innerText = username;
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
    } else {
        alert("Please enter a username.");
    }
}

// Logout function
function logout() {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("loginForm").style.display = "none";
}
