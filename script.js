const mainJokesContainer = document.querySelector(".main__joke");

const getRandomJoke = () => {
  axios
    .get("https://api.chucknorris.io/jokes/random")
    .then((response) => {
      // renderJokes(response.data);
      renderRandomJoke(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const newJoke = (joke) => {
  const newJokeContainer = document.createElement("div");
  newJokeContainer.classList.add("main__fun");

  const randomJoke = document.createElement("p");
  randomJoke.innerText = joke.value;
  randomJoke.classList.add("main__random");

  newJokeContainer.appendChild(randomJoke);
  // mainJokesSite.appendChild(newJokeContainer);
  return newJokeContainer;
};

const renderRandomJoke = (joke) => {
  const showMyJokes = newJoke(joke);

  mainJokesContainer.appendChild(showMyJokes);
};

const renderJokes = (response) => {
  response.forEach((item) => {
    const showMyJokes = newJoke(item);

    mainJokesContainer.appendChild(showMyJokes);
  });
};

const pressButton = document.querySelector(".main__button");

pressButton.addEventListener("click", (event) => {
  event.preventDefault();
  getRandomJoke();
});
