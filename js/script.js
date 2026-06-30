// =========================================
// Love Rashifal - Main Application Script
// =========================================

// ===== Zodiac Data =====
const zodiacData = {
    aries: {
        name: { hi: 'मेष', en: 'Aries' },
        symbol: '♈',
        emoji: '🔥',
        element: 'अग्नि',
        love: {
            hi: ['आपकी उत्साही ऊर्जा आज किसी खास को आकर्षित करेगी ❤️', 'एक अप्रत्याशित रोमांटिक इशारा आपका दिल चुरा लेगा 💕', 'अकेले लोगों को किसी मित्र के माध्यम से प्यार मिल सकता है 💑', 'अपनी भावनाओं को खुलकर व्यक्त करें - समय सही है 💌', 'एक सरप्राइज डेट आपका दिन बना सकती है 🌹'],
            en: ['Your passionate energy attracts someone special today ❤️', 'An unexpected romantic gesture will make your heart skip 💕', 'Singles may find love through a mutual friend 💑', 'Express your feelings openly - the time is right 💌', 'A surprise date invitation could change everything 🌹']
        },
        advice: { hi: 'दिल के मामलों में बहादुर बनें लेकिन धैर्य रखें 💪', en: 'Be bold but patient in matters of the heart 💪' }
    },
    taurus: {
        name: { hi: 'वृषभ', en: 'Taurus' },
        symbol: '♉',
        emoji: '🌹',
        element: 'पृथ्वी',
        love: {
            hi: ['आपकी वफादारी और गर्मजोशी रिश्ते को और गहरा करेगी 💞', 'एक रोमांटिक डिनर शाम को जादुई बना सकता है ✨', 'आपका स्थिर स्वभाव आपको अप्रतिरोध्य बनाता है 💖', 'कोई आपकी प्रशंसा कर रहा है - पहला कदम बढ़ाएं 🌸', 'एक दिल की बात आपके रिश्ते को मजबूत करेगी 💕'],
            en: ['Your loyalty and warmth will deepen an existing bond 💞', 'A romantic dinner could lead to a magical evening ✨', 'Your steady nature makes you irresistible today 💖', 'Someone admires you from afar - make the first move 🌸', 'A heartfelt conversation will strengthen your connection 💕']
        },
        advice: { hi: 'प्यार की धीमी और स्थिर लय पर भरोसा करें 🌊', en: 'Trust the slow and steady rhythm of love 🌊' }
    },
    gemini: {
        name: { hi: 'मिथुन', en: 'Gemini' },
        symbol: '♊',
        emoji: '💬',
        element: 'वायु',
        love: {
            hi: ['आपकी बुद्धिमत्ता और आकर्षण किसी नए को मोहित करेगी ✨', 'एक गहरी बातचीत रोमांटिक चिंगारी पैदा कर सकती है 💕', 'प्यार आपको सबसे अप्रत्याशित जगहों पर मिलता है 🌟', 'आपकी चंचल ऊर्जा सकारात्मक ध्यान आकर्षित करती है 💫', 'क्रश का संदेश आपका दिन रोशन कर सकता है 📱'],
            en: ['Your wit and charm will captivate someone new ✨', 'A deep conversation could spark a romantic flame 💕', 'Love finds you in the most unexpected places 🌟', 'Your playful energy attracts positive attention 💫', 'A message from a crush might brighten your day 📱']
        },
        advice: { hi: 'अपनी जिज्ञासा को नए कनेक्शन की ओर ले जाने दें 🦋', en: 'Let your curiosity guide you to new connections 🦋' }
    },
    cancer: {
        name: { hi: 'कर्क', en: 'Cancer' },
        symbol: '♋',
        emoji: '🌊',
        element: 'जल',
        love: {
            hi: ['आपका देखभाल करने वाला स्वभाव आपको पार्टनर के करीब लाएगा 💕', 'पार्टनर का रोमांटिक इशारा आपका दिल गर्म करेगा 💖', 'अकेले लोगों को किसी परिचित चेहरे में प्यार मिल सकता है 🌸', 'अपने अंतर्ज्ञान पर भरोसा करें - यह प्यार का रास्ता जानता है 🌙', 'घर वह जगह है जहां दिल है - एक आरामदायक डेट प्लान करें 🏠'],
            en: ['Your nurturing nature will bring you closer to your partner 💕', 'A romantic gesture from your partner will warm your heart 💖', 'Singles may find love in a familiar face 🌸', 'Trust your intuition - it knows the way to love 🌙', 'Home is where the heart is - plan a cozy date 🏠']
        },
        advice: { hi: 'आपकी भावनात्मक गहराई आपकी सबसे बड़ी ताकत है 💎', en: 'Your emotional depth is your greatest strength 💎' }
    },
    leo: {
        name: { hi: 'सिंह', en: 'Leo' },
        symbol: '♌',
        emoji: '👑',
        element: 'अग्नि',
        love: {
            hi: ['आपका करिश्मा आज चमकता है, प्रशंसकों को आकर्षित करता है ✨', 'एक शानदार रोमांटिक इशारा आपको प्यार का एहसास दिलाएगा 💕', 'आपका आत्मविश्वास आपको दूसरों के लिए चुंबकीय बनाता है 🧲', 'प्यार आज आपके जीवन में केंद्र स्थान लेता है 🌟', 'एक भावुक मुलाकात कुछ और बन सकती है 💖'],
            en: ['Your charisma shines bright today, attracting admirers ✨', 'A grand romantic gesture will leave you feeling adored 💕', 'Your confidence makes you magnetic to others 🧲', 'Love takes center stage in your life today 🌟', 'A passionate encounter could become something more 💖']
        },
        advice: { hi: 'अपने दिल को प्यार और आत्मविश्वास से दहाड़ने दें 🦁', en: 'Let your heart roar with love and confidence 🦁' }
    },
    virgo: {
        name: { hi: 'कन्या', en: 'Virgo' },
        symbol: '♍',
        emoji: '📝',
        element: 'पृथ्वी',
        love: {
            hi: ['विवरणों पर आपका ध्यान पार्टनर को खास महसूस कराता है 💕', 'एक विचारशील इशारा आपके प्यार के बारे में बहुत कुछ बताएगा 💌', 'प्यार छोटे-छोटे पलों में बढ़ता है - उन्हें अपनाएं 🌸', 'आपका व्यावहारिक स्वभाव रिश्तों में स्थिरता लाता है 🏠', 'एक सार्थक बातचीत आपके बंधन को गहरा करेगी 💞'],
            en: ['Your attention to detail makes your partner feel cherished 💕', 'A thoughtful gesture will speak volumes about your love 💌', 'Love grows in the little moments - embrace them 🌸', 'Your practical nature brings stability to relationships 🏠', 'A meaningful conversation will deepen your bond 💞']
        },
        advice: { hi: 'पूर्णता लक्ष्य नहीं है - प्यार और विकास है 🌱', en: "Perfection isn't the goal - love and growth are 🌱" }
    },
    libra: {
        name: { hi: 'तुला', en: 'Libra' },
        symbol: '♎',
        emoji: '⚖️',
        element: 'वायु',
        love: {
            hi: ['आपका आकर्षण और कूटनीति किसी भी संघर्ष को सुलझाएगी 🤝', 'एक रोमांटिक साझेदारी सुंदर मोड़ लेती है 💕', 'निष्पक्षता की आपकी भावना आपको एक अद्भुत पार्टनर बनाती है 💖', 'प्यार आज आपके जीवन में सामंजस्य पाता है 🌈', 'एक खूबसूरत डेट कुछ नई शुरुआत हो सकती है 🌹'],
            en: ['Your charm and diplomacy will smooth over any conflict 🤝', 'A romantic partnership takes a beautiful turn 💕', 'Your sense of fairness makes you a wonderful partner 💖', 'Love finds harmony in your life today 🌈', 'A beautiful date could be the start of something new 🌹']
        },
        advice: { hi: 'सर्वोत्तम परिणामों के लिए अपने दिल और दिमाग को संतुलित करें ⚖️', en: 'Balance your heart and your head for the best outcomes ⚖️' }
    },
    scorpio: {
        name: { hi: 'वृश्चिक', en: 'Scorpio' },
        symbol: '♏',
        emoji: '🦂',
        element: 'जल',
        love: {
            hi: ['आपका गहन जुनून आज एक गहरा संबंध बनाएगा 🔥', 'एक गुप्त क्रश आखिरकार सामने आ सकता है 💕', 'अपनी प्रवृत्ति पर भरोसा करें - वे आपको प्यार की ओर ले जा रही हैं 🌙', 'आपकी चुंबकीय उपस्थिति दूसरों को आकर्षित करती है 🧲', 'आपके प्रेम जीवन में एक परिवर्तन क्षितिज पर है 🌅'],
            en: ['Your intense passion will create a deep connection today 🔥', 'A secret crush may finally be revealed 💕', 'Trust your instincts - they\'re guiding you toward love 🌙', 'Your magnetic presence draws others to you 🧲', 'A transformation in your love life is on the horizon 🌅']
        },
        advice: { hi: 'भेद्यता वास्तविक अंतरंगता को खोलने की कुंजी है 🔑', en: 'Vulnerability is the key to unlocking true intimacy 🔑' }
    },
    sagittarius: {
        name: { hi: 'धनु', en: 'Sagittarius' },
        symbol: '♐',
        emoji: '🏹',
        element: 'अग्नि',
        love: {
            hi: ['आपकी साहसिक भावना आपको एक रोमांचक रोमांस की ओर ले जाएगी 🌟', 'प्यार एक यात्रा है - हर कदम का आनंद लें 🚀', 'आपका आशावाद संक्रामक और आकर्षक है 💫', 'एक मजेदार यात्रा रोमांटिक याद बन सकती है 🌄', 'आपकी ईमानदारी आपके रिश्ते को मजबूत करेगी 💪'],
            en: ['Your adventurous spirit will lead you to an exciting romance 🌟', 'Love is a journey - enjoy every step of it 🚀', 'Your optimism is contagious and attractive 💫', 'A fun outing could turn into a romantic memory 🌄', 'Your honesty will strengthen your relationship 💪']
        },
        advice: { hi: 'प्यार सबसे बड़ा साहसिक कार्य है 🌍', en: 'Love is the greatest adventure of all 🌍' }
    },
    capricorn: {
        name: { hi: 'मकर', en: 'Capricorn' },
        symbol: '♑',
        emoji: '🏔️',
        element: 'पृथ्वी',
        love: {
            hi: ['आपका समर्पण गहरे प्यार से पुरस्कृत होगा 💎', 'एक रोमांटिक मील का पत्थर पहुंच के भीतर है 🏆', 'आपका जिम्मेदार स्वभाव आपको एक विश्वसनीय पार्टनर बनाता है 🤝', 'प्यार विश्वास और सम्मान की नींव पर बनता है 🏠', 'एक सार्थक प्रतिबद्धता क्षितिज पर हो सकती है 💍'],
            en: ['Your dedication will be rewarded with deep love 💎', 'A romantic milestone is within reach 🏆', 'Your responsible nature makes you a reliable partner 🤝', 'Love builds on a foundation of trust and respect 🏠', 'A meaningful commitment could be on the horizon 💍']
        },
        advice: { hi: 'प्यार में सफलता धैर्य और प्रयास से मिलती है 🌱', en: 'Success in love comes from patience and effort 🌱' }
    },
    aquarius: {
        name: { hi: 'कुंभ', en: 'Aquarius' },
        symbol: '♒',
        emoji: '💡',
        element: 'वायु',
        love: {
            hi: ['आपका अनोखा दृष्टिकोण एक समान विचारधारा को आकर्षित करेगा ✨', 'प्यार अपरंपरागत रूपों में आता है - इसे अपनाएं 🌈', 'आपकी स्वतंत्रता आपको दूसरों के लिए आकर्षक बनाती है 💫', 'एक रचनात्मक डेट आइडिया स्थायी प्रभाव छोड़ेगा 🎨', 'आपकी प्रामाणिकता आपका सबसे आकर्षक गुण है 💎'],
            en: ['Your unique perspective will attract a kindred spirit ✨', 'Love comes in unconventional forms - embrace it 🌈', 'Your independence makes you fascinating to others 💫', 'A creative date idea will leave a lasting impression 🎨', 'Your authenticity is your most attractive quality 💎']
        },
        advice: { hi: 'अपने आप से सच्चे रहें - सही प्यार आपका पीछा करेगा 🌟', en: 'Stay true to yourself - the right love will follow 🌟' }
    },
    pisces: {
        name: { hi: 'मीन', en: 'Pisces' },
        symbol: '♓',
        emoji: '🐟',
        element: 'जल',
        love: {
            hi: ['आपकी सहानुभूति और करुणा आपके संबंध को गहरा करेगी 💕', 'एक रोमांटिक सपना एक खूबसूरत वास्तविकता बन सकता है 🌙', 'आपकी कलात्मक आत्मा प्यार और प्रशंसा को आकर्षित करती है 🎨', 'आपका एक दयालु शब्द किसी का दिन बना सकता है 💫', 'प्यार पानी की तरह बहता है - इसे आपका मार्गदर्शन करने दें 🌊'],
            en: ['Your empathy and compassion will deepen your connection 💕', 'A romantic dream could become a beautiful reality 🌙', 'Your artistic soul attracts love and admiration 🎨', 'A kind word from you could make someone\'s day 💫', 'Love flows like water - let it guide you 🌊']
        },
        advice: { hi: 'आपका दिल रास्ता जानता है - अपने सपनों पर भरोसा करें 🌙', en: 'Your heart knows the way - trust your dreams 🌙' }
    }
};

// ===== Daily Tips =====
const dailyTips = {
    hi: ['अपने पार्टनर को एक छोटा सा सरप्राइज़ दें ❤️', 'आज अपने पार्टनर की तारीफ करना न भूलें 💕', 'एक-दूसरे के लिए समय निकालें 🌸', 'प्यार में ईमानदारी सबसे महत्वपूर्ण है 💌', 'अपने पार्टनर के सपनों को सुनें 🌟', 'एक-दूसरे की भावनाओं को समझें 💖', 'प्यार में धैर्य रखें 🌱'],
    en: ['Surprise your partner with something small ❤️', "Don't forget to compliment your partner today 💕", 'Make time for each other 🌸', 'Honesty is most important in love 💌', 'Listen to your partner\'s dreams 🌟', 'Understand each other\'s feelings 💖', 'Be patient in love 🌱']
};

// ===== Match Rashi Data =====
const matchRashi = {
    aries: { best: ['leo', 'sagittarius'], good: ['gemini', 'libra'], avoid: ['cancer', 'capricorn'] },
    taurus: { best: ['virgo', 'capricorn'], good: ['cancer', 'pisces'], avoid: ['leo', 'aquarius'] },
    gemini: { best: ['libra', 'aquarius'], good: ['aries', 'leo'], avoid: ['virgo', 'pisces'] },
    cancer: { best: ['scorpio', 'pisces'], good: ['taurus', 'virgo'], avoid: ['aries', 'libra'] },
    leo: { best: ['aries', 'sagittarius'], good: ['gemini', 'libra'], avoid: ['taurus', 'scorpio'] },
    virgo: { best: ['taurus', 'capricorn'], good: ['cancer', 'scorpio'], avoid: ['gemini', 'sagittarius'] },
    libra: { best: ['gemini', 'aquarius'], good: ['aries', 'leo'], avoid: ['cancer', 'capricorn'] },
    scorpio: { best: ['cancer', 'pisces'], good: ['virgo', 'capricorn'], avoid: ['leo', 'aquarius'] },
    sagittarius: { best: ['aries', 'leo'], good: ['libra', 'aquarius'], avoid: ['virgo', 'pisces'] },
    capricorn: { best: ['taurus', 'virgo'], good: ['scorpio', 'pisces'], avoid: ['aries', 'libra'] },
    aquarius: { best: ['gemini', 'libra'], good: ['aries', 'sagittarius'], avoid: ['taurus', 'scorpio'] },
    pisces: { best: ['cancer', 'scorpio'], good: ['taurus', 'capricorn'], avoid: ['gemini', 'sagittarius'] }
};

// ===== App State =====
let currentFeature = null;
let currentSign = null;
let currentLang = 'hi';
let currentTheme = 'dark';
let currentResult = null;

// ===== DOM Elements =====
const loadingScreen = document.getElementById('loadingScreen');
const progressBar = document.getElementById('progressBar');
const loadingText = document.getElementById('loadingText');
const mainApp = document.getElementById('mainApp');
const themeToggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');
const langLabel = document.getElementById('langLabel');
const currentDateDisplay = document.getElementById('currentDate');
const featureCards = document.querySelectorAll('.feature-card');
const zodiacItemsSmall = document.querySelectorAll('.zodiac-item-small');
const resultBody = document.getElementById('resultBody');
const resultPlaceholder = document.getElementById('resultPlaceholder');
const resultIcon = document.getElementById('resultIcon');
const resultFeatureTitle = document.getElementById('resultFeatureTitle');
const shareSection = document.getElementById('shareSection');
const shareResultBtn = document.getElementById('shareResultBtn');
const shareOptions = document.getElementById('shareOptions');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const toastIcon = document.getElementById('toastIcon');

// ===== Loading Screen =====
function startLoading() {
    let progress = 0;
    const steps = [
        { progress: 20, text: '🌟 राशियाँ लोड हो रही हैं...' },
        { progress: 40, text: '💫 ज्योतिषीय गणना हो रही है...' },
        { progress: 60, text: '❤️ प्रेम ऊर्जा मापी जा रही है...' },
        { progress: 80, text: '✨ आपके लिए तैयार किया जा रहा है...' },
        { progress: 100, text: '🎉 तैयार! आपका राशिफल इंतज़ार कर रहा है...' }
    ];

    let stepIndex = 0;
    
    const interval = setInterval(() => {
        progress += 2;
        progressBar.style.width = progress + '%';
        
        if (stepIndex < steps.length && progress >= steps[stepIndex].progress) {
            loadingText.textContent = steps[stepIndex].text;
            stepIndex++;
        }
        
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                loadingScreen.classList.add('fade-out');
                mainApp.style.display = 'flex';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    initApp();
                }, 800);
            }, 500);
        }
    }, 50);
}

// ===== Toast =====
function showToast(message, icon = 'fas fa-check-circle') {
    toastMessage.textContent = message;
    toastIcon.className = icon;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// ===== Format Date =====
function formatDate(lang) {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return now.toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-US', options);
}

// ===== Get Random =====
function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// ===== Get Love Score =====
function getLoveScore(sign) {
    return Math.floor(Math.random() * 30) + 70;
}

// ===== Get Mood =====
function getMood(sign) {
    const moods = [
        { emoji: '😊', text: { hi: 'खुश', en: 'Happy' }, score: 85 },
        { emoji: '🥰', text: { hi: 'प्यार में', en: 'In Love' }, score: 90 },
        { emoji: '😌', text: { hi: 'शांत', en: 'Calm' }, score: 75 },
        { emoji: '🤗', text: { hi: 'उत्साहित', en: 'Excited' }, score: 88 },
        { emoji: '😍', text: { hi: 'मोहित', en: 'Charmed' }, score: 92 },
        { emoji: '🤔', text: { hi: 'सोच में', en: 'Thoughtful' }, score: 70 },
        { emoji: '💕', text: { hi: 'रोमांटिक', en: 'Romantic' }, score: 95 },
        { emoji: '😇', text: { hi: 'शुभ', en: 'Blissful' }, score: 80 }
    ];
    return getRandom(moods);
}

// ===== Get Lucky Number =====
function getLuckyNumber(sign) {
    return Math.floor(Math.random() * 9) + 1;
}

// ===== Get Match Rashi =====
function getMatchRashi(sign, lang) {
    const data = matchRashi[sign];
    if (!data) return null;
    
    const best = data.best.map(s => zodiacData[s].name[lang] + ' ' + zodiacData[s].symbol);
    const good = data.good.map(s => zodiacData[s].name[lang] + ' ' + zodiacData[s].symbol);
    const avoid = data.avoid.map(s => zodiacData[s].name[lang] + ' ' + zodiacData[s].symbol);
    
    return { best, good, avoid };
}

// ===== Show Feature =====
function showFeature(feature) {
    currentFeature = feature;
    
    // Update active card
    featureCards.forEach(card => {
        card.classList.remove('active');
        if (card.dataset.feature === feature) {
            card.classList.add('active');
        }
    });
    
    // Update result header
    const titles = {
        horoscope: { hi: '🌟 दैनिक राशिफल', en: '🌟 Daily Horoscope' },
        match: { hi: '💑 मैच राशि', en: '💑 Match Rashi' },
        mood: { hi: '😊 मूड स्कोर', en: '😊 Mood Score' },
        love: { hi: '💕 लव स्कोर', en: '💕 Love Score' },
        advice: { hi: '💡 आज की सलाह', en: '💡 Today\'s Advice' },
        lucky: { hi: '🎲 लकी नंबर', en: '🎲 Lucky Number' }
    };
    
    const icons = {
        horoscope: 'fas fa-star',
        match: 'fas fa-handshake',
        mood: 'fas fa-smile',
        love: 'fas fa-heart',
        advice: 'fas fa-lightbulb',
        lucky: 'fas fa-dice'
    };
    
    resultFeatureTitle.textContent = titles[feature][currentLang] || titles[feature].hi;
    resultIcon.className = icons[feature] + ' pulse';
    
    // Show zodiac selector
    document.getElementById('zodiacSelector').style.display = 'block';
    
    // Clear previous selection
    zodiacItemsSmall.forEach(item => item.classList.remove('active'));
    currentSign = null;
    
    // Show placeholder
    resultPlaceholder.style.display = 'flex';
    resultPlaceholder.querySelector('span').textContent = currentLang === 'hi' 
        ? 'अपनी राशि चुनें और फीचर चुनें' 
        : 'Select your zodiac and feature';
    resultBody.innerHTML = '';
    resultBody.appendChild(resultPlaceholder);
    shareSection.style.display = 'none';
    
    // Scroll to result
    document.getElementById('featureResultPanel').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ===== Generate Result =====
function generateResult(sign, feature, lang) {
    const data = zodiacData[sign];
    if (!data) return;
    
    let html = '';
    let shareText = '';
    const signName = data.name[lang] || data.name.hi;
    const symbol = data.symbol;
    
    switch(feature) {
        case 'horoscope':
            const prediction = getRandom(data.love[lang] || data.love.hi);
            const advice = data.advice[lang] || data.advice.hi;
            html = `
                <div class="result-content">
                    <span class="emoji-big">${data.emoji}</span>
                    <p class="main-text">${prediction}</p>
                    <p class="sub-text">💫 ${lang === 'hi' ? 'सलाह' : 'Advice'}: ${advice}</p>
                    <p class="sub-text">⭐ ${lang === 'hi' ? 'आज की ऊर्जा' : 'Today\'s Energy'}: ${getLoveScore(sign)}%</p>
                </div>
            `;
            shareText = `🌟 ${symbol} ${signName} का आज का प्रेम राशिफल 🌟\n\n${prediction}\n\n💫 सलाह: ${advice}\n\n❤️ Love Rashifal App`;
            break;
            
        case 'match':
            const match = getMatchRashi(sign, lang);
            if (match) {
                html = `
                    <div class="result-content">
                        <span class="emoji-big">💑</span>
                        <p class="main-text">${symbol} ${signName} के लिए सर्वश्रेष्ठ राशियाँ</p>
                        <p class="sub-text">✅ ${lang === 'hi' ? 'सर्वोत्तम' : 'Best'}: ${match.best.join(', ')}</p>
                        <p class="sub-text">👍 ${lang === 'hi' ? 'अच्छी' : 'Good'}: ${match.good.join(', ')}</p>
                        <p class="sub-text">❌ ${lang === 'hi' ? 'टालें' : 'Avoid'}: ${match.avoid.join(', ')}</p>
                    </div>
                `;
                shareText = `💑 ${symbol} ${signName} के लिए मैच राशि 💑\n\n✅ सर्वोत्तम: ${match.best.join(', ')}\n👍 अच्छी: ${match.good.join(', ')}\n❌ टालें: ${match.avoid.join(', ')}\n\n❤️ Love Rashifal App`;
            }
            break;
            
        case 'mood':
            const mood = getMood(sign);
            html = `
                <div class="result-content">
                    <span class="emoji-big">${mood.emoji}</span>
                    <div class="score-circle">${mood.score}%</div>
                    <p class="main-text">${lang === 'hi' ? 'आपका आज का मूड' : "Today's Mood"} : ${mood.text[lang] || mood.text.hi}</p>
                    <p class="sub-text">${lang === 'hi' ? 'आपकी ऊर्जा सकारात्मक है! ✨' : 'Your energy is positive! ✨'}</p>
                </div>
            `;
            shareText = `😊 ${symbol} ${signName} का आज का मूड स्कोर 😊\n\n${mood.emoji} ${mood.text.hi} - ${mood.score}%\n\n✨ ऊर्जा: सकारात्मक!\n\n❤️ Love Rashifal App`;
            break;
            
        case 'love':
            const loveScore = getLoveScore(sign);
            const loveStatus = loveScore > 85 ? '💖' : loveScore > 70 ? '❤️' : '💔';
            html = `
                <div class="result-content">
                    <span class="emoji-big">${loveStatus}</span>
                    <div class="score-circle">${loveScore}%</div>
                    <p class="main-text">${lang === 'hi' ? 'आपका प्रेम ऊर्जा स्कोर' : 'Your Love Energy Score'}</p>
                    <p class="sub-text">${loveScore > 85 ? '🌹 आप प्यार में सराबोर हैं!' : loveScore > 70 ? '💕 प्यार अच्छा चल रहा है!' : '🌸 प्यार को थोड़ा समय दें'}</p>
                </div>
            `;
            shareText = `💕 ${symbol} ${signName} का लव स्कोर 💕\n\n${loveStatus} ${loveScore}%\n${loveScore > 85 ? '🌹 आप प्यार में सराबोर हैं!' : loveScore > 70 ? '💕 प्यार अच्छा चल रहा है!' : '🌸 प्यार को थोड़ा समय दें'}\n\n❤️ Love Rashifal App`;
            break;
            
        case 'advice':
            const tip = getRandom(dailyTips[lang] || dailyTips.hi);
            const adviceText = data.advice[lang] || data.advice.hi;
            html = `
                <div class="result-content">
                    <span class="emoji-big">💡</span>
                    <p class="main-text">💌 ${tip}</p>
                    <p class="sub-text">🌟 ${lang === 'hi' ? 'विशेष सलाह' : 'Special Advice'}: ${adviceText}</p>
                    <p class="sub-text">✨ ${lang === 'hi' ? 'आज का मंत्र' : "Today's Mantra"}: ${lang === 'hi' ? 'प्यार ही सब कुछ है ❤️' : 'Love is everything ❤️'}</p>
                </div>
            `;
            shareText = `💡 ${symbol} ${signName} के लिए आज की सलाह 💡\n\n💌 ${tip}\n\n🌟 विशेष सलाह: ${adviceText}\n\n❤️ Love Rashifal App`;
            break;
            
        case 'lucky':
            const luckyNum = getLuckyNumber(sign);
            const luckyColor = ['🔴 लाल', '🟠 नारंगी', '🟡 पीला', '🟢 हरा', '🔵 नीला', '🟣 बैंगनी', '⚪ सफेद', '⚫ काला', '🟤 भूरा'][luckyNum - 1];
            html = `
                <div class="result-content">
                    <span class="emoji-big">🎲</span>
                    <div class="score-circle" style="font-size: 2.5rem;">${luckyNum}</div>
                    <p class="main-text">${lang === 'hi' ? 'आपका आज का लकी नंबर' : "Today's Lucky Number"}</p>
                    <p class="sub-text">${lang === 'hi' ? 'भाग्यशाली रंग' : 'Lucky Color'}: ${luckyColor}</p>
                    <p class="sub-text">🌟 ${lang === 'hi' ? 'शुभ समय' : 'Lucky Time'}: ${Math.floor(Math.random() * 12 + 8)}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')} ${Math.random() > 0.5 ? 'AM' : 'PM'}</p>
                </div>
            `;
            shareText = `🎲 ${symbol} ${signName} का आज का लकी नंबर 🎲\n\nलकी नंबर: ${luckyNum}\nभाग्यशाली रंग: ${luckyColor}\n\n❤️ Love Rashifal App`;
            break;
    }
    
    // Update result
    resultBody.innerHTML = html;
    resultPlaceholder.style.display = 'none';
    shareSection.style.display = 'block';
    currentResult = shareText;
}

// ===== Handle Zodiac Selection =====
function selectZodiacForFeature(sign) {
    currentSign = sign;
    
    zodiacItemsSmall.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.sign === sign) {
            item.classList.add('active');
        }
    });
    
    if (currentFeature) {
        generateResult(sign, currentFeature, currentLang);
    }
}

// ===== Share Result =====
function shareResult(platform) {
    if (!currentResult) {
        showToast('❌ पहले राशिफल चेक करें', 'fas fa-exclamation-circle');
        return;
    }
    
    const text = currentResult + '\n\n📱 ' + window.location.href;
    
    switch(platform) {
        case 'whatsapp':
            window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
            break;
        case 'telegram':
            window.open(`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(currentResult)}`, '_blank');
            break;
        case 'twitter':
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
            break;
        case 'copy':
            navigator.clipboard.writeText(text)
                .then(() => showToast('📋 कॉपी किया गया!', 'fas fa-copy'))
                .catch(() => {
                    const textArea = document.createElement('textarea');
                    textArea.value = text;
                    document.body.appendChild(textArea);
                    textArea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textArea);
                    showToast('📋 कॉपी किया गया!', 'fas fa-copy');
                });
            break;
    }
}

// ===== Theme Toggle =====
function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    const icon = themeToggle.querySelector('i');
    icon.className = currentTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    showToast(currentTheme === 'dark' ? '🌙 डार्क मोड' : '☀️ लाइट मोड', 'fas fa-adjust');
}

// ===== Language Toggle =====
function toggleLanguage() {
    currentLang = currentLang === 'hi' ? 'en' : 'hi';
    langLabel.textContent = currentLang === 'hi' ? 'हिंदी' : 'English';
    updateLanguage(currentLang);
    if (currentSign && currentFeature) {
        generateResult(currentSign, currentFeature, currentLang);
    }
    showToast(currentLang === 'hi' ? '🇮🇳 हिंदी में बदला' : '🇬🇧 Switched to English', 'fas fa-language');
}

// ===== Update Language =====
function updateLanguage(lang) {
    // Update all text elements
    document.getElementById('fHoroscope').textContent = lang === 'hi' ? '🌟 दैनिक राशिफल' : '🌟 Daily Horoscope';
    document.getElementById('fHoroscopeDesc').textContent = lang === 'hi' ? 'आज का प्रेम राशिफल' : 'Today\'s Love Horoscope';
    
    document.getElementById('fMatch').textContent = lang === 'hi' ? '💑 मैच राशि' : '💑 Match Rashi';
    document.getElementById('fMatchDesc').textContent = lang === 'hi' ? 'राशि मिलान' : 'Zodiac Match';
    
    document.getElementById('fMood').textContent = lang === 'hi' ? '😊 मूड स्कोर' : '😊 Mood Score';
    document.getElementById('fMoodDesc').textContent = lang === 'hi' ? 'आज का मूड' : 'Today\'s Mood';
    
    document.getElementById('fLove').textContent = lang === 'hi' ? '💕 लव स्कोर' : '💕 Love Score';
    document.getElementById('fLoveDesc').textContent = lang === 'hi' ? 'प्रेम ऊर्जा' : 'Love Energy';
    
    document.getElementById('fAdvice').textContent = lang === 'hi' ? '💡 आज की सलाह' : '💡 Today\'s Advice';
    document.getElementById('fAdviceDesc').textContent = lang === 'hi' ? 'प्रेम टिप्स' : 'Love Tips';
    
    document.getElementById('fLucky').textContent = lang === 'hi' ? '🎲 लकी नंबर' : '🎲 Lucky Number';
    document.getElementById('fLuckyDesc').textContent = lang === 'hi' ? 'आज का भाग्यशाली नंबर' : 'Today\'s Lucky Number';
    
    document.getElementById('selectZodiacText').textContent = lang === 'hi' ? '✨ अपनी राशि चुनें' : '✨ Select Your Zodiac';
    document.getElementById('shareBtnText').textContent = lang === 'hi' ? 'शेयर करें' : 'Share';
    document.getElementById('footerText').textContent = lang === 'hi' 
        ? '❤️ Love Rashifal - हर दिन आपके लिए सटीक प्रेम राशिफल'
        : '❤️ Love Rashifal - Accurate love horoscope for you every day';
    document.getElementById('tagline').textContent = lang === 'hi' 
        ? '❤️ जानें अपने दिल के राज़ ❤️'
        : '❤️ Discover the secrets of your heart ❤️';
    
    currentDateDisplay.textContent = formatDate(lang);
    
    // Update share platform labels
    document.querySelectorAll('.share-platform').forEach(btn => {
        const platform = btn.dataset.platform;
        const labels = {
            whatsapp: lang === 'hi' ? 'WhatsApp' : 'WhatsApp',
            telegram: lang === 'hi' ? 'Telegram' : 'Telegram',
            twitter: lang === 'hi' ? 'Twitter' : 'Twitter',
            copy: lang === 'hi' ? 'कॉपी' : 'Copy'
        };
        if (platform && labels[platform]) {
            const icon = btn.querySelector('i');
            btn.innerHTML = '';
            btn.appendChild(icon);
            btn.appendChild(document.createTextNode(' ' + labels[platform]));
        }
    });
}

// ===== Init Particles =====
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 60, density: { enable: true, value_area: 800 } },
                color: { value: '#ff6b9d' },
                shape: { type: 'circle' },
                opacity: { value: 0.15, random: true, anim: { enable: true, speed: 0.8, opacity_min: 0.05 } },
                size: { value: 3, random: true, anim: { enable: true, speed: 2, size_min: 0.5 } },
                line_linked: { enable: true, distance: 150, color: '#ff6b9d', opacity: 0.08, width: 1 },
                move: { enable: true, speed: 1.2, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'grab' },
                    onclick: { enable: false }
                },
                modes: { grab: { distance: 140, line_linked: { opacity: 0.2 } } }
            },
            retina_detect: true
        });
    }
}

// ===== Init App =====
function initApp() {
    initParticles();
    updateLanguage('hi');
    currentDateDisplay.textContent = formatDate('hi');
    
    // Set initial feature (horoscope)
    showFeature('horoscope');
    
    console.log('❤️ Love Rashifal v3.0');
    console.log('✨ Features: Horoscope, Match Rashi, Mood Score, Love Score, Advice, Lucky Number');
    console.log('⌨️  Keyboard shortcuts: T=Theme, L=Language');
}

// ===== Event Listeners =====
// Feature cards
featureCards.forEach(card => {
    card.addEventListener('click', function() {
        showFeature(this.dataset.feature);
    });
});

// Zodiac selection
zodiacItemsSmall.forEach(item => {
    item.addEventListener('click', function() {
        selectZodiacForFeature(this.dataset.sign);
    });
});

// Share buttons
shareResultBtn.addEventListener('click', function() {
    shareOptions.style.display = shareOptions.style.display === 'grid' ? 'none' : 'grid';
});

document.querySelectorAll('.share-platform').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const platform = this.dataset.platform;
        shareResult(platform);
        shareOptions.style.display = 'none';
    });
});

// Close share options on outside click
document.addEventListener('click', function(e) {
    if (!e.target.closest('.share-section')) {
        shareOptions.style.display = 'none';
    }
});

// Theme toggle
themeToggle.addEventListener('click', toggleTheme);

// Language toggle
langToggle.addEventListener('click', toggleLanguage);

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 't' || e.key === 'T') {
        e.preventDefault();
        toggleTheme();
    } else if (e.key === 'l' || e.key === 'L') {
        e.preventDefault();
        toggleLanguage();
    }
});

// ===== Start Application =====
startLoading();
