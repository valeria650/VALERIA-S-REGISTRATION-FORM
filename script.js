    document.getElementById("registrationForm").addEventListener("submit", function(e) {
      e.preventDefault();

      let valid = true;

      // Name
      const name = document.getElementById("name").value.trim();
      if (name === "") {
        showError("nameError", "Please enter your name");
        valid = false;
      } else hideError("nameError");

      // Email
      const email = document.getElementById("email").value.trim();
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        showError("emailError", "Please enter a valid email");
        valid = false;
      } else hideError("emailError");

      // Password
      const password = document.getElementById("password").value.trim();
      if (password.length < 6) {
        showError("passwordError", "Password must be at least 6 characters");
        valid = false;
      } else hideError("passwordError");

      // Confirm Password
      const confirmPassword = document.getElementById("confirmPassword").value.trim();
      if (confirmPassword !== password) {
        showError("confirmPasswordError", "Passwords do not match");
        valid = false;
      } else hideError("confirmPasswordError");

      // Mobile
      const mobile = document.getElementById("mobile").value.trim();
      if (mobile === "" || isNaN(mobile)) {
        showError("mobileError", "Please enter a valid mobile number");
        valid = false;
      } else hideError("mobileError");

      // Language
      const language = document.getElementById("language").value;
      if (language === "") {
        showError("languageError", "Please select a language");
        valid = false;
      } else hideError("languageError");

      // Attachment
      const attachment = document.getElementById("attachment").value;
      if (attachment === "") {
        showError("attachmentError", "Please upload a file");
        valid = false;
      } else hideError("attachmentError");

      // Gender
      const gender = document.querySelector('input[name="gender"]:checked');
      if (!gender) {
        showError("genderError", "Please select your gender");
        valid = false;
      } else hideError("genderError");

      // Terms
      const terms = document.getElementById("terms").checked;
      if (!terms) {
        showError("termsError", "You must accept the terms");
        valid = false;
      } else hideError("termsError");

      if (valid) {
        alert("Registration successful!");
        this.reset();
      }
    });

    function showError(id, message) {
      const element = document.getElementById(id);
      element.style.display = "block";
      element.textContent = message;
    }

    function hideError(id) {
      const element = document.getElementById(id);
      element.style.display = "none";
    }