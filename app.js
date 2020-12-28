// Element Selection 
let textArea=document.querySelector("#form-txt-input");
let button=document.querySelector("#form-btn-translate");
let outputDiv=document.querySelector("#output-div");
let twitter=document.querySelector("#output-twitter");
let whatsapp=document.querySelector("#output-whatsapp");

let serverURL="https://api.funtranslations.com/translate/dothraki.json";

// Take input from textarea and make url to make request
function getTranslationgURL(text){
    return serverURL+"?text="+text;
}

// If somehting went wrong then tell the user
function errorHandler(error){
    console.log(error);
    alert("There must be somthing wrong!");
}

// Make API request and hendle the respose
function clickHandler(){
    let inputText=textArea.value;
    fetch(getTranslationgURL(inputText))
        .then(respone => respone.json())
        .then(json => outputDiv.textContent=json.contents.translated)
        .catch(errorHandler);
}

// Add event listner to the button
button.addEventListener("click", clickHandler);

// Share the translated sentence, window.open will open the linke in new window
function shareTwitter(){
    outputDiv.innerText ? window.open(`https://twitter.com/intent/tweet?text=${outputDiv.innerText}&hashtags=dothraki`) : alert("Please Translate First!");
}
twitter.addEventListener("click", shareTwitter);

function shareWhatsapp(){
    outputDiv.innerText ? window.open(`https://api.whatsapp.com/send?text=${outputDiv.textContent}`) : alert("Please Translate First!");
}
whatsapp.addEventListener("click", shareWhatsapp);