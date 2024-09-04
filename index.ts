const numEl: HTMLInputElement = document.getElementById("inputNum") as HTMLInputElement

const resultEl: HTMLParagraphElement = document.getElementById("result") as HTMLParagraphElement

const theNumber: number = Math.floor(Math.random() * 100) + 1

const Guess = () => {
    const guessNumber: number = parseInt(numEl.value)
    
    if (IsCorrect(guessNumber)) {
        resultEl.innerText = "Eltaláltad"
    }
    else{
        if(guessNumber < theNumber){
            resultEl.innerText = "A gondolt szám nagyobb!"
        }
        else{
            resultEl.innerText = "A gondolt szám kisebb!"
        }
    }
}

const IsCorrect = (guessNumber: number) : boolean => {
    return guessNumber === theNumber
}