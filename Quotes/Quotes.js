const dummyQuotes = [
  {
    Quote: `We become what we think about`,
    by: "Earl Nightingale",
    len:0,
  },
  {
    Quote: `Everything you’ve ever wanted is on the other side of fear.`,
    by: "George Addair",
    len:0,
  },
  {
    Quote: `We must be willing to let go of the life we planned so as to have the life that is waiting for us.`,
    by: "Joseph Campbell",
    len:0,
  },
  {
    Quote: `You are never too old to set another goal or to dream a new dream.`,
    by: "C.S. Lewis",
    len:0,
  },
  {
    Quote: `It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome. `,
    by: "William James",
    len:0,
  },
  {
    Quote: `Move out of your comfort zone. You can only grow if you are willing to feel awkward and uncomfortable when you try something new.`,
    by: "Brian Tracy",
    len:0,
  },
  {
    Quote: `I can’t change the direction of the wind, but I can adjust my sails to always reach my destination.`,
    by: " Jimmy Dean",
    len:0,
  },
  {
    Quote: `Believe you can and you’re halfway there.`,
    by: "Theodore Roosevelt",
    len:0,
  },
  {
    Quote: `Success is not final, failure is not fatal: it is the courage to continue that counts.`,
    by: "Winston Churchill",
    len:0,
  },
  {
    Quote: `All our dreams can come true if we have the courage to pursue them.`,
    by: "Walt Disney",
    len:0,
  },
  {
    Quote: `Happiness is not something readymade. It comes from your own actions.`,
    by: "Dalai Lama",
    len:0,
  },
  {
    Quote: `Optimism is the one quality more associated with success and happiness than any other.`,
    by: "Brian Tracy",
    len:0,
  },
  {
    Quote: `People who are crazy enough to think they can change the world, are the ones who do.`,
    by: "Rob Siltanen",
    len:0,
  },
  {
    Quote: `If I cannot do great things, I can do small things in a great way.`,
    by: "Martin Luther King Jr",
    len:0,
  },
  {
    Quote: `Be the change that you wish to see in the world.`,
    by: "Mahatma Ghandi",
    len:0,
  },
  {
    Quote: `Happiness is not by chance, but by choice.`,
    by: "Jim Rohn",
    len:0,
  },
  {
    Quote: `Your life only gets better when you get better.`,
    by: "Brian Tracy",
    len:0,
  },
  {
    Quote: `You get what you give.`,
    by: "Jennifer Lopez",
    len:0,
  },
  {
    Quote: `The only limit to our realization of tomorrow will be our doubts of today.`,
    by: "Franklin D. Roosevelt",
    len:0,
  },
  {
    Quote: `Today’s accomplishments were yesterday’s impossibilities.`,
    by: "Robert H. Schuller",
    len:0,
  },
  {
    Quote: `Light tomorrow with today!`,
    by: "Elizabeth Barrett Browning",
    len:0,
  },
  {
    Quote: `We generate fears while we sit. We overcome them by action.`,
    by: "Dr. Henry Link",
    len:0,
  },
  {
    Quote: `For every reason it’s not possible, there are hundreds of people who have faced the same circumstances and succeeded.`,
    by: "Jack Canfield",
    len:0,
  },
  {
    Quote: `Don’t Let Yesterday Take Up Too Much Of Today.`,
    by: "Will Rogers",
    len:0,
  },
  {
    Quote: `Let us make our future now, and let us make our dreams tomorrow’s reality.`,
    by: "Malala Yousafzai",
    len:0,
  },
  {
    Quote: `Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.`,
    by: "Mae Jemison",
    len:0,
  },
  {
    Quote: `The bad news is time flies. The good news is you’re the pilot.`,
    by: "Michael Altshuler",
    len:0,
  },
  {
    Quote: `Keep your face always toward the sunshine, and shadows will fall behind you.`,
    by: "Walt Whitman",
    len:0,
  },
  {
    Quote: `I may not have gone where I intended to go, but I think I have ended up where I needed to be.`,
    by: "Douglas Adams",
    len:0,
  },
  {
    Quote: `Life is what happens to us while we are making other plans.`,
    by: "Allen Saunders",
    len:0,
  },
  {
    Quote: `In three words I can sum up everything I’ve learned about life: it goes on.`,
    by: "Robert Frost",
    len:0,
  },
  {
    Quote: `You only live once, but if you do it right, once is enough.`,
    by: "Mae West",
    len:0,
  },
  {
    Quote: `We may encounter many defeats but we must not be defeated.`,
    by: "Maya Angelou",
    len:0,
  },
  {
    Quote: `The best way to get started is to quit talking and begin doing.`,
    by: "Walt Disney",
    len:0,
  },
  {
    Quote: `You are the sum total of everything you’ve ever seen, heard, eaten, smelled, been told, forgot ― it’s all there. Everything influences each of us, and because of that I try to make sure that my experiences are positive.`,
    by: "Maya Angelou",
    len:0,
  },
  {
    Quote: `Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.`,
    by: "Marie Curie",
    len:0,
  },
  {
    Quote: `Life is like riding a bicycle. To keep your balance, you must keep moving.`,
    by: "Albert Einstein",
    len:0,
  },
  {
    Quote: `Life isn’t about finding yourself. Life is about creating yourself.`,
    by: "George Bernard Shaw",
    len:0,
  },
  {
    Quote: `The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle.`,
    by: "Steve Jobs",
    len:0,
  },
  {
    Quote: `I think goals should never be easy, they should force you to work, even if they are uncomfortable at the time.`,
    by: "Michael Phelps",
    len:0,
  },
  {
    Quote: `Fake it until you make it! Act as if you had all the confidence you require until it becomes your reality.`,
    by: "Brian Tracy",
    len:0,
  },
  {
    Quote: `What you lack in talent can be made up with desire, hustle and giving 110% all the time.`,
    by: "Don Zimmer",
    len:0,
  },
  {
    Quote: `The man who has confidence in himself gains the confidence of others.`,
    by: "Hasidic Proverb",
    len:0,
  },
  {
    Quote: `Entrepreneurs are great at dealing with uncertainty and also very good at minimizing risk. That’s the classic entrepreneur.`,
    by: "Mohnish Pabrai",
    len:0,
  },
  {
    Quote: `If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.`,
    by: "Steve Jobs",
    len:0,
  },
  {
    Quote: `The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.`,
    by: "Winston Churchill",
    len:0,
  },
  {
    Quote: `Someone is sitting in the shade today because someone planted a tree a long time ago.`,
    by: "Warren Buffet",
    len:0,
  },
  {
    Quote: `There are no limits to what you can accomplish, except the limits you place on your own thinking.`,
    by: "Brian Tracy",
    len:0,
  },
  {
    Quote: `Leaders never use the word failure. They look upon setbacks as learning experiences.`,
    by: "Brian Tracy",
    len:0,
  },
  {
    Quote: `Leaders think and talk about the solutions. Followers think and talk about the problems.`,
    by: "Brian Tracy",
    len:0,
  },
  {
    Quote: `Leaders are never satisfied; they continually strive to be better.`,
    by: "Brian Tracy",
    len:0,
  },
  {
    Quote: `Entrepreneurial leadership requires the ability to move quickly when opportunity presents itself.`,
    by: "Brian Tracy",
    len:0,
  },
  {
    Quote: `Respect is the key determinant of high-performance leadership. How much people respect you determines how well they perform.`,
    by: "Brian Tracy",
    len:0,
  },
  {
    Quote: `The true test of leadership is how well you function in a crisis.`,
    by: "Brian Tracy",
    len:0,
  },
  {
    Quote: `The key responsibility of leadership is to think about the future. No one else can do it for you.`,
    by: "Brian Tracy",
    len:0,
  },
  {
    Quote: `Leaders set high standards. Refuse to tolerate mediocrity or poor performance.`,
    by: "Brian Tracy",
    len:0,
  },
  {
    Quote: `Integrity is the most valuable and respected quality of leadership. Always keep your word.`,
    by: "Brian Tracy",
    len:0,
  },
  {
    Quote: `The three ‘C’s’ of leadership are consideration, caring, and courtesy. Be polite to everyone.`,
    by: "Brian Tracy",
    len:0,
  },
  {
    Quote: `Leaders are anticipatory thinkers. They consider all consequences of their behaviors before they act.`,
    by: "Brian Tracy",
    len:0,
  },
  {
    Quote: `Practice golden rule management in everything you do. Manage others the way you would like to be managed.`,
    by: "Brian Tracy",
    len:0,
  },
  {
    Quote: `The effective leader recognizes that they are more dependent on their people than they are on them. Walk softly. `,
    by: "Brian Tracy",
    len:0,
  },
  {
    Quote: `Leadership is the ability to get extraordinary achievement from ordinary people.`,
    by: "Brian Tracy",
    len:0,
  },
  {
    Quote: `Whether you think you can or think you can’t, you’re right..`,
    by: "Henry Ford",
    len:0,
  },
  {
    Quote: `The best leaders have a high consideration factor. They really care about their people.`,
    by: "Brian Tracy",
    len:0,
  },
  {
    Quote: `Security is mostly a superstition. Life is either a daring adventure or nothing.`,
    by: "Helen Keller",
    len:0,
  },
  {
    Quote: `Your talent determines what you can do. Your motivation determines how much you’re willing to do. Your attitude determines how well you do it.`,
    by: "Lou Holtz",
    len:0,
  },
  {
    Quote: `Go as far as you can see; when you get there, you’ll be able to see further.`,
    by: "Thomas Carlyle",
    len:0,
  },
  {
    Quote: `You’ve got to get up every morning with determination if you’re going to go to bed with satisfaction.`,
    by: "George Lorimer F",
    len:0,
  },
  {
    Quote: `A room without books is like a body without a soul.`,
    by: "Marcus Tullius Cicero",
    len:0,
  },
  {
    Quote: `Reading is to the mind, as exercise is to the body.`,
    by: "Brian Tracy",
    len:0,
  },
  {
    Quote: `To see what is right and not do is a lack of courage.`,
    by: "Confucius",
    len:0,
  },
  {
    Quote: `Develop an ‘attitude of gratitude.’ Say thank you to everyone you meet for everything you do.`,
    by: "Brian Tracy",
    len:0,
  },
  {
    Quote: `Knowing is not enough; we must apply. Wishing is not enough; we must do.`,
    by: "Johann Wolfgang Von Goethe",
    len:0,
  },
  {
    Quote: `Creativity is intelligence having fun.`,
    by: "Albert Einstein",
    len:0,
  },
  {
    Quote: `If you don’t like the road you’re walking, start paving another one.`,
    by: "Dolly Parton",
    len:0,
  },
  {
    Quote: `Folks are usually about as happy as they make up their minds to be.`,
    by: "Abraham Lincoln",
    len:0,
  },
  {
    Quote: `You don’t have to be great to start, but you have to start to be great.`,
    by: "Zig Ziglar",
    len:0,
  },
  {
    Quote: `One of the lessons that I grew up with was to always stay true to yourself and never let what somebody else says distract you from your goals.`,
    by: "Michelle Obama",
    len:0,
  },
  {
    Quote: `Do what you can with all you have, wherever you are.`,
    by: "Theodore Roosevelt",
    len:0,
  },
  {
    Quote: `Failure will never overtake me if my determination to succeed is strong enough.`,
    by: "Og Mandino",
    len:0,
  },
  {
    Quote: `It’s not whether you get knocked down, it’s whether you get back up.`,
    by: "Vince Lombardi",
    len:0,
  },
  {
    Quote: `Change the world by being yourself.`,
    by: "Amy Poehler",
    len:0,
  },
  {
    Quote: `Inspiration comes from within yourself. One has to be positive. When you’re positive, good things happen.`,
    by: "Deep Roy",
    len:0,
  },
  {
    Quote: `Life changes very quickly, in a very positive way, if you let it.`,
    by: "Lindsey Vonn",
    len:0,
  },
  {
    Quote: `Make your life a masterpiece, imagine no limitations on what you can be, have, or do.`,
    by: "Brian Tracy",
    len:0,
  },
  {
    Quote: `My mission in life is not merely to survive, but to thrive.`,
    by: "Maya Angelou",
    len:0,
  },
  {
    Quote: `Things work out best for those who make the best of how things work out.`,
    by: "John Wooden",
    len:0,
  },
  {
    Quote: `The happiness of your life depends on the quality of your thoughts.`,
    by: "Marcus Aurelius",
    len:0,
  },
  {
    Quote: `Turn your wounds into wisdom.`,
    by: "Oprah Winfrey",
    len:0,
  },
  {
    Quote: `May your choices reflect your hopes, not your fears.`,
    by: "Nelson Mandela",
    len:0,
  },
  {
    Quote: `There is no substitute for hard work.`,
    by: "Thomas Edison",
    len:0,
  },
  {
    Quote: `Never regret anything that made you smile.`,
    by: "Mark Twain",
    len:0,
  },
  {
    Quote: `Every moment is a fresh beginning.`,
    by: "T.S Eliot",
    len:0,
  },
  {
    Quote: `Change the game, don’t let the game change you.`,
    by: "Macklemore",
    len:0,
  },
  {
    Quote: `It hurt because it mattered.`,
    by: "John Green",
    len:0,
  },
  {
    Quote: `Without hustle, talent will only carry you so far.`,
    by: "Gary Vaynerchuk",
    len:0,
  },
  {
    Quote: `Greatness only comes before hustle in the dictionary.`,
    by: "Ross Simmonds",
    len:0,
  },
  {
    Quote: `Hustlers don’t sleep, they nap.`,
    by: "Unknown",
    len:0,
  },
  {
    Quote: `Invest in your dreams. Grind now. Shine later.`,
    by: "Unknown",
    len:0,
  },
  {
    Quote: `Every sucessful person in the world is a hustler one way or another. We all hustle to get where we need to be. Only a fool would sit around and wait on another man to feed him.`,
    by: "K’wan",
    len:0,
  },
  {
    Quote: `Everything comes to him who hustles while he waits.`,
    by: "Thomas Edison",
    len:0,
  },
  {
    Quote: `Things may come to those who wait, but only the things left by those who hustle.`,
    by: "Abraham Lincoln",
    len:0,
  },
  {
    Quote: `No one is to blame for your future situation but yourself. If you want to be successful, then become Successful.`,
    by: "Jaymin Shah",
    len:0,
  },
  {
    Quote: `Hustle in silence and let your success make the noise.`,
    by: "Unknown",
    len:0,
  },
  {
    Quote: `Work like there is someone working twenty four hours a day to take it away from you.`,
    by: "Mark Cuban",
    len:0,
  },
];

let Quotes_Len = [];
let min = Number.MAX_VALUE;
let max = Number.MIN_VALUE;

(function () {
  for(let i = 0; i<dummyQuotes.length; i++){
    const str = dummyQuotes[i].Quote.split(" ");
    dummyQuotes.len = str.length;
    Quotes_Len.push({
      Quote: dummyQuotes[i].Quote,
      Author: dummyQuotes[i].by,
      len: str.length,
    });
    
    min = Math.min(min, dummyQuotes.len);
    max = Math.max(max, dummyQuotes.len);
  }
})();

// Quotes_Len.push({min,max,length:Quotes_Len.length})

module.exports.Quotes = Quotes_Len;