const jokeDiv = document.querySelector('#joke');
const anotherJokeBtn = document.querySelector('#joke-btn');

function jokeGenerator() {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
	xhr.onreadystatechange = function () {
		if (this.readyState === 4 && this.status === 200) {
			const data = JSON.parse(this.responseText);
			jokeDiv.innerHTML = data.value;
		} else {
			jokeDiv.innerHTML = 'Funny Server Error';
		}
	};
	xhr.send();
}

jokeGenerator();

anotherJokeBtn.addEventListener('click', jokeGenerator);
