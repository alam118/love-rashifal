// =========================================
// Love Rashifal - Main Application Script
// =========================================

// ===== Zodiac Data with Hindi & English =====
const zodiacData = {
    aries: {
        name: { hi: 'मेष', en: 'Aries' },
        symbol: '♈',
        emoji: '🔥',
        love: {
            hi: [
                'आपकी उत्साही ऊर्जा आज किसी खास को आकर्षित करेगी ❤️',
                'एक अप्रत्याशित रोमांटिक इशारा आपका दिल चुरा लेगा 💕',
                'अकेले लोगों को किसी मित्र के माध्यम से प्यार मिल सकता है 💑',
                'अपनी भावनाओं को खुलकर व्यक्त करें - समय सही है 💌',
                'एक सरप्राइज डेट आपका दिन बना सकती है 🌹'
            ],
            en: [
                'Your passionate energy attracts someone special today ❤️',
                'An unexpected romantic gesture will make your heart skip 💕',
                'Singles may find love through a mutual friend 💑',
                'Express your feelings openly - the time is right 💌',
                'A surprise date invitation could change everything 🌹'
            ]
        },
        advice: {
            hi: 'दिल के मामलों में बहादुर बनें लेकिन धैर्य रखें 💪',
            en: 'Be bold but patient in matters of the heart 💪'
        }
    },
    taurus: {
        name: { hi: 'वृषभ', en: 'Taurus' },
        symbol: '♉',
        emoji: '🌹',
        love: {
            hi: [
                'आपकी वफादारी और गर्मजोशी रिश्ते को और गहरा करेगी 💞',
                'एक रोमांटिक डिनर शाम को जादुई बना सकता है ✨',
                'आपका स्थिर स्वभाव आपको अप्रतिरोध्य बनाता है 💖',
                'कोई आपकी प्रशंसा कर रहा है - पहला कदम बढ़ाएं 🌸',
                'एक दिल की बात आपके रिश्ते को मजबूत करेगी 💕'
            ],
            en: [
                'Your loyalty and warmth will deepen an existing bond 💞',
                'A romantic dinner could lead to a magical evening ✨',
                'Your steady nature makes you irresistible today 💖',
                'Someone admires you from afar - make the first move 🌸',
                'A heartfelt conversation will strengthen your connection 💕'
            ]
        },
        advice: {
            hi: 'प्यार की धीमी और स्थिर लय पर भरोसा करें 🌊',
            en: 'Trust the slow and steady rhythm of love 🌊'
        }
    },
    gemini: {
        name: { hi: 'मिथुन', en: 'Gemini' },
        symbol: '♊',
        emoji: '💬',
        love: {
            hi: [
                'आपकी बुद्धिमत्ता और आकर्षण किसी नए को मोहित करेगी ✨',
                'एक गहरी बातचीत रोमांटिक चिंगारी पैदा कर सकती है 💕',
                'प्यार आपको सबसे अप्रत्याशित जगहों पर मिलता है 🌟',
                'आपकी चंचल ऊर्जा सकारात्मक ध्यान आकर्षित करती है 💫',
                'क्रश का संदेश आपका दिन रोशन कर सकता है 📱'
            ],
            en: [
                'Your wit and charm will captivate someone new ✨',
                'A deep conversation could spark a romantic flame 💕',
                'Love finds you in the most unexpected places 🌟',
                'Your playful energy attracts positive attention 💫',
                'A message from a crush might brighten your day 📱'
            ]
        },
        advice: {
            hi: 'अपनी जिज्ञासा को नए कनेक्शन की ओर ले जाने दें 🦋',
            en: 'Let your curiosity guide you to new connections 🦋'
        }
    },
    cancer: {
        name: { hi: 'कर्क', en: 'Cancer' },
        symbol: '♋',
        emoji: '🌊',
        love: {
            hi: [
                'आपका देखभाल करने वाला स्वभाव आपको पार्टनर के करीब लाएगा 💕',
                'पार्टनर का रोमांटिक इशारा आपका दिल गर्म करेगा 💖',
                'अकेले लोगों को किसी परिचित चेहरे में प्यार मिल सकता है 🌸',
                'अपने अंतर्ज्ञान पर भरोसा करें - यह प्यार का रास्ता जानता है 🌙',
                'घर वह जगह है जहां दिल है - एक आरामदायक डेट प्लान करें 🏠'
            ],
            en: [
                'Your nurturing nature will bring you closer to your partner 💕',
                'A romantic gesture from your partner will warm your heart 💖',
                'Singles may find love in a familiar face 🌸',
                'Trust your intuition - it knows the way to love 🌙',
                'Home is where the heart is - plan a cozy date 🏠'
            ]
        },
        advice: {
            hi: 'आपकी भावनात्मक गहराई आपकी सबसे बड़ी ताकत है 💎',
            en: 'Your emotional depth is your greatest strength 💎'
        }
    },
    leo: {
        name: { hi: 'सिंह', en: 'Leo' },
        symbol: '♌',
        emoji: '👑',
        love: {
            hi: [
                'आपका करिश्मा आज चमकता है, प्रशंसकों को आकर्षित करता है ✨',
                'एक शानदार रोमांटिक इशारा आपको प्यार का एहसास दिलाएगा 💕',
                'आपका आत्मविश्वास आपको दूसरों के लिए चुंबकीय बनाता है 🧲',
                'प्यार आज आपके जीवन में केंद्र स्थान लेता है 🌟',
                'एक भावुक मुलाकात कुछ और बन सकती है 💖'
            ],
            en: [
                'Your charisma shines bright today, attracting admirers ✨',
                'A grand romantic gesture will leave you feeling adored 💕',
                'Your confidence makes you magnetic to others 🧲',
                'Love takes center stage in your life today 🌟',
                'A passionate encounter could become something more 💖'
            ]
        },
        advice: {
            hi: 'अपने दिल को प्यार और आत्मविश्वास से दहाड़ने दें 🦁',
            en: 'Let your heart roar with love and confidence 🦁'
        }
    },
    virgo: {
        name: { hi: 'कन्या', en: 'Virgo' },
        symbol: '♍',
        emoji: '📝',
        love: {
            hi: [
                'विवरणों पर आपका ध्यान पार्टनर को खास महसूस कराता है 💕',
                'एक विचारशील इशारा आपके प्यार के बारे में बहुत कुछ बताएगा 💌',
                'प्यार छोटे-छोटे पलों में बढ़ता है - उन्हें अपनाएं 🌸',
                'आपका व्यावहारिक स्वभाव रिश्तों में स्थिरता लाता है 🏠',
                'एक सार्थक बातचीत आपके बंधन को गहरा करेगी 💞'
            ],
            en: [
                'Your attention to detail makes your partner feel cherished 💕',
                'A thoughtful gesture will speak volumes about your love 💌',
                'Love grows in the little moments - embrace them 🌸',
                'Your practical nature brings stability to relationships 🏠',
                'A meaningful conversation will deepen your bond 💞'
            ]
        },
        advice: {
            hi: 'पूर्णता लक्ष्य नहीं है - प्यार और विकास है 🌱',
            en: "Perfection isn't the goal - love and growth are 🌱"
        }
    },
    libra: {
        name: { hi: 'तुला', en: 'Libra' },
        symbol: '♎',
        emoji: '⚖️',
        love: {
            hi: [
                'आपका आकर्षण और कूटनीति किसी भी संघर्ष को सुलझाएगी 🤝',
                'एक रोमांटिक साझेदारी सुंदर मोड़ लेती है 💕',
                'निष्पक्षता की आपकी भावना आपको एक अद्भुत पार्टनर बनाती है 💖',
                'प्यार आज आपके जीवन में सामंजस्य पाता है 🌈',
                'एक खूबसूरत डेट कुछ नई शुरुआत हो सकती है 🌹'
            ],
            en: [
                'Your charm and diplomacy will smooth over any conflict 🤝',
                'A romantic partnership takes a beautiful turn 💕',
                'Your sense of fairness makes you a wonderful partner 💖',
                'Love finds harmony in your life today 🌈',
                'A beautiful date could be the start of something new 🌹'
            ]
        },
        advice: {
            hi: 'सर्वोत्तम परिणामों के लिए अपने दिल और दिमाग को संतुलित करें ⚖️',
            en: 'Balance your heart and your head for the best outcomes ⚖️'
        }
    },
    scorpio: {
        name: { hi: 'वृश्चिक', en: 'Scorpio' },
        symbol: '♏',
        emoji: '🦂',
        love: {
            hi: [
                'आपका गहन जुनून आज एक गहरा संबंध बनाएगा 🔥',
                'एक गुप्त क्रश आखिरकार सामने आ सकता है 💕',
                'अपनी प्रवृत्ति पर भरोसा करें - वे आपको प्यार की ओर ले जा रही हैं 🌙',
                'आपकी चुंबकीय उपस्थिति दूसरों को आकर्षित करती है 🧲',
                'आपके प्रेम जीवन में एक परिवर्तन क्षितिज पर है 🌅'
            ],
            en: [
                'Your intense passion will create a deep connection today 🔥',
                'A secret crush may finally be revealed 💕',
                'Trust your instincts - they\'re guiding you toward love 🌙',
                'Your magnetic presence draws others to you 🧲',
                'A transformation in your love life is on the horizon 🌅'
            ]
        },
        advice: {
            hi: 'भेद्यता वास्तविक अंतरंगता को खोलने की कुंजी है 🔑',
            en: 'Vulnerability is the key to unlocking true intimacy 🔑'
        }
    },
    sagittarius: {
        name: { hi: 'धनु', en: 'Sagittarius' },
        symbol: '♐',
        emoji: '🏹',
        love: {
            hi: [
                'आपकी साहसिक भावना आपको एक रोमांचक रोमांस की ओर ले जाएगी 🌟',
                'प्यार एक यात्रा है - हर कदम का आनंद लें 🚀',
                'आपका आशावाद संक्रामक और आकर्षक है 💫',
                'एक मजेदार यात्रा रोमांटिक याद बन सकती है 🌄',
                'आपकी ईमानदारी आपके रिश्ते को मजबूत करेगी 💪'
            ],
            en: [
                'Your adventurous spirit will lead you to an exciting romance 🌟',
                'Love is a journey - enjoy every step of it 🚀',
                'Your optimism is contagious and attractive 💫',
                'A fun outing could turn into a romantic memory 🌄',
                'Your honesty will strengthen your relationship 💪'
            ]
        },
        advice: {
            hi: 'प्यार सबसे बड़ा साहसिक कार्य है 🌍',
            en: 'Love is the greatest adventure of all 🌍'
        }
    },
    capricorn: {
        name: { hi: 'मकर', en: 'Capricorn' },
        symbol: '♑',
        emoji: '🏔️',
        love: {
            hi: [
                'आपका समर्पण गहरे प्यार से पुरस्कृत होगा 💎',
                'एक रोमांटिक मील का पत्थर पहुंच के भीतर है 🏆',
                'आपका जिम्मेदार स्वभाव आपको एक विश्वसनीय पार्टनर बनाता है 🤝',
                'प्यार विश्वास और सम्मान की नींव पर बनता है 🏠',
                'एक सार्थक प्रतिबद्धता क्षितिज पर हो सकती है 💍'
            ],
            en: [
                'Your dedication will be rewarded with deep love 💎',
                'A romantic milestone is within reach 🏆',
                'Your responsible nature makes you a reliable partner 🤝',
                'Love builds on a foundation of trust and respect 🏠',
                'A meaningful commitment could be on the horizon 💍'
            ]
        },
        advice: {
            hi: 'प्यार में सफलता धैर्य और प्रयास से मिलती है 🌱',
            en: 'Success in love comes from patience and effort 🌱'
        }
    },
    aquarius: {
        name: { hi: 'कुंभ', en: 'Aquarius' },
        symbol: '♒',
        emoji: '💡',
        love: {
            hi: [
                'आपका अनोखा दृष्टिकोण एक समान विचारधारा को आकर्षित करेगा ✨',
                'प्यार अपरंपरागत रूपों में आता है - इसे अपनाएं 🌈',
                'आपकी स्वतंत्रता आपको दूसरों के लिए आकर्षक बनाती है 💫',
                'एक रचनात्मक डेट आइडिया स्थायी प्रभाव छोड़ेगा 🎨',
                'आपकी प्रामाणिकता आपका सबसे आकर्षक गुण है 💎'
            ],
            en: [
                'Your unique perspective will attract a kindred spirit ✨',
                'Love comes in unconventional forms - embrace it 🌈',
                'Your independence makes you fascinating to others 💫',
                'A creative date idea will leave a lasting impression 🎨',
                'Your authenticity is your most attractive quality 💎'
            ]
        },
        advice: {
            hi: 'अपने आप से सच्चे रहें - सही प्यार आपका पीछा करेगा 🌟',
            en: 'Stay true to yourself - the right love will follow 🌟'
        }
    },
    pisces: {
        name: { hi: 'मीन', en: 'Pisces' },
        symbol: '♓',
        emoji: '🐟',
        love: {
            hi: [
                'आपकी सहानुभूति और करुणा आपके संबंध को गहरा करेगी 💕',
                'एक रोमांटिक सपना एक खूबसूरत वास्तविकता बन सकता है 🌙',
                'आपकी कलात्मक आत्मा प्यार और प्रशंसा को आकर्षित करती है 🎨',
                'आपका एक दयालु शब्द किसी का दिन बना सकता है 💫',
                'प्यार पानी की तरह बहता है - इसे आपका मार्गदर्शन करने दें 🌊'
            ],
            en: [
                'Your empathy and compassion will deepen your connection 💕',
                'A romantic dream could become a beautiful reality 🌙',
                'Your artistic soul attracts love and admiration 🎨',
                'A kind word from you could make someone\'s day 💫',
                'Love flows like water - let it guide you 🌊'
            ]
        },
        advice: {
            hi: 'आपका दिल रास्ता जानता है - अपने सपनों पर भरोसा करें 🌙',
            en: 'Your heart knows the way - trust your dreams 🌙'
        }
    }
};

// ===== Daily Love Tips (Hindi & English) =====
const dailyTips = {
    hi: [
        'अपने पार्टनर को एक छोटा सा सरप्राइज़ दें - प्यार छोटी-छोटी बातों में बसता है ❤️',
        'आज अपने पार्टनर की तारीफ करना न भूलें - यह रिश्ते को मजबूत बनाता है 💕',
        'एक-दूसरे के लिए समय निकालें - यही सबसे बड़ा उपहार है 🌸',
        'प्यार में ईमानदारी सबसे महत्वपूर्ण है - सच बोलें 💌',
        'अपने पार्टनर के सपनों को सुनें और उन्हें साकार करने में मदद करें 🌟'
    ],
    en: [
        'Surprise your partner with something small - love lives in little things ❤️',
        'Don\'t forget to compliment your partner today - it strengthens the bond 💕',
        'Make time for each other - it\'s the greatest gift 🌸',
        'Honesty is most important in love - speak the truth 💌',
        'Listen to your partner\'s dreams and help them come true 🌟'
    ]
};

// ===== App State =====
let currentSign = null;
let currentLang = 'hi';
let currentTheme = 'dark';

// ===== DOM Elements =====
const zodiacItems = document.querySelectorAll('.zodiac-item');
const zodiacNameDisplay = document.getElementById('zodiacName');
const resultContent = document.getElementById('resultContent');
const currentDateDisplay = document.getElementById('currentDate');
const themeToggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');
const langLabel = document.getElementById('langLabel');
const shareBtn = document.getElementById('shareBtn');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const toastIcon = document.getElementById('toastIcon');
const tipText = document.getElementById('tipText');
const tipTitle = document.getElementById('tipTitle');
const placeholderMsg = document.getElementById('placeholderMsg');
const resultTitle = document.getElementById('resultTitle');
const tagline = document.getElementById('tagline');

// ===== Utility Functions =====
function getRandomPrediction(predictions) {
    return predictions[Math.floor(Math.random() * predictions.length)];
}

function getRandomTip(lang) {
    const tips = dailyTips[lang] || dailyTips.hi;
    return tips[Math.floor(Math.random() * tips.length)];
}

function formatDate(lang) {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const dateStr = now.toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-US', options);
    return dateStr;
}

function getLoveAdvice(sign, lang) {
    const data = zodiacData[sign];
    if (!data) return lang === 'hi' ? 'अपने दिल का अनुसरण करें ❤️' : 'Follow your heart ❤️';
    return data.advice[lang] || data.advice.hi;
}

// ===== Toast Notification =====
function showToast(message, icon = 'fas fa-check-circle') {
    toastMessage.textContent = message;
    toastIcon.className = icon;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ===== Render Horoscope =====
function renderHoroscope(sign, lang) {
    const data = zodiacData[sign];
    if (!data) return;

    const predictions = data.love[lang] || data.love.hi;
    const prediction = getRandomPrediction(predictions);
    const advice = getLoveAdvice(sign, lang);
    const currentTime = new Date().toLocaleTimeString(lang === 'hi' ? 'hi-IN' : 'en-US', { 
        hour: '2-digit', 
        minute: '2-digit' 
    });
    
    const signName = data.name[lang] || data.name.hi;
    const rating = (Math.random() * 20 + 80).toFixed(0);

    resultContent.innerHTML = `
        <div class="horoscope-text">
            <span class="emoji">${data.emoji}</span>
            ${prediction}
            <br><br>
            <span class="highlight">💫 ${lang === 'hi' ? 'ब्रह्मांडीय सलाह' : 'Cosmic Advice'}:</span> ${advice}
        </div>
        <div class="horoscope-meta">
            <span><i class="fas fa-sun"></i> ${data.symbol} ${signName}</span>
            <span><i class="fas fa-clock"></i> ${currentTime}</span>
            <span><i class="fas fa-star"></i> ${lang === 'hi' ? 'आज की प्रेम ऊर्जा' : "Today's Love Energy"}: ${rating}%</span>
        </div>
    `;

    // Update selected zodiac display
    zodiacNameDisplay.textContent = `${data.symbol} ${signName}`;

    // Update daily tip
    tipText.textContent = getRandomTip(lang);
    tipTitle.textContent = lang === 'hi' ? '💡 आज का प्रेम टिप' : '💡 Today\'s Love Tip';
}

// ===== Handle Zodiac Selection =====
function selectZodiac(sign) {
    zodiacItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.sign === sign) {
            item.classList.add('active');
        }
    });

    currentSign = sign;
    renderHoroscope(sign, currentLang);

    // Add subtle animation to result
    const result = document.querySelector('.horoscope-result');
    result.style.animation = 'none';
    requestAnimationFrame(() => {
        result.style.animation = 'fadeInUp 0.5s ease';
    });
}

// ===== Theme Toggle =====
function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    const icon = themeToggle.querySelector('i');
    icon.className = currentTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    showToast(
        currentTheme === 'dark' ? '🌙 डार्क मोड' : '☀️ लाइट मोड',
        'fas fa-adjust'
    );
}

// ===== Language Toggle =====
function toggleLanguage() {
    currentLang = currentLang === 'hi' ? 'en' : 'hi';
    langLabel.textContent = currentLang === 'hi' ? 'हिंदी' : 'English';
    
    // Update all text elements
    updateLanguage(currentLang);
    
    // Re-render current horoscope if selected
    if (currentSign) {
        renderHoroscope(currentSign, currentLang);
    }
    
    // Update daily tip
    tipText.textContent = getRandomTip(currentLang);
    tipTitle.textContent = currentLang === 'hi' ? '💡 आज का प्रेम टिप' : '💡 Today\'s Love Tip';
    
    showToast(
        currentLang === 'hi' ? '🇮🇳 हिंदी में बदला' : '🇬🇧 Switched to English',
        'fas fa-language'
    );
}

// ===== Update Language =====
function updateLanguage(lang) {
    // Update placeholder
    placeholderMsg.textContent = lang === 'hi' 
        ? 'अपनी राशि चुनें और जानें अपने प्रेम का भविष्य' 
        : 'Select your zodiac to know your love future';
    
    // Update result title
    resultTitle.textContent = lang === 'hi' 
        ? '💕 आज का प्रेम राशिफल' 
        : '💕 Today\'s Love Horoscope';
    
    // Update tagline
    tagline.textContent = lang === 'hi' 
        ? '❤️ जानें अपने दिल के राज़ ❤️' 
        : '❤️ Discover the secrets of your heart ❤️';
    
    // Update footer text
    document.getElementById('footerDesc').textContent = lang === 'hi'
        ? 'हर दिन आपके लिए सटीक प्रेम राशिफल'
        : 'Accurate love horoscope for you every day';
    
    document.getElementById('linkHome').innerHTML = `<i class="fas fa-home"></i> ${lang === 'hi' ? 'होम' : 'Home'}`;
    document.getElementById('linkAbout').innerHTML = `<i class="fas fa-info-circle"></i> ${lang === 'hi' ? 'हमारे बारे में' : 'About Us'}`;
    document.getElementById('linkContact').innerHTML = `<i class="fas fa-envelope"></i> ${lang === 'hi' ? 'संपर्क करें' : 'Contact'}`;
    document.getElementById('linkPrivacy').innerHTML = `<i class="fas fa-lock"></i> ${lang === 'hi' ? 'गोपनीयता' : 'Privacy'}`;
    
    document.getElementById('footerCopy').textContent = lang === 'hi'
        ? '© 2026 Love Rashifal | ❤️ सभी अधिकार सुरक्षित'
        : '© 2026 Love Rashifal | ❤️ All Rights Reserved';
    
    document.getElementById('termsLink').textContent = lang === 'hi' ? 'नियम' : 'Terms';
    document.getElementById('policyLink').textContent = lang === 'hi' ? 'नीति' : 'Policy';
    document.getElementById('sitemapLink').textContent = lang === 'hi' ? 'साइटमैप' : 'Sitemap';
    
    // Update newsletter placeholder
    document.querySelector('.footer-newsletter input').placeholder = lang === 'hi'
        ? '📧 ईमेल सब्सक्राइब करें'
        : '📧 Subscribe via Email';
    
    // Update zodiac signs
    document.querySelectorAll('.zodiac-item').forEach(item => {
        const sign = item.dataset.sign;
        if (sign && zodiacData[sign]) {
            const name = zodiacData[sign].name[lang] || zodiacData[sign].name.hi;
            const symbol = zodiacData[sign].symbol;
            item.querySelector('span').textContent = `${symbol} ${name}`;
        }
    });
    
    // Update date
    currentDateDisplay.textContent = formatDate(lang);
}

// ===== Share Functionality =====
function shareApp() {
    const shareData = {
        title: 'Love Rashifal - प्रेम राशिफल',
        text: '❤️ आज का प्रेम राशिफल जानें और अपने प्यार का भविष्य देखें! ❤️\n\n' + 
              (currentSign ? `${zodiacData[currentSign].symbol} ${zodiacData[currentSign].name[currentLang]}` : 'अपनी राशि चुनें') + 
              '\n\n✨ Download Love Rashifal App Now!',
        url: window.location.href
    };

    if (navigator.share) {
        navigator.share(shareData)
            .then(() => showToast('❤️ शेयर किया!', 'fas fa-heart'))
            .catch(() => {});
    } else {
        // Fallback - copy to clipboard
        const text = `${shareData.text}\n${shareData.url}`;
        navigator.clipboard.writeText(text)
            .then(() => {
                showToast(currentLang === 'hi' ? '📋 कॉपी किया गया!' : '📋 Copied!', 'fas fa-copy');
            })
            .catch(() => {
                // Older fallback
                const textArea = document.createElement('textarea');
                textArea.value = text;
                document.body.appendChild(textArea);
                textArea.select();
                try {
                    document.execCommand('copy');
                    showToast(currentLang === 'hi' ? '📋 कॉपी किया गया!' : '📋 Copied!', 'fas fa-copy');
                } catch (err) {
                    showToast(currentLang === 'hi' ? '❌ शेयर नहीं कर पाए' : '❌ Could not share', 'fas fa-exclamation-circle');
                }
                document.body.removeChild(textArea);
            });
    }
}

// ===== Newsletter Subscription =====
function subscribeNewsletter() {
    const input = document.getElementById('newsletterInput');
    const email = input.value.trim();
    
    if (!email) {
        showToast(
            currentLang === 'hi' ? '📧 कृपया ईमेल दर्ज करें' : '📧 Please enter an email',
            'fas fa-exclamation-circle'
        );
        return;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
        showToast(
            currentLang === 'hi' ? '⚠️ कृपया सही ईमेल दर्ज करें' : '⚠️ Please enter a valid email',
            'fas fa-exclamation-circle'
        );
        return;
    }
    
    // Simulate subscription
    showToast(
        currentLang === 'hi' ? '✅ सब्सक्राइब हो गए! ❤️' : '✅ Subscribed! ❤️',
        'fas fa-check-circle'
    );
    input.value = '';
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
});

themeToggle.addEventListener('click', toggleTheme);

langToggle.addEventListener('click', toggleLanguage);

shareBtn.addEventListener('click', shareApp);

document.getElementById('newsletterBtn').addEventListener('click', subscribeNewsletter);
document.getElementById('newsletterInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') subscribeNewsletter();
});

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
    } else if (e.key === 's' || e.key === 'S') {
        e.preventDefault();
        shareApp();
    } else if (e.key === 't' || e.key === 'T') {
        e.preventDefault();
        toggleTheme();
    } else if (e.key === 'l' || e.key === 'L') {
        e.preventDefault();
        toggleLanguage();
    }
});

// ===== Initialize App =====
function initApp() {
    // Set initial date
    currentDateDisplay.textContent = formatDate('hi');
    
    // Set initial daily tip
    tipText.textContent = getRandomTip('hi');
    
    // Initialize particles
    initParticles();
    
    // Set initial language
    updateLanguage('hi');
    
    // Add entrance animation
    document.querySelector('.container').style.opacity = '0';
    requestAnimationFrame(() => {
        document.querySelector('.container').style.transition = 'opacity 0.8s ease';
        document.querySelector('.container').style.opacity = '1';
    });
    
    console.log('❤️ Love Rashifal v2.0');
    console.log('✨ Made with love for you');
    console.log('📅 Daily love horoscopes in Hindi & English');
    console.log('⌨️  Keyboard shortcuts: S=Share, T=Theme, L=Language');
}

// ===== Start App =====
document.addEventListener('DOMContentLoaded', initApp);
