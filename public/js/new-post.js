function newPostForm(event) {
  event.preventDefault();

  const title = document.getElementById('title').value.trim();
  const description = document.getElementById('description').value.trim();

  if (title && description) {
    fetch('/dashboard', {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      if (response.ok) {
        document.location.replace('/dashboard');
      } 
    })
  }
}

document.querySelector('.newpost-form').addEventListener('submit', newPostForm);