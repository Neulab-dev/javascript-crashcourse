const res = fetch('https://api.example.com/data', {
  method: 'POST', // or 'PUT', 'DELETE', etc.
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your-token-here',
  },
  body: JSON.stringify({ key: 'value' }),
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => console.log(data))
.catch(error => console.error('Fetch error:', error));