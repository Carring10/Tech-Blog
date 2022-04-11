function addComment(event) {
  event.preventDefault();

  const id = window.location.pathname.replace('/comment/', '');
  const text = document.getElementById('comment-input').value.trim();

  if (text) {
    fetch(`${id}`, {
      method: 'POST',
      body: JSON.stringify({ text }),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      console.log(response);
    })
  }
}

document.getElementById('comment-form').addEventListener('submit', addComment);