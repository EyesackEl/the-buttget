const newTransactionForm = async (event) => {
    event.preventDefault();

    console.log(1)

    const valueString = document.querySelector('#transactionValue').value.trim();
    const params = new URLSearchParams(window.location.search);
    const catID = params.get('category_id');
    const subcatID = params.get('subcategory_id');
    const expenseID = params.get('expense_id');

    console.log(typeof valueString);
    const value = (parseFloat(valueString)*100).toFixed(2);


    console.log(value, catID, subcatID, expenseID)

    if (value && catID && subcatID && expenseID) {
        const response = await fetch('/api/transaction/add', {
          method: 'POST',
          body: JSON.stringify({ value, catID, subcatID, expenseID }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          document.location.replace(`/subcategory/?subCategory_id=${subcatID}&category_id=${catID}`);
        } else {
          alert('Failed to create transaction');
        }
      }
}

document.querySelector('#addTransactionBtn').addEventListener('click', newTransactionForm);