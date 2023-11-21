let joke = document.getElementById('joke')

joke.addEventListener('click',  getChuckNorrisJoke)

async function  getChuckNorrisJoke() {
    try {
      const url = "https://api.chucknorris.io/jokes/random";
      const response = await fetch(url);
      const data = await response.json();
      const joke = data.value;
      console.log(joke);
    } catch (error) {
      console.log("Ошибка:", error);
    }
  }

   getChuckNorrisJoke();
