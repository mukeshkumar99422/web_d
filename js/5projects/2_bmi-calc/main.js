const form = document.querySelector('form');
//===>these will store '' at initial(before form submit)
// const height=parseInt(document.querySelector('#height').value);
// const weight=(document.querySelector('#weight').value);

// document.querySelector('#result').innerHTML = 'RESULT';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if (height == '' || height < 0 || isNaN(height)) {
        document.querySelector(
        '#result'
        ).innerHTML = `Please enter valid height:-${height}`;
    } else if (weight == '' || weight < 0 || isNaN(weight)) {
        document.querySelector(
        '#result'
        ).innerHTML = `Please enter valid weight:-${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        document.querySelector('#result').innerHTML = `<span>${bmi}</span>`;
    }
});
