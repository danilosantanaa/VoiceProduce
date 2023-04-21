const api_url = 'https://www.google.com/speech-api/v1/synthesize?enc=mpeg&lang=pt-br&client=lr-language-tts&use_google_only_voices=1'
const textarea = document.querySelector('textarea#text')
const audio = document.querySelector('audio')
const btn = document.querySelector('button')
const range = document.querySelector("input[type='range']")

btn.addEventListener("click", () => {
    const query = textarea.value.trim()
    const speed = Number(range.value) / 10
    
    if(query != "") {
        audio.src = `${api_url}&speed=${speed}&&text=${query}`

        audio.onloadeddata = () => {
            audio.play()
        }

    }

}, false)