const newExpenseForm = async (event) => {
    event.preventDefault();

    console.log(1)

    const name = document.querySelector('#expenseName').value.trim();
    const params = new URLSearchParams(window.location.search);
    const catID = params.get('category_id');
    const subcatID = params.get('subcategory_id');

    console.log(name, catID, subcatID)

    if (name && catID && subcatID) {
        const response = await fetch(`/api/expense/add`, {
          method: 'POST',
          body: JSON.stringify({ name, catID, subcatID }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert('Failed to create expense');
        }
      }
}

document.querySelector('#addExpenseBtn').addEventListener('click', newExpenseForm);