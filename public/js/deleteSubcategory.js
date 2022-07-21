const delSubCat = async (event) => {
    console.log(1);

    const id = event.target.dataset.id

    console.log(id)

    const response = await fetch(`/api/subcategory/${id}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      location.reload();
    } else {
      alert('Failed to delete Subcategory');
    }    
};

const delSubCatBtn = document.querySelectorAll('.delSubCatBtn');

delSubCatBtn.forEach(delBtn => {
  delBtn.addEventListener('click', delSubCat)
});