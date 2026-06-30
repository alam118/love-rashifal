// =========================================
// Love Rashifal - Main Application Script
// =========================================

// ===== Zodiac Data with Love Predictions =====
const zodiacData = {
    aries: {
        name: 'Aries',
        symbol: '♈',
        emoji: '🔥',
        love: [
            'Your passionate energy attracts someone special today.',
            'An unexpected romantic gesture will make your heart skip.',
            'Singles may find love through a mutual friend.',
            'Express your feelings openly - the time is right.',
            'A surprise date invitation could change everything.'
        ],
        advice: 'Be bold but patient in matters of the heart.'
    },
    taurus: {
        name: 'Taurus',
        symbol: '♉',
        emoji: '🌹',
        love: [
            'Your loyalty and warmth will deepen an existing bond.',
            'A romantic dinner could lead to a magical evening.',
            'Your steady nature makes you irresistible today.',
            'Someone admires you from afar - make the first move.',
            'A heartfelt conversation will strengthen your connection.'
        ],
        advice: 'Trust the slow and steady rhythm of love.'
    },
    gemini: {
        name: 'Gemini',
        symbol: '♊',
        emoji: '💬',
        love: [
            'Your wit and charm will captivate someone new.',
            'A deep conversation could spark a romantic flame.',
            'Love finds you in the most unexpected places.',
            'Your playful energy attracts positive attention.',
            'A message from a crush might brighten your day.'
        ],
        advice: 'Let your curiosity guide you to new connections.'
    },
    cancer: {
        name: 'Cancer',
        symbol: '♋',
        emoji: '🌊',
        love: [
            'Your nurturing nature will bring you closer to your partner.',
            'A romantic gesture from your partner will warm your heart.',
            'Singles may find love in a familiar face.',
            'Trust your intuition - it knows the way to love.',
            'Home is where the heart is - plan a cozy date.'
        ],
        advice: 'Your emotional depth is your greatest strength.'
    },
    leo: {
        name: 'Leo',
        symbol: '♌',
        emoji: '👑',
        love: [
            'Your charisma shines bright today, attracting admirers.',
            'A grand romantic gesture will leave you feeling adored.',
            'Your confidence makes you magnetic to others.',
            'Love takes center stage in your life today.',
            'A passionate encounter could become something more.'
        ],
        advice: 'Let your heart roar with love and confidence.'
    },
    virgo: {
        name: 'Virgo',
        symbol: '♍',
        emoji: '📝',
        love: [
            'Your attention to detail makes your partner feel cherished.',
            'A thoughtful gesture will speak volumes about your love.',
            'Love grows in the little moments - embrace them.',
            'Your practical nature brings stability to relationships.',
            'A meaningful conversation will deepen your bond.'
        ],
        advice: 'Perfection isn\'t the goal - love and growth are.'
    },
    libra: {
        name: 'Libra',
        symbol: '♎',
        emoji: '⚖️',
        love: [
            'Your charm and diplomacy will smooth over any conflict.',
            'A romantic partnership takes a beautiful turn.',
            'Your sense of fairness makes you a wonderful partner.',
            'Love finds harmony in your life today.',
            'A beautiful date could be the start of something new.'
        ],
        advice: 'Balance your heart and your head for the best outcomes.'
    },
    scorpio: {
        name: 'Scorpio',
        symbol: '♏',
        emoji: '🦂',
        love: [
            'Your intense passion will create a deep connection today.',
            'A secret crush may finally be revealed.',
            'Trust your instincts - they\'re guiding you toward love.',
            'Your magnetic presence draws others to you.',
            'A transformation in your love life is on the horizon.'
        ],
        advice: 'Vulnerability is the key to unlocking true intimacy.'
    },
    sagittarius: {
        name: 'Sagittarius',
        symbol: '♐',
        emoji: '🏹',
        love: [
            'Your adventurous spirit will lead you to an exciting romance.',
            'Love is a journey - enjoy every step of it.',
            'Your optimism is contagious and attractive.',
            'A fun outing could turn into a romantic memory.',
            'Your honesty will strengthen your relationship.'
        ],
        advice: 'Love is the greatest adventure of all.'
    },
    capricorn: {
        name: 'Capricorn',
        symbol: '♑',
        emoji: '🏔️',
        love: [
            'Your dedication will be rewarded with deep love.',
            'A romantic milestone is within reach.',
            'Your responsible nature makes you a reliable partner.',
            'Love builds on a foundation of trust and respect.',
            'A meaningful commitment could be on the horizon.'
        ],
        advice: 'Success in love comes from patience and effort.'
    },
    aquarius: {
        name: 'Aquarius',
        symbol: '♒',
        emoji: '💡',
        love: [
            'Your unique perspective will attract a kindred spirit.',
            'Love comes in unconventional forms - embrace it.',
            'Your independence makes you fascinating to others.',
            'A creative date idea will leave a lasting impression.',
            'Your authenticity is your most attractive quality.'
        ],
        advice: 'Stay true to yourself - the right love will follow.'
    },
    pisces: {
        name: 'Pisces',
        symbol: '♓',
        emoji: '🐟',
        love: [
            'Your empathy and compassion will deepen your connection.',
            'A romantic dream could become a beautiful reality.',
            'Your artistic soul attracts love and admiration.',
            'A kind word from you could make someone\'s day.',
            'Love flows like water - let it guide you.'
        ],
        advice: 'Your heart knows the way - trust your dreams.'
    }
};

// ===== App State =====
let currentSign = null;

// ===== DOM Elements =====
const zodiacItems = document.querySelectorAll('.zodiac-item');
const zodiacNameDisplay = document.getElementById('zodiacName');
const resultContent = document.getElementById('resultContent');
const currentDateDisplay = document.getElementById('currentDate');

// ===== Utility Functions =====
function getRandomPrediction(predictions) {
    return predictions[Math.floor(Math.random() * predictions.length)];
}

function formatDate() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return now.toLocaleDateString('en-US', options);
}

function getLoveAdvice(sign) {
    const advice = {
        aries: 'Be bold but patient in matters of the heart.',
        taurus: 'Trust the slow and steady rhythm of love.',
        gemini: 'Let your curiosity guide you to new connections.',
        cancer: 'Your emotional depth is your greatest strength.',
        leo: 'Let your heart roar with love and confidence.',
        virgo: 'Perfection isn\'t the goal - love and growth are.',
        libra: 'Balance your heart and your head for the best outcomes.',
        scorpio: 'Vulnerability is the key to unlocking true intimacy.',
        sagittarius: 'Love is the greatest adventure of all.',
        capricorn: 'Success in love comes from patience and effort.',
        aquarius: 'Stay true to yourself - the right love will follow.',
        pisces: 'Your heart knows the way - trust your dreams.'
    };
    return advice[sign] || 'Follow your heart.';
}

// ===== Render Horoscope =====
function renderHoroscope(sign) {
    const data = zodiacData[sign];
    if (!data) return;

    const prediction = getRandomPrediction(data.love);
    const advice = getLoveAdvice(sign);
    const currentTime = new Date().toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit' 
    });

    resultContent.innerHTML = `
        <div class="horoscope-text">
            <span class="emoji">${data.emoji}</span>
            ${prediction}
            <br><br>
            <span class="highlight">💫 Cosmic Advice:</span> ${advice}
        </div>
        <div class="horoscope-meta">
            <span><i class="fas fa-sun"></i> ${data.symbol} ${data.name}</span>
            <span><i class="fas fa-clock"></i> ${currentTime}</span>
            <span><i class="fas fa-star"></i> Today's Love Energy: High</span>
        </div>
    `;

    // Update selected zodiac display
    zodiacNameDisplay.textContent = `${data.symbol} ${data.name}`;
}

// ===== Handle Zodiac Selection =====
function selectZodiac(sign) {
    // Update active state
    zodiacItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.sign === sign) {
            item.classList.add('active');
        }
    });

    currentSign = sign;
    renderHoroscope(sign);

    // Add subtle animation to result
    const result = document.querySelector('.horoscope-result');
    result.style.animation = 'none';
    requestAnimationFrame(() => {
        result.style.animation = 'fadeInUp 0.5s ease';
    });
}

// ===== Initialize Particles =====
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: '#ff6b9d' },
                shape: { type: 'circle' },
                opacity: {
                    value: 0.15,
                    random: true,
                    anim: { enable: true, speed: 0.8, opacity_min: 0.05 }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: { enable: true, speed: 2, size_min: 0.5 }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#ff6b9d',
                    opacity: 0.08,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1.2,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'grab' },
                    onclick: { enable: false }
                },
                modes: {
                    grab: { distance: 140, line_linked: { opacity: 0.2 } }
                }
            },
            retina_detect: true
        });
    }
}

// ===== Event Listeners =====
zodiacItems.forEach(item => {
    item.addEventListener('click', function() {
        const sign = this.dataset.sign;
        selectZodiac(sign);
    });

    // Touch support for mobile
    item.addEventListener('touchstart', function(e) {
        // Prevent double-firing on mobile
    }, { passive: true });
});

// ===== Set Current Date =====
currentDateDisplay.textContent = formatDate();

// ===== Initialize App =====
function initApp() {
    // Initialize particles
    initParticles();
    
    // Auto-select first zodiac (optional) - disabled for better UX
    // Users should select their sign manually
    
    // Add a subtle entrance animation
    document.querySelector('.container').style.opacity = '0';
    requestAnimationFrame(() => {
        document.querySelector('.container').style.transition = 'opacity 0.8s ease';
        document.querySelector('.container').style.opacity = '1';
    });
}

// ===== Handle Service Worker (PWA) =====
if ('serviceWorker' in navigator) {
    // Optional: Register service worker for PWA support
    // navigator.serviceWorker.register('/sw.js');
}

// ===== Keyboard Navigation =====
document.addEventListener('keydown', (e) => {
    const items = Array.from(zodiacItems);
    const activeIndex = items.findIndex(item => item.classList.contains('active'));
    
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        const nextIndex = (activeIndex + 1) % items.length;
        items[nextIndex].click();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        const prevIndex = (activeIndex - 1 + items.length) % items.length;
        items[prevIndex].click();
    }
});

// ===== Start App =====
document.addEventListener('DOMContentLoaded', initApp);

// Log app info
console.log('❤️ Love Rashifal v1.0');
console.log('✨ Made with love by Rashifal Team');
console.log('📅 Daily love horoscopes for all zodiac signs');
