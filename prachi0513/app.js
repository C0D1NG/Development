const btn = document.querySelector('.talk')
const content = document.querySelector('.content');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition ();


const bio = ['i am technerd']
const weather = ['weather is changing accordingly to weather forcast']
const bios = ['HTML. Stands for "Hypertext Markup Language." HTML is the language used to create webpages..']

const test = ['javaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive.']

const css = ['CSS stands for Cascading Style Sheets. it describes how HTML elements are to be displayed on screen, paper, or in other media. saves a lot of work for too ']

recognition.onstart = function(){
    console.log('voice activated and istening');
};

recognition.onresult = function(event){
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
}


btn.addEventListener('click',()=>{
    recognition.start()

});



     function readOutLoud(command){
        const speech = new SpeechSynthesisUtterance();
        speech.text = "i am unable to answer these question,choose from the list below.";


        if(command.includes('who are you')){
        const finaltext = bio[Math.floor(Math.random() *bio.length)]
        speech.text = finaltext;
        }
        if(command.includes('what about weather')){
            const finalText = weather[Math.floor(Math.random() * weather.length)]
            speech.text = finalText;
        }
        if(command.includes('what is hyperlink language')){
            const finaltext = bios[Math.floor(Math.random() *bios.length)]
            speech.text = finaltext;
            }
            if(command.includes('what is cascading style sheet')){
                const finaltext = css[Math.floor(Math.random() *css.length)]
                speech.text = finaltext;
                }
                if(command.includes('what is script')){
                    const finaltext = test[Math.floor(Math.random() *test.length)]
                    speech.text = finaltext;
                    }
                

        speech.volume = 9;
        speech.rate = 1;
        speech.pitch = 90;

        window.speechSynthesis.speak(speech)

} 