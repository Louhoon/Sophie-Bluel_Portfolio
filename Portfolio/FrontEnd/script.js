const img = document.getElementById('img');

fetch('http://localhost:5678/api/works')
	.then(res => res.json())
	.then(data => img.src = data[0].url)