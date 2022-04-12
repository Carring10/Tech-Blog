function logout(event) {
  event.preventDefault();

    fetch('/api/users/logout', {
      method: 'DELETE',
    }).then((response) => {
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log out.');
      }
    });
  };

  document.querySelector('#logout').addEventListener('click', logout);