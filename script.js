function calculateMaturityAmount() {
    const principle = parseFloat(document.getElementById('principle').value); 
    const interest = parseFloat(document.getElementById('interest').value); 
    const tenure = parseFloat(document.getElementById('tenure').value); 

    const r = interest / 100;
    const n = 3; // Compounded every 4 months
    const t = tenure;

    const maturityAmount = principle * Math.pow((1 + r / n), n * t);

    document.getElementById('result').innerText = `Maturity Amount: ₹${maturityAmount.toFixed(2)}`;
}

document.getElementById('cal').addEventListener('click', calculateMaturityAmount);



// thankyou for reading 😊
