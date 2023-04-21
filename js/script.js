const api_url = 'https://www.google.com/speech-api/v1/synthesize?enc=mpeg&client=lr-language-tts&use_google_only_voices=1'
const textarea = document.querySelector('textarea#text')
const idioma = document.querySelector('select')
const range = document.querySelector("input[type='range']")
const btn = document.querySelector('button')
const audio = document.querySelector('audio')

btn.addEventListener("click", () => {
    const query = textarea.value.trim()
    const language = idioma.value
    const speed = Number(range.value) / 10
    
    if(query != "") {
        audio.src = `${api_url}&speed=${speed}&lang=${language}&text=${query}`

        audio.onloadeddata = () => {
            audio.play()
        }

    }

}, false)