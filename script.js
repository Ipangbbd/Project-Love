// Local API storage for love poems
const lovePoems = [
    "I love you more than coffee in the morning, more than stars in the night sky. You're my everything, my always.",
    "If I had to choose between breathing and loving you, I would use my last breath to say 'I love you'.",
    "My love for you is like pi - natural, irrational, and never ending.",
    "You're the peanut butter to my jelly, the milk to my cookies, the love to my life.",
    "I love you 3000 and then some. My heart beats for you in every universe.",
    "Loving you is like breathing - I can't stop and I don't want to.",
    "You're my favorite notification in this busy world. I love you more than words can say.",
    "My love for you is like a circle - it has no beginning and no end.",
    "If love was a storybook, we'd meet on the very first page. I love you to the moon and back.",
    "You're the reason I believe in love. Every day with you is a blessing I cherish.",
    "I love you more than yesterday but less than tomorrow. My love for you grows endlessly.",
    "You're my sunshine on cloudy days, my comfort in difficult times. I love you endlessly.",
    "My heart is yours, today, tomorrow, and forever. I love you 3000 times infinity.",
    "You're the missing piece to my puzzle, the answer to my prayers. I love you completely.",
    "If kisses were raindrops, I'd send you a storm. If hugs were seconds, I'd give you eternity.",
    "I love you more than all the sand on all the beaches, all the stars in all the skies.",
    "You're my today and all of my tomorrows. I love you more than life itself.",
    "My love for you is like the ocean - vast, deep, and full of mysteries to explore.",
    "I love you to the depth and breadth and height my soul can reach.",
    "You're my favorite place to go when my mind searches for peace. I love you endlessly."
];

// DOM elements
const nameInputScreen = document.getElementById('nameInputScreen');
const loadingScreen = document.getElementById('loadingScreen');
const mainContent = document.getElementById('mainContent');
const userNameInput = document.getElementById('userName');
const submitNameBtn = document.getElementById('submitName');
const greeting = document.getElementById('greeting');
const generatePoemBtn = document.getElementById('generatePoem');
const poemDisplay = document.getElementById('poemDisplay');

// Session management
let userName = '';

// Event listeners
submitNameBtn.addEventListener('click', handleNameSubmit);
userNameInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        handleNameSubmit();
    }
});
generatePoemBtn.addEventListener('click', generateLovePoem);

// Functions
function handleNameSubmit() {
    userName = userNameInput.value.trim();

    if (userName === '') {
        alert('Please enter your name!');
        return;
    }

    // Show loading screen
    nameInputScreen.style.display = 'none';
    loadingScreen.style.display = 'flex';

    // Simulate loading with timeout
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        mainContent.style.display = 'block';

        // Set greeting
        greeting.textContent = `Hey there, ${userName}!!`;

        // Generate initial poem
        generateLovePoem();
    }, 2000);
}

function generateLovePoem() {
    // Get random poem from our local API
    const randomIndex = Math.floor(Math.random() * lovePoems.length);
    const randomPoem = lovePoems[randomIndex];

    // Add animation
    poemDisplay.classList.remove('animate__fadeIn');
    void poemDisplay.offsetWidth; // Trigger reflow
    poemDisplay.classList.add('animate__fadeIn');

    // Display the poem
    poemDisplay.textContent = randomPoem;
}

// Initialize with a random gif
const gifs = [
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWJtYzF6bWl4dGZ0cWx1Y2Q3eXh2eGZ0dGJ4cDZ6dGJ5bXJqYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKsQ8XqHAzFI5r2/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWJtYzF6bWl4dGZ0cWx1Y2Q3eXh2eGZ0dGJ4cDZ6dGJ5bXJqYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKsQ8XqHAzFI5r2/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWJtYzF6bWl4dGZ0cWx1Y2Q3eXh2eGZ0dGJ4cDZ6dGJ5bXJqYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKsQ8XqHAzFI5r2/giphy.gif'
];

function changeGif() {
    const randomGifIndex = Math.floor(Math.random() * gifs.length);
    document.getElementById('mainGif').src = gifs[randomGifIndex];
}

// Change gif every 5 seconds
setInterval(changeGif, 5000);