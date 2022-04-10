// Take in input from form to be sent to post request.
function createPost(event) {

  const title = document.getElementById('eventName').value.trim();
  const description = document.getElementById('eventDesc').value.trim();
  const day_and_time = document.querySelector('#dateTime').value;
  if (event.target.matches(".createEvent")) {
    if (title && description && day_and_time) {
      fetch('/api/events', {
        method: 'POST',
        body: JSON.stringify({ title, description, day_and_time }),
        headers: { 'Content-Type': 'application/json' },
      }).then((response) => {
        return response.json()
      }).then((data) => {
        console.log(data);
      })
    }
  }
}

// function goToNewPostPage() {
//   location.href = "/new-post";
// }

// document.getElementById('addNewPost').addEventListener('click', goToNewPostPage);