function redirectToOtherSite() {
    window.location.href = 'file:///E:/Source%20Codes/WebDev/Vanilla%20Projects/Website2.0/index.html'; // Replace with your desired URL
}

// Attach the function to the button
const redirectButton = document.getElementById('redirectButton');
redirectButton.addEventListener('click', redirectToOtherSite);
