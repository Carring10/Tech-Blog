function loginForm(event) {
  event.preventDefault();

  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value.trim();

  if (username && password) {
    fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      console.log(response)
    })
  }
}

document.querySelector('.login-form').addEventListener('submit', loginForm);