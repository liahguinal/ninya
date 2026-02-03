// Valentine's Day Interactive Script

let noClickCount = 0;
const noButton = document.querySelector('.type--B');
const yesButton = document.querySelector('.type--A');

// Auto-play background music when page loads
window.addEventListener('load', function() {
    const bgm = document.getElementById('bgm');
    if (bgm) {
        bgm.volume = 0.3; // Set volume to 30%
        // Try to play, but don't worry if blocked
        bgm.play().catch(e => {
            console.log('Auto-play prevented by browser - will play on first interaction');
        });
    }
});

// Play music on first user interaction
function startMusic() {
    const bgm = document.getElementById('bgm');
    if (bgm && bgm.paused) {
        bgm.play().catch(e => {
            console.log('Could not play music');
        });
    }
}

function handleYesClick() {
    startMusic(); // Start music on interaction
    playClickSound();
    
    // Create hearts animation
    createHearts();
    
    // Add bottom GIFs and flying butterfly
    createAnimatedGifs();
    
    // Show success message
    document.querySelector('.container').innerHTML = `
        <div style="text-align: center; font-family: fantasy;">
            <h1 style="color: #1F2F98; font-size: 3em; font-family: fantasy;">💙 SHESHHHH! 💙</h1>
            <p style="font-size: 1.5em; color: #1F2F98; font-family: fantasy;">Ana btaw ko yes na HAHAHAHAHA</p>
            <p style="font-size: 1.2em; color: #1F2F98; font-family: fantasy;">Happy Valentine's Day! 💙</p>
        </div>
    `;
}

function handleNoClick() {
    startMusic(); // Start music on interaction
    playClickSound();
    noClickCount++;
    
    const messages = [
        "Sure oiii??? 🥺",
        "Please nani do!",
        "Hahayssss... 😢",
        "Once a year rani 🙏",
        "Yes na do! 🥰",
        "Pls Pls Pls"
    ];
    
    if (noClickCount < messages.length) {
        noButton.querySelector('.button__text').textContent = messages[noClickCount - 1];
        
        // Make Yes button bigger and No button smaller
        yesButton.style.transform = `scale(${1 + noClickCount * 0.2})`;
        noButton.style.transform = `scale(${1 - noClickCount * 0.1})`;
        
        // Move No button randomly
        const container = document.querySelector('.buttons');
        const containerRect = container.getBoundingClientRect();
        const buttonRect = noButton.getBoundingClientRect();
        
        const maxX = containerRect.width - buttonRect.width;
        const maxY = containerRect.height - buttonRect.height;
        
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        
        noButton.style.position = 'relative';
        noButton.style.left = `${randomX - buttonRect.width/2}px`;
        noButton.style.top = `${randomY - buttonRect.height/2}px`;
    } else {
        // Force yes after too many no clicks
        handleYesClick();
    }
}

function playClickSound() {
    const clickSound = document.getElementById('clickSound');
    if (clickSound) {
        clickSound.currentTime = 0;
        clickSound.play().catch(e => {
            console.log('Click sound failed to play');
        });
    }
}

function createHearts() {
    // Create infinite hearts animation
    setInterval(() => {
        createSingleHeart();
    }, 200);
    
    // Create NINYA text background with hearts
    createNinyaBackground();
}

function createSingleHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '🩵';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = window.innerHeight + 'px';
    heart.style.fontSize = Math.random() * 15 + 15 + 'px';
    heart.style.zIndex = '999';
    heart.style.pointerEvents = 'none';
    heart.style.animation = 'floatUp 4s ease-out forwards';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 4000);
}

function createNinyaBackground() {
    const ninyaText = document.createElement('div');
    ninyaText.innerHTML = 'NINYA';
    ninyaText.style.position = 'fixed';
    ninyaText.style.top = '50%';
    ninyaText.style.left = '50%';
    ninyaText.style.transform = 'translate(-50%, -50%)';
    ninyaText.style.fontSize = '15vw';
    ninyaText.style.fontWeight = 'bold';
    ninyaText.style.color = 'rgba(31, 47, 152, 0.1)';
    ninyaText.style.zIndex = '1';
    ninyaText.style.pointerEvents = 'none';
    ninyaText.style.fontFamily = 'cursive';
    ninyaText.style.letterSpacing = '0.1em';
    
    document.body.appendChild(ninyaText);
}

function createAnimatedGifs() {
    // Left GIF
    const leftGif = document.createElement('img');
    leftGif.src = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2dlYmNjbTI5NnN0NGVmajV1ano3cTJkanh6NWFzNDVhZW80enVvdSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/EIpHa3LdR8Zr9Z11NZ/giphy.gif';
    leftGif.className = 'bottom-gif-left';
    leftGif.alt = 'Left GIF';
    
    // Center GIF
    const centerGif = document.createElement('img');
    centerGif.src = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2dlYmNjbTI5NnN0NGVmajV1ano3cTJkanh6NWFzNDVhZW80enVvdSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/vZhJTzc4xuI9kRAvAg/giphy.gif';
    centerGif.className = 'bottom-gif-center';
    centerGif.alt = 'Center GIF';
    
    // Right GIF
    const rightGif = document.createElement('img');
    rightGif.src = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2dlYmNjbTI5NnN0NGVmajV1ano3cTJkanh6NWFzNDVhZW80enVvdSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/z17HQRJssEGEOGgsq9/giphy.gif';
    rightGif.className = 'bottom-gif-right';
    rightGif.alt = 'Right GIF';
    
    // Add bottom GIFs to body
    document.body.appendChild(leftGif);
    document.body.appendChild(centerGif);
    document.body.appendChild(rightGif);
    
    // Create infinite flying butterfly at top
    createFlyingButterfly();
}

function createFlyingButterfly() {
    const butterfly = document.createElement('img');
    butterfly.src = 'gifs/butterfly.gif';
    butterfly.className = 'flying-butterfly';
    butterfly.alt = 'Flying Butterfly';
    
    document.body.appendChild(butterfly);
}

// Add CSS animation for hearts
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        to {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
            opacity: 0.3;
        }
        50% {
            transform: scale(1.1);
            opacity: 0.6;
        }
    }
`;
document.head.appendChild(style);