console.log('ga_bank_atm');

var savingBalance = document.querySelector('.saving-balance');
var checkingBalance = document.querySelector('.checking-balance');
var savingInput = document.querySelector('.saving-input');
var checkingInput = document.querySelector('.checking-input');
var checkingWithdrawBtn = document.querySelector('.withdraw-btn_checking');
var checkingDepositBtn = document.querySelector('.deposit-btn_checking');
var savingWithdrawBtn = document.querySelector('.withdraw-btn_saving');
var savingDepositBtn = document.querySelector('.deposit-btn_saving');
var currentSavingBalance = 0.00;
var currentCheckingBalance = 0.00;


var emptySavingBalance = function() {
  while (currentSavingBalance === 0) {
      return document.querySelector('.saving').style.backgroundColor = 'rgba(255, 0, 0, 0.21)';
    }
    document.querySelector('.saving').style.backgroundColor = 'rgba(128,128,128, 0.21)';
}

var emptyCheckingBalance = function() {
  while (currentCheckingBalance === 0) {
      return document.querySelector('.checking').style.backgroundColor = 'rgba(255, 0, 0, 0.21)';
    }
    document.querySelector('.checking').style.backgroundColor = 'rgba(128,128,128, 0.21)';
}

checkingDepositBtn.addEventListener('click', function() {
    var amountOfMoneyToDeposit = Number(checkingInput.value);

    currentCheckingBalance = currentCheckingBalance + amountOfMoneyToDeposit;
    checkingBalance.textContent = parseFloat(currentCheckingBalance).toFixed(2);
    emptyCheckingBalance(currentCheckingBalance);
    checkingInput.value = "";
})

checkingWithdrawBtn.addEventListener('click', function() {
    var amountOfMoneyToWithdraw = Number(checkingInput.value);

    while((currentCheckingBalance + currentSavingBalance) >= amountOfMoneyToWithdraw) {
      if(currentCheckingBalance > amountOfMoneyToWithdraw ) {
        currentCheckingBalance = currentCheckingBalance - amountOfMoneyToWithdraw;
        checkingBalance.textContent = parseFloat(currentCheckingBalance).toFixed(2);
      } else {
        currentSavingBalance = currentSavingBalance - (amountOfMoneyToWithdraw - currentCheckingBalance);
        currentCheckingBalance = 0;
        savingBalance.textContent = parseFloat(currentSavingBalance).toFixed(2);
        checkingBalance.textContent = parseFloat(currentCheckingBalance).toFixed(2);
        emptySavingBalance(currentSavingBalance);
      }
    }
    emptyCheckingBalance(currentCheckingBalance);
    checkingInput.value = "";
})

savingDepositBtn.addEventListener('click', function() {
    var amountOfMoneyToDeposit = Number(savingInput.value);

    currentSavingBalance = currentSavingBalance + amountOfMoneyToDeposit;
    savingBalance.textContent = parseFloat(currentSavingBalance).toFixed(2);
    emptySavingBalance(currentSavingBalance);
    savingInput.value = "";
})

savingWithdrawBtn.addEventListener('click', function() {
    var amountOfMoneyToWithdraw = Number(savingInput.value);

    if (amountOfMoneyToWithdraw <= currentSavingBalance) {
      currentSavingBalance = currentSavingBalance - amountOfMoneyToWithdraw;
      savingBalance.textContent = parseFloat(currentSavingBalance).toFixed(2);
    }
    emptySavingBalance(currentSavingBalance);
    savingInput.value = "";
})
