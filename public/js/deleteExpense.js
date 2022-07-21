const delExpense = async (event) => {
    console.log(1);

    const id = event.target.dataset.id

    console.log(id)

    const response = await fetch(`/api/expense/${id}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      location.reload();
    } else {
      alert('Failed to delete transaction');
    }    
};

const delTranBtn = document.querySelectorAll('.delExpBtn');

delTranBtn.forEach(delBtn => {
  delBtn.addEventListener('click', delExpense)
});