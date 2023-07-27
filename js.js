window.addEventListener("DOMContentLoaded", (event) => {

// album page js

      // Handle form submission
      document.getElementById('UserInfoForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Store form data in session storage

        if (document.getElementById('20x20').checked) {
        sessionStorage.setItem('20x20','20x20cm');
        } else {
          sessionStorage.setItem('20x20','false');

        }
        if (document.getElementById('30x30').checked) {
        sessionStorage.setItem('30x30','30x30cm');
        } else {
          sessionStorage.setItem('30x30','false');

        }
        if (document.getElementById('30x40').checked) {
        sessionStorage.setItem('30x40','30x40cm');
        } else {
          sessionStorage.setItem('30x40','false');

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
        window.location.href = 'checkout.html';
      });

// album page js          
  });
