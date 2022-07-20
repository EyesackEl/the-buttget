const delSubCat = async (event) => {
    console.log(1);
    // event.preventDefault();

    const id = event.target.getAttribute('data-id')
    console.log(id)

    const response = await fetch(`/api/subcategory/${id}`, {
    method: 'DELETE'
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to delete Subcategory');
    }    
};



document.querySelector('#delSubCatButton').addEventListener('click', delSubCat);