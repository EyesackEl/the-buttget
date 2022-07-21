const delAction = async (event) => {
    console.log(1);

    const id = event.target.dataset.id

    console.log(id)
    if (event.target.classList.contains('delCatBtn')){
        const response = await fetch(`/api/category/${id}`, {
            method: 'DELETE'
          });
      
        if (response.ok) {
            location.reload();
        } else {
            alert('Failed to delete category');
        } 
    } else if (event.target.classList.contains('delSubCatBtn')){
        const response = await fetch(`/api/subcategory/${id}`, {
            method: 'DELETE'
        });
      
        if (response.ok) {
            location.reload();
        } else {
            alert('Failed to delete transaction');
        } 
    }
   
};

const delBtn = document.querySelectorAll('.delBtn');

delBtn.forEach(delBtn => {
  delBtn.addEventListener('click', delAction)
});