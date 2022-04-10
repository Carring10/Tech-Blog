function editPostForm(event) {
  event.preventDefault();

  const id = window.location.pathname.replace('/dashboard/', '');
  const title = document.getElementById('edit-title').value.trim();
  const description = document.getElementById('edit-description').value.trim();

  if (title && description) {
    fetch(`/dashboard/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, description }),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      if (response.ok) {
        document.location.replace('/dashboard');
      } 
    })
  }
}

document.querySelector('.edit-post-form').addEventListener('submit', editPostForm);