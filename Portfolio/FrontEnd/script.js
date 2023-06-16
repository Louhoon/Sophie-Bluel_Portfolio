
function displayData(data) {
	data.forEach(user => {
		const figure = `<figure class="projects">
			<img src="${user.imageUrl}"/>
			<figcaption>${user.title}</figcaption>
		</figure>`

		document.querySelector('.gallery').insertAdjacentHTML('beforeend', figure);
	})
}

fetch('http://localhost:5678/api/works')
	.then(res => {
		return res.json();
	})
	.then(data =>{
		displayData(data);
	});



fetch('http://localhost:5678/api/categories')