const chatHistoryKey = "cybershield-chat-history";

function saveChatHistory() {
    const chat = document.getElementById("chatBox");
    localStorage.setItem(chatHistoryKey, chat.innerHTML);
}

function loadChatHistory() {
    const savedHistory = localStorage.getItem(chatHistoryKey);

    if (savedHistory) {
        document.getElementById("chatBox").innerHTML = savedHistory;
    }
}

function sendMessage(suggestedMessage) {

    const input = document.getElementById("userInput");
    const chat = document.getElementById("chatBox");

    const message = (suggestedMessage || input.value).trim();

    if (message === "") return;

    const welcomePanel = chat.querySelector(".welcome-panel");

    if (welcomePanel) {
        welcomePanel.remove();
    }

    // Show User Message
    chat.innerHTML += `
        <div class="user-message">
            ${message}
        </div>
    `;

    input.value = "";

    chat.scrollTop = chat.scrollHeight;
    saveChatHistory();

    // Show Typing Message
    chat.innerHTML += `
        <div class="bot-message" id="typing">
            ⌛ Bot is typing...
        </div>
    `;

    chat.scrollTop = chat.scrollHeight;

    // Wait 2 seconds before showing reply
    setTimeout(() => {

        const typing = document.getElementById("typing");

        if (typing) {
            typing.remove();
        }

        const reply = getBotReply(message);

        chat.innerHTML += `
            <div class="bot-message">
                ${reply}
            </div>
        `;

        chat.scrollTop = chat.scrollHeight;
        saveChatHistory();

    }, 2000);

    

}


// Chatbot Logic
function getBotReply(message) {

    message = message.toLowerCase();

    for (let i = 0; i < chatbotData.length; i++) {

        if (message.includes(chatbotData[i].keyword)) {

            return chatbotData[i].answer;

        }

    }

    return "❌ Sorry! I can answer only Cyber Security related questions.";

}


// Press Enter to Send
document.getElementById("chatForm").addEventListener("submit", function(event) {
    event.preventDefault();
    sendMessage();
});

function getWelcomeMessage() {
    return `
        <div class="welcome-panel">
            <p class="welcome-kicker">Your first line of defense</p>
            <h2>Learn the signals.<br><em>Protect what matters.</em></h2>
            <p class="welcome-copy">Ask clear, practical questions about threats, privacy, and everyday online safety.</p>
            <div class="feature-grid" aria-label="Topics covered">
                <span>🔐 Phishing</span><span>🦠 Malware</span><span>🔒 Password security</span><span>🌐 Network security</span>
                <span>🎣 Social engineering</span><span>🛡️ Cyber hygiene</span><span>🚨 Ransomware</span><span>🔑 Authentication</span>
            </div>
            <div class="suggestions">
                <p>Start with a question</p>
                <div class="suggestion-list">
                    <button type="button" onclick="sendMessage('What is phishing?')">What is phishing?</button>
                    <button type="button" onclick="sendMessage('What is ransomware?')">What is ransomware?</button>
                    <button type="button" onclick="sendMessage('Difference between HTTP and HTTPS?')">HTTP vs HTTPS?</button>
                    <button type="button" onclick="sendMessage('How does a firewall work?')">How does a firewall work?</button>
                    <button type="button" onclick="sendMessage('What is social engineering?')">What is social engineering?</button>
                </div>
            </div>
        </div>`;
}
window.onload = function () {

    const clearBtn = document.getElementById("clearBtn");

    loadChatHistory();

    clearBtn.addEventListener("click", function () {

        const chat = document.getElementById("chatBox");

        chat.innerHTML = getWelcomeMessage();
        localStorage.removeItem(chatHistoryKey);

    });
    

};

