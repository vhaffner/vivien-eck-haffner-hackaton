const mainJokesContainer = document.querySelector(".main__joke");
const jokeField = document.querySelector(".main__random");

const getRandomJoke = () => {
  axios
    .get("https://api.chucknorris.io/jokes/random")
    .then((response) => {
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
  return newJokeContainer;
};

const renderRandomJoke = (joke) => {
  const showMyJokes = newJoke(joke);

  mainJokesContainer.replaceChildren(showMyJokes);
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
  //   jokeField. = " ";
  getRandomJoke();
});

const popUp = document.querySelector(".joke__outer");

const popUpPicture = () => {
  popUp.classList.add("joke__outer--show");
};

const submitButton = document.querySelector(".joke__btn");
const newChuckFact = document.getElementById("new__joke");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  newChuckFact.value = "";
  popUpPicture();
});

const closeButton = document.querySelector(".joke__reward");

closeButton.addEventListener("click", (event) => {
  event.preventDefault();
  popUp.classList.remove("joke__outer--show");
});
