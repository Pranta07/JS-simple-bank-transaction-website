function getInputValue(id) {
    const inputField = document.getElementById(id);
    const inputAmount = parseFloat(inputField.value);
    inputField.value = "";
    return inputAmount;
}

function updateBalance(id, amount) {
    // updating deposit amount
    const curBalance = document.getElementById(id);
    const curTotal = parseFloat(curBalance.innerText);
    const newTotal = curTotal + amount;
    curBalance.innerText = newTotal;
}

// handling deposit button
document.getElementById("deposit-btn").addEventListener("click", function () {
    // get the amount deposited & clear input field
    /* const depositField = document.getElementById("deposit-input");
    const depositAmount = parseInt(depositField.value);
    depositField.value = ""; */
    depositAmount = getInputValue("deposit-input");

    // updating deposit amount
    /* const depositTotal = document.getElementById("deposit-total");
    const curDepositAmount = parseInt(depositTotal.innerText);
    const totalAmount = curDepositAmount + depositAmount;
    depositTotal.innerText = totalAmount; */
    if (depositAmount > 0) {
        updateBalance("deposit-total", depositAmount);
    }

    // updating balance amount
    /* const balanceTotal = document.getElementById("balance-total");
    const curBalance = parseInt(balanceTotal.innerText);
    const total = curBalance + depositAmount;
    balanceTotal.innerText = total; */
    if (depositAmount > 0) {
        updateBalance("balance-total", depositAmount);
    }
});

// handling withdraw button
document.getElementById("withdraw-btn").addEventListener("click", function () {
    // get the amount withdrawn
    /* const withdrawField = document.getElementById("withdraw-input");
    const withdrawAmount = parseInt(withdrawField.value);
    withdrawField.value = ""; */
    const withdrawAmount = getInputValue("withdraw-input");

    // updating withdraw amount
    /* const withdrawTotal = document.getElementById("withdraw-total");
    const curWithdrawAmount = parseInt(withdrawTotal.innerText);
    const totalAmount = curWithdrawAmount + withdrawAmount;
    withdrawTotal.innerText = totalAmount; */
    const balanceTotal = document.getElementById("balance-total");
    const curBalance = parseFloat(balanceTotal.innerText);
    if (withdrawAmount > 0 && withdrawAmount <= curBalance) {
        updateBalance("withdraw-total", withdrawAmount);
    }

    // updating balance amount
    /* const balanceTotal = document.getElementById("balance-total");
    const curBalance = parseInt(balanceTotal.innerText);
    const total = curBalance - withdrawAmount;
    balanceTotal.innerText = total; */
    if (withdrawAmount > 0 && withdrawAmount <= curBalance) {
        updateBalance("balance-total", -withdrawAmount);
    }
});
