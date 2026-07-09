const chatbotData = [
    {
        keyword: "phishing",
        answer: "🎣 Phishing is a cyber attack that tricks users into revealing sensitive information using fake emails or websites."
    },

    {
        keyword: "malware",
        answer: "🦠 Malware is malicious software designed to damage a computer or steal data."
    },

    {
        keyword: "ransomware",
        answer: "💰 Ransomware locks your files and demands money to unlock them."
    },

    {
        keyword: "virus",
        answer: "🧬 A computer virus spreads from one program or file to another."
    },

    {
        keyword: "vpn",
        answer: "🌐 VPN encrypts your internet connection and protects your privacy."
    },

    {
        keyword: "password",
        answer: "🔐 Use at least 12 characters with uppercase, lowercase, numbers, and symbols."
    },

    {
        keyword: "firewall",
        answer: "🛡️ Firewall monitors and filters incoming and outgoing network traffic."
    },

    {
        keyword: "sql injection",
        answer: "💉 SQL Injection is a database attack using malicious SQL queries."
    },

    {
        keyword: "xss",
        answer: "⚠️ Cross-Site Scripting (XSS) injects malicious JavaScript into web pages."
    },
    {
    keyword: "cyber security",
    answer: "🛡️ Cyber Security is the practice of protecting computers, networks, applications, and data from cyber attacks."
},

{
    keyword: "hacker",
    answer: "👨‍💻 A hacker is a person who uses technical skills to access computer systems. Hackers can be ethical (white hat) or malicious (black hat)."
},

{
    keyword: "ethical hacking",
    answer: "🛠️ Ethical Hacking is the legal process of testing a system's security to find and fix vulnerabilities before attackers exploit them."
},

{
    keyword: "virus",
    answer: "🦠 A computer virus is malicious software that attaches itself to files or programs and spreads when they are executed."
},

{
    keyword: "worm",
    answer: "🪱 A worm is malware that spreads automatically across networks without requiring user action."
},

{
    keyword: "trojan",
    answer: "🐴 A Trojan Horse is malware disguised as legitimate software that tricks users into installing it."
},

{
    keyword: "spyware",
    answer: "🕵️ Spyware secretly monitors user activity and steals sensitive information such as passwords and browsing history."
},

{
    keyword: "adware",
    answer: "📢 Adware is software that automatically displays unwanted advertisements and may track user activity."
},

{
    keyword: "antivirus",
    answer: "🛡️ Antivirus software detects, blocks, and removes viruses and other types of malware from a computer."
},

{
    keyword: "firewall",
    answer: "🔥 A firewall monitors and filters incoming and outgoing network traffic to block unauthorized access."
},
{
    keyword: "vpn",
    answer: "🌐 VPN (Virtual Private Network) encrypts your internet connection and hides your IP address to improve privacy and security."
},

{
    keyword: "encryption",
    answer: "🔒 Encryption converts readable data (plaintext) into unreadable data (ciphertext) to protect information from unauthorized access."
},

{
    keyword: "decryption",
    answer: "🔓 Decryption is the process of converting encrypted data (ciphertext) back into its original readable form."
},

{
    keyword: "hashing",
    answer: "🔑 Hashing converts data into a fixed-length hash value. It is mainly used for securely storing passwords."
},

{
    keyword: "authentication",
    answer: "✅ Authentication is the process of verifying a user's identity using a password, OTP, fingerprint, or other methods."
},

{
    keyword: "authorization",
    answer: "🛂 Authorization determines what resources or actions an authenticated user is allowed to access."
},

{
    keyword: "mfa",
    answer: "📱 Multi-Factor Authentication (MFA) requires two or more verification methods, such as a password plus an OTP, to improve account security."
},

{
    keyword: "otp",
    answer: "📲 OTP (One-Time Password) is a temporary code sent by SMS, email, or an authenticator app for secure login verification."
},

{
    keyword: "digital signature",
    answer: "✍️ A Digital Signature verifies the authenticity and integrity of a digital document or message using cryptography."
},

{
    keyword: "public key",
    answer: "🔑 A Public Key is shared openly and is used to encrypt data or verify digital signatures in asymmetric encryption."
},

{
    keyword: "private key",
    answer: "🔐 A Private Key is kept secret and is used to decrypt encrypted data or create digital signatures."
},
{
    keyword: "sql injection",
    answer: "💉 SQL Injection is a web attack where attackers insert malicious SQL queries to access, modify, or delete database data."
},

{
    keyword: "xss",
    answer: "⚠️ Cross-Site Scripting (XSS) allows attackers to inject malicious JavaScript into a trusted website."
},

{
    keyword: "csrf",
    answer: "🔄 Cross-Site Request Forgery (CSRF) tricks a logged-in user into performing unwanted actions on a website."
},

{
    keyword: "ddos",
    answer: "🌐 Distributed Denial of Service (DDoS) attacks overload a server with huge amounts of traffic, making it unavailable."
},

{
    keyword: "dos attack",
    answer: "🚫 A Denial of Service (DoS) attack floods a system with traffic to make it unavailable to legitimate users."
},

{
    keyword: "brute force",
    answer: "🔑 A Brute Force Attack repeatedly tries different passwords until the correct one is found."
},

{
    keyword: "social engineering",
    answer: "🎭 Social Engineering is the manipulation of people into revealing confidential information or performing unsafe actions."
},

{
    keyword: "session hijacking",
    answer: "🍪 Session Hijacking is an attack where an attacker steals a user's active session ID to gain unauthorized access."
},

{
    keyword: "mitm",
    answer: "👥 Man-in-the-Middle (MITM) is an attack where an attacker secretly intercepts communication between two parties."
},

{
    keyword: "zero day",
    answer: "⚡ A Zero-Day Attack exploits a software vulnerability before the developer releases a security patch."
},

{
    keyword: "password attack",
    answer: "🔓 A Password Attack is an attempt to steal or guess a user's password using methods like brute force, dictionary attacks, or phishing."
},

{
    keyword: "dictionary attack",
    answer: "📖 A Dictionary Attack uses a list of common words and passwords to guess a user's password."
},
{
    keyword: "hi",
    answer: "👋 Hi! Welcome to CyberShield AI. Ask me any Cyber Security question."
},

{
    keyword: "hello",
    answer: "👋 Hello! I'm CyberShield AI. How can I help you with Cyber Security today?"
},

{
    keyword: "hey",
    answer: "😊 Hey! Ask me anything related to Cyber Security."
},

{
    keyword: "good morning",
    answer: "🌞 Good Morning! Hope you're having a great day. Ask me any Cyber Security question."
},

{
    keyword: "good afternoon",
    answer: "☀️ Good Afternoon! I'm here to help you learn Cyber Security."
},

{
    keyword: "good evening",
    answer: "🌙 Good Evening! Feel free to ask me about Cyber Security."
},

{
    keyword: "how are you",
    answer: "😊 I'm doing great! Thanks for asking. How can I help you with Cyber Security?"
},

{
    keyword: "who are you",
    answer: "🤖 I'm CyberShield AI, a Cyber Security Awareness Chatbot developed to educate users about cyber threats and online safety."
},

{
    keyword: "your name",
    answer: "🤖 My name is CyberShield AI."
},

{
    keyword: "what can you do",
    answer: "🛡️ I can answer Cyber Security questions, explain attacks, security concepts, and provide online safety tips."
},

{
    keyword: "help",
    answer: "💡 You can ask me about phishing, malware, ransomware, VPN, firewall, SQL Injection, XSS, encryption, passwords, DDoS, and many more Cyber Security topics."
},

{
    keyword: "thank you",
    answer: "😊 You're welcome! Stay safe online."
},

{
    keyword: "thanks",
    answer: "😊 Happy to help! Have a secure day."
},

{
    keyword: "bye",
    answer: "👋 Goodbye! Stay safe and protect your digital world."
},

{
    keyword: "goodbye",
    answer: "👋 Goodbye! Feel free to come back anytime for Cyber Security help."
},
];