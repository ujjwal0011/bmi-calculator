const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const height = parseInt(document.querySelector('#height').value)

    const weight = parseInt(document.querySelector('#weight').value)

    const results = document.querySelector('#results')

    let under = document.querySelector('#under')

    let normal = document.querySelector('#normal')

    let over = document.querySelector('#over')

    const bmi = (weight / ((height * height) / 10000)).toFixed(2)
    results.style.color = 'red'

    if(height < 0 || height == '' || isNaN(height)){
        results.innerHTML = "Please enter a valid height"
    }
    else if(weight < 0 || weight == '' || isNaN(weight)){
        results.innerHTML = "Please enter valid weight"
    }
    else{
        results.innerHTML = `<span>Your BMI = ${bmi}</span>`
    }
    
    if(bmi >= 0 && bmi <= 18.6){
        under.style.color = 'red'
    }
    else if(bmi > 18.6 && bmi <= 24.9){
        normal.style.color = 'red'
    }
    else if(bmi > 24.9){
        over.style.color = 'red'
    }
})