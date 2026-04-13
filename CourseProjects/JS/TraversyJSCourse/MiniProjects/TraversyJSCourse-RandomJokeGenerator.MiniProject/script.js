// AJAX And XHR object

const jokeEle = document.getElementById('joke');

function jokeGenerator() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const data = JSON.parse(this.responseText);

            jokeEle.innerHTML = `${data.value}`
        } else {
            jokeEle.innerHTML = `Something Went Wrong ...`;
        }
    };

    xhr.send();
}

document.getElementById('joke-btn').addEventListener('click', jokeGenerator);
document.addEventListener('DOMContentLoaded', jokeGenerator)
