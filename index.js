function calculateTotalAmount() {
    let qty = parseFloat(document.getElementById('quantity').value) || 0;
    let rate = parseFloat(document.getElementById('rate').value) || 0;
    let totalAmount = qty * rate;
    document.getElementById('result1').innerText = `Total Prices: ₹${totalAmount.toFixed(2)}`;
}

function calculatePercentage() {
    let totalPricePer = parseFloat(document.getElementById('percentageTotal').value);
    let percentage = parseFloat(document.getElementById('percentage').value);

    if (isNaN(totalPricePer) || isNaN(percentage)) {
        document.getElementById('result').innerText = "Please enter valid numbers.";
        return;
    }

    let amount = (totalPricePer * (100 - percentage)) / 100;
    document.getElementById('result').innerText = `Amount for servant: ₹${amount.toFixed(2)}`;
}

function addNewInput() {
    let container = document.getElementById('priceContainer');
    let newInput = document.createElement("input");
    newInput.type = "number";
    newInput.className = "price-input";
    newInput.placeholder = "Enter price";
    container.appendChild(newInput);
}

function calculateSum() {
    let inputs = document.querySelectorAll('.price-input');
    let totalSum = 0;
    inputs.forEach(input => {
        totalSum += parseFloat(input.value) || 0;
    });
    document.getElementById('sumResult').innerText = `Total Sum: ₹${totalSum.toFixed(2)}`;
}