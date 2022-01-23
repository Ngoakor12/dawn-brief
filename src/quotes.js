const inspirationalQuotes = [
  {
    author: {
      name: "James Clear",
      // no wikipedia
      wikipedia: "https://jamesclear.com/about",
    },
    quotes: [
      "Every action you take is a vote for the type of person you wish to become.",
      "When making plans, think big. When making progress, think small.",
    ],
  },
  {
    author: {
      name: "Chris Do",
      // no wikipedia
      wikipedia: "https://thefutur.com/team/chris-do",
    },
    quotes: ["Where your energy lives tells you what your heart wants."],
  },
  {
    author: {
      name: "Jim Carrey",
      wikipedia: "https://en.wikipedia.org/wiki/Jim_Carrey",
    },
    quotes: [
      "I learned that you can fail at what you don't love, so you might as well do what you love.",
    ],
  },
  {
    author: {
      name: "Bruce Lee",
      wikipedia: "https://en.wikipedia.org/wiki/Bruce_Lee",
    },
    quotes: [
      "I fear not the man who has practiced 10000 kicks once, but I fear the man who has practiced one kick 10000 times.",
    ],
  },
  {
    author: {
      name: "Carl Jung",
      wikipedia: "https://en.wikipedia.org/wiki/Carl_Jung",
    },
    quotes: [
      "You are what you do, not what you say you'll do.",
      "Everything that irritates us about others can lead us to an understanding of ourselves.",
    ],
  },
  {
    author: {
      name: "Baltasar Gracian",
      wikipedia: "https://en.wikipedia.org/wiki/Baltasar_Graci%C3%A1n",
    },
    quotes: [
      "Most things are not obtained simple because they are not attempted.",
    ],
  },
  {
    author: {
      name: "Maya Angelou",
      wikipedia: "https://en.wikipedia.org/wiki/Maya_Angelou",
    },
    quotes: [
      "Do the best you can until you know better. Then when you know better, do better.",
    ],
  },
  {
    author: {
      name: "Mark Twain",
      wikipedia: "https://en.wikipedia.org/wiki/Mark_Twain",
    },
    quotes: [
      "It's not the size of the dog in the fight, it's the size of the fight in the dog.",
      "The secret of getting ahead is getting started.",
      "A person who won't read has no advantage over one who can't read.",
      "Courage is resistance to fear, mastery of fear, not absence of fear.",
      "All generalizations are false, including this one.",
      "If it's your job to eat a frog, it's best to do it first thing in the morning. And if it's your job to eat two frogs, it's best to eat the biggest one first.",
    ],
  },
  {
    author: {
      name: "Jordan Peterson",
      wikipedia: "https://en.wikipedia.org/wiki/Jordan_Peterson",
    },
    quotes: [
      "It's in responsibility that most people find the meaning that sustains them through life. It's not happiness. It's not pleasure.",
      "When you have something to say, silence is a lie.",
      "Don't compare yourself with other people; compare yourself with who you were yesterday.",
      "You're going to pay a price for every bloody thing you do and everything  you don't do. You don't get to choose not to pay a price. You get to choose which poison you're going to take. That's it.",
      "When people voluntarily confront necessary things that they are afraid of, they inevitably get stronger.",
    ],
  },
];

function getRandomQuote() {
  const randomQuoteObject =
    inspirationalQuotes[Math.floor(Math.random() * inspirationalQuotes.length)];
  const quote =
    randomQuoteObject.quotes[
      Math.floor(Math.random() * randomQuoteObject.quotes.length)
    ];
  const authorName = randomQuoteObject.author.name;

  return `<p>"${quote}" - <a href=${randomQuoteObject.author.wikipedia}>${authorName}</a></p>`;
}

module.exports = { getRandomQuote };
