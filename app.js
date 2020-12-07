// Element Selection 
let textArea=document.querySelector("#form-txt-input");
let button=document.querySelector("#form-btn-translate");
let outputDiv=document.querySelector("#output-div");
let whatsapp=document.querySelector("#output-whatsapp");


// let serverURL="https://api.funtranslations.com/translate/minion.json";

let serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

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
        .then(json => outputDiv.textContent=json.contents.text)
        .catch(errorHandler);
}

// Add event listner to the button
button.addEventListener("click", clickHandler);

function changeLoc(){
    location.ancestorOrig
}



// Whatsapp`https://api.whatsapp.com/send?text=${this.state.quote}`