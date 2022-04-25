const el = document.querySelector("#text")
const text = "Shared rides, There’s lots to do in your city, and we’ve got the rides to help you enjoy it all. And they’re all available right from your app. "
const interval = 100

function showText (el, text,  interval){
    const char = text.split("").reverse()

    const typer = setInterval (() => {

        if(!char.length){
           return clearInterval (typer)
        }

        const next = char.pop()
        
        el.innerHTML += next

    }, interval)
}

showText(el, text,  interval)