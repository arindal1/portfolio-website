function redirectToOtherSite() {
    window.location.href = 'https://example.com'; // Replace with your desired URL
}

// Attach the function to the button
const redirectButton = document.getElementById('redirectButton');
redirectButton.addEventListener('click', redirectToOtherSite);
