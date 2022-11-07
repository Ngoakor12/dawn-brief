import axios from "axios";

type Joke = {
  jokeText?: string;
  jokeHTML?: string;
};

async function getJoke(): Promise<Joke> {
  const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist";

  const response = await axios.get(url);
  const data = await response.data;
  let jokeText: string;
  let jokeHTML: string;

  if (data.type === "twopart") {
    jokeText = `${data.setup}\n${data.delivery}`;
    jokeHTML = `<p>${jokeText}</p>`;
  } else {
    jokeText = data.joke;
    jokeHTML = jokeText;
  }
  return { jokeText, jokeHTML };
}

module.exports = getJoke;
