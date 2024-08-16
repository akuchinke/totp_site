
const codeSlot = window.document.getElementById("code")
const remainingTimeSlot = window.document.getElementById("remaining_time")
const urlParams = new URLSearchParams(window.location.search);

const secret = urlParams.get("secret")

function updateContent(){
    const rawCode = window.otplib.authenticator.generate(secret)
    codeSlot.textContent = rawCode.substring(0,3) + " " + rawCode.substring(3,6)
    remainingTimeSlot.textContent = `Next code in ${window.otplib.authenticator.timeRemaining()}s`
}
try{
    updateContent()
    setInterval(updateContent, 1000)
}catch (e){
    codeSlot.textContent = "Invalid secret provided"
}

