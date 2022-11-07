function prepMessage(gif:any,joke: any, quote: any) {
  const messageHTML = `
    <h1>Morning Ngoako</h1>
    <img src=${gif&& gif.gifHTML} alt=""/>
    <h2>Quote:</h2>
    <p>${quote && quote?.quoteHTML}</p>
    <h2>Joke:</h2>
    <p>${joke && joke?.jokeHTML}</p>
  `;
  const messageText = `
    Morning Ngoako
    Quote:
    ${quote && quote?.quoteHTML}
    Joke:
    ${joke && joke?.jokeHTML}
  `;
  

  return { messageText, messageHTML };
}

module.exports = prepMessage;
