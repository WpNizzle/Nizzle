document.addEventListener("DOMContentLoaded", function() {
    const newsletterForm = document.getElementById("newsletter-form");
    const emailInput = document.getElementById("email");
  
    newsletterForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // Get the email value
      const email = emailInput.value;
  
      // Retrieve existing emails from local storage
      const storedEmails = JSON.parse(localStorage.getItem("newsletterEmails")) || [];
  
      // Add the new email to the array
      storedEmails.push(email);
  
      // Save the updated array back to local storage
      localStorage.setItem("newsletterEmails", JSON.stringify(storedEmails));
  
      // Clear the input field
      emailInput.value = "";
  
      alert("Thank you for subscribing!");
    });
  });
  