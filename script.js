const riddleSets = {
    1: {
        easy: [
            { question: "I guard your accounts and make sure you’re the only one logging in. What am I?", answer: "password", hints: ["A secret string", "Used to log in"] },
            { question: "I block bad traffic and allow good traffic, keeping your network secure. What am I?", answer: "firewall", hints: ["Controls traffic", "Protects your network"] },
            { question: "I’m like a guard at the entrance to your digital world, stopping the bad guys. What am I?", answer: "antivirus", hints: ["Prevents viruses", "Scans for malware"] },
            { question: "What is the name of a malicious software that tries to infect and harm your computer?", answer: "malware", hints: ["Can be a virus", "Harmful software"] },
            { question: "What is the process of encoding data so that only authorized users can read it?", answer: "encryption", hints: ["Used for data security", "Scrambles information"] }
        ],
        moderate: [
            { question: "I’m a digital trickster, often disguised as something harmless, but I steal your information. What am I?", answer: "phishing", hints: ["Fake emails", "Steals your credentials"] },
            { question: "A hacker can’t see my contents, but I protect sensitive information by scrambling it. What am I?", answer: "encryption", hints: ["Secures communication", "Data protection"] },
            { question: "I ask for your identity and grant access only if you’ve entered the right credentials. What am I?", answer: "authentication", hints: ["Checks your identity", "Used in logins"] },
            { question: "I keep all the data you store in my digital world, but a hacker can access it if I’m left unsecured. What am I?", answer: "cloud storage", hints: ["Stores your files", "Can be hacked if weak"] },
            { question: "I’m a key that isn’t physical, but without me, you can’t decode the information. What am I?", answer: "decryption key", hints: ["Used in cryptography", "Needed to read encrypted data"] }
        ],
        hard: [
            { question: "I silently collect data about your online habits, but many people still don't realize I'm watching. What am I?", answer: "spyware", hints: ["Secretly monitors", "Steals user data"] },
            { question: "I mask your digital identity by hiding your IP address and encrypting your internet connection. What am I?", answer: "vpn", hints: ["Hides your online activity", "Encrypts internet traffic"] },
            { question: "I can infiltrate your network by exploiting a flaw in the system and leave behind a backdoor. What am I?", answer: "trojan horse", hints: ["Disguised malware", "Allows remote access"] },
            { question: "I require two pieces of information to confirm your identity. What am I?", answer: "two-factor authentication", hints: ["Adds extra security", "Uses password + another method"] },
            { question: "I’m the opposite of a 'white hat' hacker. I cause damage and may even erase your files. What am I?", answer: "black hat hacker", hints: ["A cybercriminal", "Breaks into systems"] }
        ]
    },
    2: { /* Copy Set 2 riddles in the same format as above */ 
      
      easy: [
            { question: "I protect your computer from harmful files and ensure they don't spread. What am I?", answer: "antivirus", hints: ["Prevents viruses", "Scans for malware"] },
            { question: "I help to hide your online identity by replacing your real location. What am I?", answer: "VPN", hints: ["Hides your IP", "Secures browsing"] },
            { question: "I’m a digital tool that blocks access to harmful websites and keeps you safe online. What am I?", answer: "firewall", hints: ["Controls network traffic", "Blocks harmful websites"] },
            { question: "What do you call the process of turning readable data into unreadable code?", answer: "encryption", hints: ["Makes data unreadable", "Used for security"] },
            { question: "I store important data, and if I'm not secure, hackers may steal your secrets. What am I?", answer: "cloud storage", hints: ["Stores files", "Can be accessed remotely"] }
        ],
        moderate: [
            { question: "I trick people into revealing their personal details by pretending to be a trusted entity. What am I?", answer: "phishing", hints: ["Fake emails", "Steals personal information"] },
            { question: "I’m a type of software that allows unauthorized access to a network, often disguised as harmless. What am I?", answer: "trojan", hints: ["Disguised as useful", "Gives hackers access"] },
            { question: "I am an attack that aims to flood a system with too much data, causing it to crash. What am I?", answer: "DoS attack", hints: ["Floods a system", "Overwhelms the server"] },
            { question: "What do you call the method of verifying someone’s identity using a fingerprint or face scan?", answer: "biometric authentication", hints: ["Uses physical traits", "Verifies identity"] },
            { question: "I am a system that can help you track who has access to your sensitive information. What am I?", answer: "access control", hints: ["Limits access", "Controls who can see data"] }
        ],
        hard: [
            { question: "I infect your device and replicate myself across your network, often without your knowledge. What am I?", answer: "worm", hints: ["Replicates across systems", "Spreads without user knowledge"] },
            { question: "I’m a hacker’s tool that can secretly monitor your activities and steal your sensitive data. What am I?", answer: "spyware", hints: ["Secretly monitors", "Steals sensitive data"] },
            { question: "I’m used to prevent unauthorized users from accessing data, even when I’m invisible. What am I?", answer: "encryption", hints: ["Protects data", "Can be hidden"] },
            { question: "I help protect the privacy of your emails and messages, ensuring only the intended recipient can read them. What am I?", answer: "end-to-end encryption", hints: ["Secures messages", "Ensures only the receiver reads"] },
            { question: "I’m an act of breaching a system, often by exploiting weaknesses, without authorization. What am I called?", answer: "hacking", hints: ["Unauthorized access", "Exploits system vulnerabilities"] }
        ]
    },
    3: { /* Copy Set 3 riddles in the same format as above */
    
         easy: [
            { question: "I allow you to securely access your files and data from any device, but only if you authenticate first. What am I?", answer: "cloud authentication", hints: ["Secures access", "Used for online storage"] },
            { question: "I hide a website's true identity and make browsing more secure by using 'https'. What am I?", answer: "SSL/TLS", hints: ["Secures websites", "Uses encryption"] },
            { question: "I am a type of attack that involves flooding a server with too many requests, preventing users from accessing the service. What am I?", answer: "DDoS attack", hints: ["Floods a server", "Overwhelms system resources"] },
            { question: "I am a method used to confirm the identity of a user by requiring something you know and something you have. What am I?", answer: "multi-factor authentication", hints: ["Uses multiple factors", "Adds extra security"] },
            { question: "I’m a software vulnerability that allows attackers to execute malicious commands in your system. What am I?", answer: "remote code execution", hints: ["Allows command execution", "Exploits software bugs"] }
        ],
        moderate: [
            { question: "I protect sensitive information by converting it into a format that only authorized parties can decrypt. What am I?", answer: "cryptography", hints: ["Secures data", "Uses keys to protect information"] },
            { question: "I can allow a malicious actor to take over your system remotely without your knowledge, usually by exploiting a bug in software. What am I?", answer: "rootkit", hints: ["Gives remote access", "Exploits system flaws"] },
            { question: "I prevent unauthorized access to a network by controlling the inbound and outbound traffic based on security rules. What am I?", answer: "network access control", hints: ["Controls network traffic", "Secures network access"] },
            { question: "I am an attack that tricks users into visiting fake websites that look like real ones to steal personal information. What am I called?", answer: "man-in-the-middle attack", hints: ["Intercepts communication", "Impersonates websites"] },
            { question: "I encrypt a portion of your files and demand payment before providing the decryption key. What type of attack am I?", answer: "ransomware", hints: ["Encrypts files", "Demands payment for decryption"] }
        ],
        hard: [
            { question: "I am used to track users’ online behavior without their consent, collecting data from cookies, and often used for targeted ads. What am I?", answer: "web scraping", hints: ["Tracks online activity", "Collects data from cookies"] },
            { question: "I am an invisible software program that gives an attacker full control over a compromised system. What am I?", answer: "rootkit", hints: ["Gives full access", "Runs secretly on a system"] },
            { question: "I can disguise myself as a legitimate app, but my purpose is to gain access to your sensitive data and actions. What am I?", answer: "trojan horse", hints: ["Disguised malware", "Malicious software"] },
            { question: "I allow attackers to impersonate users and access systems without detection by manipulating network communication. What am I?", answer: "session hijacking", hints: ["Takes over a session", "Manipulates network traffic"] },
            { question: "I’m used to decrypt a file that has been locked with a public key, but only when the correct private key is available. What am I?", answer: "asymmetric cryptography", hints: ["Uses public and private keys", "Decrypts locked files"] }
        ]
    }
};

let selectedSet = 1;
let currentLevel = "";
let currentRiddleIndex = 0;
let score = 0;

function selectSet(setNumber) {
    selectedSet = setNumber;
    document.getElementById("set-selection").style.display = "none";
    document.getElementById("difficulty-selection").style.display = "block";
}

function startGame(level) {
    currentLevel = level;
    currentRiddleIndex = 0;
    score = 0;
    
    document.getElementById("difficulty-selection").style.display = "none";
    document.getElementById("game-area").style.display = "block";
    
    loadRiddle();
}

function loadRiddle() {
    if (currentRiddleIndex < riddleSets[selectedSet][currentLevel].length) {
        let riddleObj = riddleSets[selectedSet][currentLevel][currentRiddleIndex];
        document.getElementById("riddle").innerText = riddleObj.question;
        document.getElementById("hint").style.display = "none";
        document.getElementById("feedback").innerText = "";
        document.getElementById("answer").value = "";
        document.getElementById("next-btn").style.display = "none";
    } else {
        document.getElementById("game-area").innerHTML = `<h2>Game Over! Your final score: ${score}</h2><button onclick="restartGame()">Play Again</button>`;
    }
}

function checkAnswer() {
    let userAnswer = document.getElementById("answer").value.toLowerCase().trim();
    let correctAnswer = riddleSets[selectedSet][currentLevel][currentRiddleIndex].answer;

    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").innerHTML = "✅ Correct!";
        score += 10;
        document.getElementById("score").innerText = "Score: " + score;
        document.getElementById("next-btn").style.display = "block";
    } else {
        document.getElementById("feedback").innerHTML = "❌ Incorrect! Try again.";
    }
}

function showHint() {
    let hints = riddleSets[selectedSet][currentLevel][currentRiddleIndex].hints;
    document.getElementById("hint").innerText = "Hint: " + hints[0];
    document.getElementById("hint").style.display = "block";
}

function skipRiddle() {
    // Move to the next riddle without awarding points
    currentRiddleIndex++;
    loadRiddle();
}
function nextRiddle() {
    currentRiddleIndex++;
    loadRiddle();
}

function restartGame() {
    document.getElementById("set-selection").style.display = "block";
    document.getElementById("difficulty-selection").style.display = "none";
    document.getElementById("game-area").style.display = "none";
}
