
let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];  // created a random chat list//
let chatBoxEle=document.getElementById("t-btn");

let sendBtnEle=document.getElementById("send-btn");
let chatContainerEl = document.getElementById("chatContainer");
let userInputEl = document.getElementById("inputMsg");

function sendMsgToChatbot(){                            // created a function to take value user entered and appended to div container/
    let userValue=userInputEl.value;

    let userSendMsgEle=document.createElement("div");       // Creating and appending container Element div//
    userSendMsgEle.classList.add("msg-to-chatbot-container");
    chatContainerEl.appendChild(userSendMsgEle);


    let spanEle=document.createElement("span");         // Creating and appending Span Element//
    spanEle.classList.add("msg-to-chatbot");
    spanEle.textContent=userValue;
    userSendMsgEle.appendChild(spanEle);
    userInputEl.value="";
    getRespondFromChatbot();

}

function getRespondFromChatbot() {                      // created a response fron chatbot and appended to div element//
    let ChatbotMsgs = chatbotMsgList.length;
    let chatBotMsg = chatbotMsgList[Math.ceil(Math.random() * ChatbotMsgs) - 1];  // this will generate that random message from chatlist//


    let chatReplayContainer=document.createElement("div");          // Creating and appending container Element div//
    chatReplayContainer.classList.add("msg-from-chatbot-container");
    chatContainerEl.appendChild(chatReplayContainer);

    let chatReplaySpan=document.createElement("span");         // Creating and appending span Element div//
    chatReplaySpan.classList.add("msg-from-chatbot");
    chatReplaySpan.textContent=chatBotMsg;
    chatReplayContainer.appendChild(chatReplaySpan);

}



chatBoxEle.addEventListener("click", function(){        // when user click on span bot logo it will show or hide the chatBox with help of toggle class
                                                        // toggle It checks if the class exists, it removes the class; Otherwise, it adds the class into the element//
document.body.classList.toggle("display-chat-bot");
})
