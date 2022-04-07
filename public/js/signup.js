function signUpForm(event) {
  event.preventDefault();

  const email = document.getElementById('signup-email').value.trim();
  const username = document.getElementById('signup-username').value.trim();
  const password = document.getElementById('signup-password').value.trim();

  if (email && username && password) {
    fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      console.log(response)
    })
  }
}

document.querySelector('.signup-form').addEventListener('submit', signUpForm);