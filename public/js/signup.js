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
      if (response.ok) {
        document.location.replace('/dashboard');
      } 
    })
  }
}

document.querySelector('.signup-form').addEventListener('submit', signUpForm);