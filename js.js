window.addEventListener("DOMContentLoaded", (event) => {

// album page js

      // Handle form submission
      // Store form data in session storage
      document.getElementById('UserInfoForm').addEventListener('submit', function(e) {
        e.preventDefault();

        var form = document.getElementById("UserInfoForm");
      var selectedOptions = [];

      // Loop through each checkbox
      var checkboxes = form.getElementsByTagName("input");
      for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].type === "checkbox" && checkboxes[i].checked) {
          selectedOptions.push(checkboxes[i].value);
          sessionStorage.setItem('sizes', selectedOptions);
        }
      }
      if(document.getElementById('cover').checked) {
        sessionStorage.setItem('coverOption', '+ Couverture')
  }
        
        sessionStorage.setItem('file', document.getElementById('formFileLg').value);
        sessionStorage.setItem('name', document.getElementById('name').value);
        sessionStorage.setItem('email', document.getElementById('email').value);
        sessionStorage.setItem('phone', document.getElementById('phone').value);
        sessionStorage.setItem('adresse', document.getElementById('adresse').value);
    
        // Redirect to next page
        window.location.assign('checkout.html');
      });

// album page js   


  });
