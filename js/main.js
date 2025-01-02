let elMessageForm = document.querySelector(".messageForm")
let token = "7511744423:AAH9DcUaN0Q8NjBQaszcR21NHfL3t7OFxoQ"
const HTTPMessage = `https://api.telegram.org/bot${token}/sendMessage`
const chatID = 6417324849
elMessageForm.addEventListener("submit", function(e){
    e.preventDefault()
    let message = `<b>SMS FROM YOUR PORTFOLIO</b> \n`
    message += `<b>Username: ${e.target.name.value}</b> \n`
    message += `<b>Email: ${e.target.number.value}</b> \n`
    message += `<b>Subject ${e.target.subject.value}</b> \n`
    message += `<b>message: ${e.target.message.value}</b> \n`
    e.target = ""
    const data = {
        chat_id: chatID, 
        parse_mode: "html",
        text: message
    }

    axios.post(HTTPMessage, data)
})
