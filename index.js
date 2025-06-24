let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];


let msgElement = document.getElementById("msg")
let inputElement = document.getElementById("input")
let btnElement = document.getElementById("sendMsgBtn")




function appendUserMessage(Usermsg){
    
    let UserMsgDiv = document.createElement("div")
    UserMsgDiv.classList.add("user-msg", "text-right", "mb-4","mr-4")

    let span = document.createElement("span");
    span.classList.add("bg-secondary", "text-white", "p-2", "rounded");
    span.textContent = Usermsg;

    UserMsgDiv.appendChild(span)
    msgElement.appendChild(UserMsgDiv)
    
}
function appendBotMessage(Botmsg){

    let BotMsgDiv = document.createElement("div")
    BotMsgDiv.classList.add("bot-msg","text-left","mb-4","ml-4")

    let span = document.createElement("span");
    span.classList.add("bg-danger", "text-white", "p-2", "rounded");
    span.textContent = Botmsg;

    BotMsgDiv.appendChild(span)
    msgElement.appendChild(BotMsgDiv)

}

btnElement.onclick=function(){
     
    let userInput = inputElement.value.trim();
    // if(userInput !== ""){
    //     appendUserMessage(userInput)
    // }
    appendUserMessage(userInput)

    inputElement.value="";


    let randomIndex = Math.floor(Math.random()*chatbotMsgList.length)
    appendBotMessage(chatbotMsgList[randomIndex])
   
}