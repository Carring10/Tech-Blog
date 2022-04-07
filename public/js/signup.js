function signUpForm(event) {
  event.preventDefault();

  const username = document.getElementById('signup-username').value.trim();
  const password = document.getElementById('signup-password').value.trim();

  if (username && password) {
    fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      console.log(response)
    })
  }
}

document.querySelector('.signup-form').addEventListener('submit', signUpForm);