// Function to validate URL using regular expression
function isValidURL(url) {
    var urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(url);
  }
  
  // Function to generate QR code based on user input
  function generateQR() {
    // Get the value of the input field and trim any leading or trailing whitespace
    var url = document.getElementById("urlInput").value.trim();
    // Get the error message div element
    var errorMessageDiv = document.getElementById("errorMessage");
  
    // Check if the input field is not empty
    if (url !== "") {
      // If the URL is valid
      if (isValidURL(url)) {
        // Get the QR code div element
        var qrCodeDiv = document.getElementById("qrcode");
        // Clear any previous content inside the QR code div
        qrCodeDiv.innerHTML = "";
        // Generate a new QR code based on the URL
        new QRCode(qrCodeDiv, url);
        // Clear any previous error message if URL is valid
        errorMessageDiv.textContent = "";
      } else {
        // If the URL is not valid, display an error message
        errorMessageDiv.textContent = "Please enter a valid URL. Like https://www.google.com/";
      }
    } else {
      // If the input field is empty, display an error message
      errorMessageDiv.textContent = "Please enter a URL.";
    }
  }
  