const questions = [
    {
        tweet: "I don’t have pet peeves. I have major psychotic hatreds.",
        answer: "George Carlin",
        options: ["George Carlin", "Richard Pryor", "Bill Hicks", "Rodney Dangerfield", "Lenny Bruce"]
    },
    {
        tweet: "Take care of the luxuries and the necessities will take care of themselves.",
        answer: "Dorothy Parker",
        options: ["Dorothy Parker", "Oscar Wilde", "Mark Twain", "W.C. Fields", "Groucho Marx"]
    },
    {
        tweet: "I am free of all prejudice. I hate everyone equally.",
        answer: "W.C. Fields",
        options: ["W.C. Fields", "Groucho Marx", "Mark Twain", "Oscar Wilde", "Phyllis Diller"]
    },
    {
        tweet: "I don’t exercise. If God had wanted me to bend over, he would have put diamonds on the floor.",
        answer: "Joan Rivers",
        options: ["Joan Rivers", "Phyllis Diller", "Roseanne Barr", "Lucille Ball", "Gilda Radner"]
    },
    {
        tweet: "Politics is the entertainment division of the military-industrial complex.",
        answer: "Frank Zappa",
        options: ["Frank Zappa", "George Carlin", "Bill Hicks", "Hunter S. Thompson", "Lenny Bruce"]
    },
    {
        tweet: "I told my wife the truth. I told her I was seeing a psychiatrist. Then she told me the truth: that she was seeing a psychiatrist, two plumbers, and a bartender.",
        answer: "Rodney Dangerfield",
        options: ["Rodney Dangerfield", "Henny Youngman", "George Carlin", "Don Rickles", "Buddy Hackett"]
    },
    {
        tweet: "Suppose you were an idiot, and suppose you were a member of Congress; but I repeat myself.",
        answer: "Mark Twain",
        options: ["Mark Twain", "Oscar Wilde", "Will Rogers", "Ambrose Bierce", "Dorothy Parker"]
    },
    {
        tweet: "Some cause happiness wherever they go; others whenever they go.",
        answer: "Oscar Wilde",
        options: ["Oscar Wilde", "Mark Twain", "George Bernard Shaw", "Dorothy Parker", "Ambrose Bierce"]
    },
    {
        tweet: "Outside of a dog, a book is man’s best friend. Inside of a dog, it’s too dark to read.",
        answer: "Groucho Marx",
        options: ["Groucho Marx", "W.C. Fields", "George Burns", "Milton Berle", "Jack Benny"]
    },
    {
        tweet: "Housework can’t kill you, but why take the chance?",
        answer: "Phyllis Diller",
        options: ["Phyllis Diller", "Joan Rivers", "Lucille Ball", "Roseanne Barr", "Gilda Radner"]
    },
    {
        tweet: "Before you judge a man, walk a mile in his shoes. After that, who cares? He’s a mile away and you’ve got his shoes.",
        answer: "Billy Connolly",
        options: ["Billy Connolly", "Eddie Izzard", "Ricky Gervais", "Dylan Moran", "Bill Bailey"]
    },
    {
        tweet: "I went to the doctor, and he said, ‘You’ve got hypochondria.’ I said, ‘Not that as well!’",
        answer: "Tommy Cooper",
        options: ["Tommy Cooper", "Spike Milligan", "Eric Morecambe", "Ken Dodd", "Peter Cook"]
    },
    {
        tweet: "Electricity is really just organized lightning.",
        answer: "Dave Barry",
        options: ["Dave Barry", "Lewis Grizzard", "Erma Bombeck", "P.J. O'Rourke", "Garrison Keillor"]
    },
    {
        tweet: "The reason I talk to myself is because I’m the only one whose answers I accept.",
        answer: "George Carlin",
        options: ["George Carlin", "Richard Pryor", "Bill Hicks", "Rodney Dangerfield", "Mitch Hedberg"]
    },
    {
        tweet: "If at first, you don’t succeed, try again. Then quit. No use being a damn fool about it.",
        answer: "W.C. Fields",
        options: ["W.C. Fields", "Groucho Marx", "Mark Twain", "Oscar Wilde", "Phyllis Diller"]
    },
    {
        tweet: "I used to play sports. Then I realized you can buy trophies. Now I’m good at everything.",
        answer: "Mitch Hedberg",
        options: ["Mitch Hedberg", "Steven Wright", "Demetri Martin", "Zach Galifianakis", "Dave Attell"]
    },
    {
        tweet: "I have a theory that the truth is never told during the nine-to-five hours.",
        answer: "Hunter S. Thompson",
        options: ["Hunter S. Thompson", "Bill Hicks", "George Carlin", "Frank Zappa", "Oscar Wilde"]
    },
    {
        tweet: "My fake plants died because I did not pretend to water them.",
        answer: "Mitch Hedberg",
        options: ["Mitch Hedberg", "Steven Wright", "Demetri Martin", "Zach Galifianakis", "Dave Attell"]
    },
    {
        tweet: "I never forget a face, but in your case, I’ll be glad to make an exception.",
        answer: "Groucho Marx",
        options: ["Groucho Marx", "W.C. Fields", "George Burns", "Jack Benny", "Milton Berle"]
    },
    {
        tweet: "I haven’t spoken to my wife in years. I didn’t want to interrupt her.",
        answer: "Rodney Dangerfield",
        options: ["Rodney Dangerfield", "Henny Youngman", "Don Rickles", "Buddy Hackett", "George Carlin"]
    },
    {
        tweet: "I’m not afraid of death; I just don’t want to be there when it happens.",
        answer: "Woody Allen",
        options: ["Woody Allen", "Groucho Marx", "George Carlin", "Rodney Dangerfield", "Steve Martin"]
    },
    {
        tweet: "Clothes make the man. Naked people have little or no influence on society.",
        answer: "Mark Twain",
        options: ["Mark Twain", "Oscar Wilde", "George Bernard Shaw", "Will Rogers", "Ambrose Bierce"]
    },
    {
        tweet: "All generalizations are false, including this one.",
        answer: "Mark Twain",
        options: ["Mark Twain", "Oscar Wilde", "Dorothy Parker", "Ambrose Bierce", "Groucho Marx"]
    },
    {
        tweet: "I refuse to join any club that would have me as a member.",
        answer: "Groucho Marx",
        options: ["Groucho Marx", "W.C. Fields", "George Carlin", "Oscar Wilde", "Rodney Dangerfield"]
    },
    {
        tweet: "I never feel more alone than when I’m trying to put sunscreen on my back.",
        answer: "Jimmy Kimmel",
        options: ["Jimmy Kimmel", "Ellen DeGeneres", "Stephen Colbert", "Conan O'Brien", "Jerry Seinfeld"]
    },
    {
        tweet: "Behind every great man, there is a woman rolling her eyes.",
        answer: "Jim Carrey",
        options: ["Jim Carrey", "Robin Williams", "Steve Martin", "Billy Crystal", "George Carlin"]
    },
    {
        tweet: "Age is something that doesn’t matter unless you are a cheese.",
        answer: "Luis Buñuel",
        options: ["Luis Buñuel", "Groucho Marx", "Mark Twain", "George Burns", "Oscar Wilde"]
    },
    {
        tweet: "You can’t have everything. Where would you put it?",
        answer: "Steven Wright",
        options: ["Steven Wright", "Mitch Hedberg", "George Carlin", "Demetri Martin", "Zach Galifianakis"]
    },
    {
        tweet: "I cook with wine. Sometimes I even add it to the food.",
        answer: "W.C. Fields",
        options: ["W.C. Fields", "Groucho Marx", "Dorothy Parker", "Oscar Wilde", "Phyllis Diller"]
    }
];



// Shuffle questions array on page load
shuffleArray(questions);

let currentQuestionIndex = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("tweet").textContent = currentQuestion.tweet;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = ''; // Clear previous options

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.classList.add("option");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const resultElement = document.getElementById("result");
    const resultText = document.querySelector(".result-text");
    const currentQuestion = questions[currentQuestionIndex];
    
    if (selectedOption === currentQuestion.answer) {
        resultText.textContent = `Correct! It was ${currentQuestion.answer}!`;
    } else {
        resultText.textContent = `Oops! It was actually ${currentQuestion.answer}.`;
    }

    resultElement.classList.remove("hidden");
}

function resetGame() {
    document.getElementById("result").classList.add("hidden");
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length; // Move to the next question
    loadQuestion();
}

// Shuffle array function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

// Load the first question when the page is loaded
loadQuestion();
