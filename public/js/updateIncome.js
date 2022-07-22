const newIncomeForm = async (event) => {
    event.preventDefault();

    const valueString = document.querySelector('#incomeValue').value.trim();

    const value = (parseFloat(valueString)).toFixed(2);

    console.log(value)

    if (value) {
        const response = await fetch('/api/income', {
          method: 'PUT',
          body: JSON.stringify({ value }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert('Failed to create category');
        }
      }
}


document.querySelector('#updateIncomeBtn').addEventListener('click', newIncomeForm);