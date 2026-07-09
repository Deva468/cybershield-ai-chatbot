function sendMessage() {

    const input = document.getElementById("userInput");
    const chat = document.getElementById("chatBox");

    const message = input.value.trim();

    if (message === "") return;

    // Show User Message
    chat.innerHTML += `
        <div class="user-message">
            ${message}
        </div>
    `;

    input.value = "";

    chat.scrollTop = chat.scrollHeight;

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
document.getElementById("userInput").addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        event.preventDefault();

        sendMessage();

    }

});
window.onload = function () {

    const clearBtn = document.getElementById("clearBtn");

    clearBtn.addEventListener("click", function () {

        const chat = document.getElementById("chatBox");

        chat.innerHTML = `
            <div class="bot-message">
                👋 Hello! Ask me anything about Cyber Security.
            </div>
        `;

    });
    

};

