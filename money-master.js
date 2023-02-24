



function getExpensesValueById(expenseId){
    const expenseNumber = document.getElementById(expenseId);
    const expenseValueString = expenseNumber.value;
    const expenseValue = parseFloat(expenseValueString);
    return expenseValue;
}

function getMainIncomeById(incomeId){
    const mainIncome = document.getElementById(incomeId);
    const mainIncomeAmountString = expenseNumber.value;
    const mainIncomeAmount = parseFloat(mainIncomeAmountString);
    return mainIncomeAmount;
}

function getBlankFieldValueById(blankFieldId){
    const bankfield = document.getElementById(blankFieldId);
    // const bankfieldString = bankfield.value;
    // const bankfieldAmount = parseFloat(bankfieldString)
    return bankfield;
}

document.getElementById('calculate-btn').addEventListener('click', function(){
    const costByFood = getExpensesValueById('food');
    const costByRent = getExpensesValueById('rent');
    const costByClothes = getExpensesValueById('clothes');
    const totalexpense = getBlankFieldValueById('total-expense');
    const totalCoast = costByFood + costByRent + costByClothes;
    totalexpense.value = totalCoast;
    const mainIncomeValue = getBlankFieldValueById('income');

    const balanceField = getBlankFieldValueById('balance');
    const income = mainIncomeValue - totalexpense;

    balanceField.value = income;

    // const balance = mainIncomeValue - totalexpense;
    // balanceField.value = balance;





})