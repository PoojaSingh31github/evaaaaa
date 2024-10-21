document.addEventListener('DOMContentLoaded', checkLoginStatus);

function checkLoginStatus() {
  if (localStorage.getItem('user')) {
    window.location.href = 'index.html'; 
  }
}
function signup(event) {
  event.preventDefault();
  
  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;

  let users = JSON.parse(localStorage.getItem('users')) || [];
  if (users.some(user => user.email === email)) {
    alert('Email already exists. Please use another email.');
    return;
  }
  users.push({name, email, password });
  localStorage.setItem('users', JSON.stringify(users));
  alert('Signup successful! Please log in.');
  window.location.reload();
}

function login(event) {
  event.preventDefault();

  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  let users = JSON.parse(localStorage.getItem('users')) || [];
  let user = users.find(user => user.email === email && user.password === password);

  if (user) {
    localStorage.setItem('user', JSON.stringify(user));
    window.location.href = 'index.html'; 
  } else {
    alert('Invalid email or password. Please try again.');
  }
}

function showSignup() {
  document.getElementById('signup').classList.remove('hidden');
  document.getElementById('login').classList.add('hidden');
}
