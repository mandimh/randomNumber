const quantity = document.querySelector("#quantity"),
    rangeLow = document.querySelector("#rangeLow"),
    rangeHigh = document.querySelector("#rangeHigh"),
    button = document.querySelector("button"),
    textBox = document.querySelector("#results");

button.addEventListener('click', getValues);
window.addEventListener('keydown', enterKey);

function getValues() {
    let totalNums = parseInt(quantity.value, 10),
        low = parseInt(rangeLow.value, 10),
        high = parseInt(rangeHigh.value, 10);
    if (!totalNums || !low || !high) {
        return textBox.innerHTML = "All boxes must be filled."
    }

    if (high > low) {
        if (totalNums < high - low + 2) {
            // actually find the random numbers and put them in an array!
            let resultsArr = [];
            while (resultsArr.length < totalNums) {
                let randomNum = Math.floor(Math.random() * ((high + 1) - low) + low);
                if (!resultsArr.includes(randomNum)) {
                    resultsArr.push(randomNum);
                }
            }
            resultsArr = resultsArr.sort((a,b) => a-b).toString().replace(/,/g, ", ");
            return textBox.innerHTML = `Results: <br><br> ${resultsArr}`;
        } else {
            textBox.innerHTML = "You cannot return more numbers than are in your range.";
        }
    } else {
        textBox.innerHTML = '"From" must be less than "to".';
    }
}

function enterKey(event) {
    if (event.which == 13 || event.keyCode == 13) {
        getValues();
        return false;
    }
    return true;
};