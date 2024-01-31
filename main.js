let soundkAudio = new Audio('assets/btn_click_sound.mp3')
let amongUsRevealSound = new Audio('assets/among-us-role-reveal-sound.mp3')

let encodeBtn = document.getElementById('encode-btn');
let decodeBtn = document.getElementById('decode-btn');

let imgBox = document.querySelector(".img__box");
let outputTextareaBox = document.getElementById("output-textarea");
let copyBtnBox = document.getElementById("copy-btn");

const transformText = (text) => {
    let removeAccents = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let lowercase = removeAccents.toLowerCase();
    return lowercase;
};

const encodeText = (text) => {
    return text
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
};

const decodeText = (text) => {
    return text
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
};

copyBtnBox.addEventListener("click", async(event) =>  {
    event.preventDefault();

    soundkAudio.play();

    navigator.clipboard.writeText(outputTextareaBox.value);
    alert("Texto copiado!");

    outputTextareaBox.innerHTML = "";
    imgBox.style.display = "block";
    outputTextareaBox.style.display = "none";
    copyBtnBox.style.display = "none";

});

encodeBtn.addEventListener("click", async(event) =>  {
    event.preventDefault();

    soundkAudio.play();

    let originalText = document.getElementById('input-textarea').value;
    let transformedText = transformText(originalText);
    let encodedText = encodeText(transformedText);

    if (originalText != "") {
        outputTextareaBox.textContent = encodedText;

        imgBox.style.display = "none";
        outputTextareaBox.style.display = "block";
        copyBtnBox.style.display = "block";
    } else {
        alert("Digite um texto antes.")
    };

});

decodeBtn.addEventListener("click", async(event) =>  {
    event.preventDefault();

    soundkAudio.play();

    let originalText = document.getElementById('input-textarea').value;
    let transformedText = transformText(originalText);
    let decodedText = decodeText(transformedText);

    if (originalText != "") {
        outputTextareaBox.textContent = decodedText;

        imgBox.style.display = "none";
        outputTextareaBox.style.display = "block";
        copyBtnBox.style.display = "block";
    } else {
        alert("Digite um texto antes.")
    };

});