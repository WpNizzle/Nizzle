document.addEventListener("DOMContentLoaded", function() {
    const subscribersList = document.getElementById("subscribers-list");
  
    // Retrieve emails from local storage
    const storedEmails = JSON.parse(localStorage.getItem("newsletterEmails")) || [];
  
    // Populate the subscribers list with the retrieved emails
    storedEmails.forEach(function(email) {
      const listItem = document.createElement("li");
      listItem.textContent = email;
      subscribersList.appendChild(listItem);
    });
  });
  