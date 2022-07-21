const delTransaction = async (event) => {
    console.log(1);

    const id = event.target.dataset.id

    console.log(id)

    const params = new URLSearchParams(window.location.search);
    const catID = params.get('category_id');
    const subcatID = params.get('subcategory_id');

    const response = await fetch(`/api/transaction/${id}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      document.location.replace(`/subcategory/?subCategory_id=${subcatID}&category_id=${catID}`);
    } else {
      alert('Failed to delete transaction');
    }    
};

const delTranBtn = document.querySelectorAll('.delTranBtn');

delTranBtn.forEach(delBtn => {
  delBtn.addEventListener('click', delTransaction)
});