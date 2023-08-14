// const wrapper = document.querySelector('.wrapper')
// const registerLink = document.querySelector('.register-link')
// const loginLink = document.querySelector('.login-link')
// const btnPopup = document.querySelector('.btnLogin-popup')
// const iconClose = document.querySelector('.icon-close')

// // Login & Registration 

// registerLink.addEventListener('click', ()=>{
//     wrapper.classList.add("active");
// })
// loginLink.addEventListener('click', ()=>{
//     wrapper.classList.remove("active");
// })
// btnPopup.addEventListener('click', ()=>{
//     wrapper.classList.add('active-Popup')
// })
// iconClose.addEventListener('click', ()=>{
//     wrapper.classList.remove('active-Popup')
// })


// // Eye icons

// // const passwordToggles = document.querySelectorAll('.closeEye');

// passwordToggles.forEach(toggle => {
//   toggle.addEventListener('click', function() {
//     const inputBox = toggle.closest('.input-box');
//     const passwordInput = inputBox.querySelector('.password');
//     if (passwordInput.type === 'password') {
//       passwordInput.type = 'text';
//       toggle.src = 'eye-open.png';
//     } else {
//       passwordInput.type = 'password';
//       toggle.src = 'eye-closed.png';
//     }
//   });
// });

// // Eye icons in jQuery

// // $(document).ready(function() {
// //   $('.closeEye').on('click', function() {
// //     var toggle = $(this);
// //     var inputBox = toggle.closest('.input-box');
// //     var passwordInput = inputBox.find('.password');
    
// //     if (passwordInput.attr('type') === 'password') {
// //       passwordInput.attr('type', 'text');
// //       toggle.attr('src', 'eye-open.png');
// //     } else {
// //       passwordInput.attr('type', 'password');
// //       toggle.attr('src', 'eye-closed.png');
// //     }
// //   });
// // });


// // (login)

// // Function to store registration data in localStorage
//   function registerUser(username, email, password) {
//     const newUser = {
//       username: username,
//       email: email,
//       password: password
//     };
//     localStorage.setItem(email, JSON.stringify(newUser));
//   }

// // Function to check login credentials and log the user in
//   function loginUser(email, password) {
//     const userData = localStorage.getItem(email);
//     if (userData) {
//       const user = JSON.parse(userData);
//       if (user.password === password) {
//         alert('Login successful!');
//         // Perform additional actions for a successful login
//       } else {
//         alert('Incorrect password. Please try again.');
//       }
//     } else {
//       alert('User not found. Please register.');
//     }
//   }
  
//   // Event listener for registration form submission
//   const regForm = document.querySelector('.register form');
//   regForm.addEventListener('submit', function(event) {
//     event.preventDefault();
//     const username = document.getElementById('userName').value;
//     const email = document.getElementById('email').value;
//     const password = document.querySelector('.register .password').value;
//     registerUser(username, email, password);
//     alert('Registration successful! You can now log in.');
//     regForm.reset();
//   });
  
//   // Event listener for login form submission
//   const loginForm = document.querySelector('.login form');
//   loginForm.addEventListener('submit', function(event) {
//     event.preventDefault();
//     const email = document.querySelector('.login input[type="email"]').value;
//     const password = document.querySelector('.login .password').value;
//     loginUser(email, password);
//     loginForm.reset();
//   });
  

$(document).ready(function() {
  const wrapper = $('.wrapper');
  const registerLink = $('.register-link');
  const loginLink = $('.login-link');
  const btnPopup = $('.btnLogin-popup');
  const iconClose = $('.icon-close');

  registerLink.on('click', () => {
    wrapper.addClass("active");
  });

  loginLink.on('click', () => {
    wrapper.removeClass("active");
  });

  btnPopup.on('click', () => {
    wrapper.addClass('active-Popup');
  });

  iconClose.on('click', () => {
    wrapper.removeClass('active-Popup');
  });

  $('.closeEye').on('click', function() {
    var toggle = $(this);
    var inputBox = toggle.closest('.input-box');
    var passwordInput = inputBox.find('.password');

    if (passwordInput.attr('type') === 'password') {
      passwordInput.attr('type', 'text');
      toggle.attr('src', 'eye-open.png');
    } else {
      passwordInput.attr('type', 'password');
      toggle.attr('src', 'eye-closed.png');
    }
  });

  function registerUser(username, email, password) {
    const newUser = {
      username: username,
      email: email,
      password: password
    };
    localStorage.setItem(email, JSON.stringify(newUser));
  }

  function loginUser(email, password) {
    const userData = localStorage.getItem(email);
    if (userData) {
      const user = JSON.parse(userData);
      if (user.password === password) {
        alert('Login successful!');
        // Perform additional actions for a successful login
      } else {
        alert('Incorrect password. Please try again.');
      }
    } else {
      alert('User not found. Please register.');
    }
  }

  $('.register form').on('submit', function(event) {
    event.preventDefault();
    const username = $('#userName').val();
    const email = $('#email').val();
    const password = $('.register .password').val();
    registerUser(username, email, password);
    alert('Registration successful! You can now log in.');
    $(this)[0].reset();
  });

  $('.login form').on('submit', function(event) {
    event.preventDefault();
    const email = $('.login input[type="email"]').val();
    const password = $('.login .password').val();
    loginUser(email, password);
    $(this)[0].reset();
  });
});