



function getExpensesValueById(expenseId){
    const expenseNumber = document.getElementById(expenseId);
    const expenseValueString = expenseNumber.value;
    const expenseValue = parseFloat(expenseValueString);
    return expenseValue;
}

function setTextElementValueById(expenseId, value){
    const totalElement = document.getElementById(expenseId);
    totalElement.value = value;
}






document.getElementById('calculate-btn').addEventListener('click', function(){
    
    const costByFood = getExpensesValueById('food');
    const costByRent = getExpensesValueById('rent');
    const costByClothes = getExpensesValueById('clothes');
    const totalexpense = getExpensesValueById('total-expense');
    const totalCoast = costByFood + costByRent + costByClothes;
    const totalExpenseFieldValue = totalexpense + totalCoast;
    setTextElementValueById('total-expense', totalExpenseFieldValue );


    const incomeField = getExpensesValueById('income');
    const balanceField = incomeField - totalExpenseFieldValue;
    const finalBalance = getExpensesValueById('balance');
    const balanceFieldValue = balanceField + finalBalance;
    setTextElementValueById('balance',balanceFieldValue);

   

})
document.getElementById('save-btn').addEventListener('click', function(){
 
    const finalBalance = getExpensesValueById('balance');

        
    const saveField = getExpensesValueById('save-field');
    const savings = finalBalance * 0.2;
    const saveFieldAmount = savings - saveField;
    setTextElementValueById('save-field',saveFieldAmount);

    const remainingBalance = getExpensesValueById('remaining-balance');
    const remainingBalanceField = finalBalance - saveFieldAmount;
    const remainingBalanceFieldAmount = remainingBalance + remainingBalanceField;
    setTextElementValueById('remaining-balance',remainingBalanceFieldAmount);






})


