const newSubCatForm = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#newSub').value.trim();
    const params = new URLSearchParams(window.location.search);
    const catID = params.get('category_id');

    if (name && catID) {
        const response = await fetch(`/api/subcategory/add`, {
          method: 'POST',
          body: JSON.stringify({ name, catID }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert('Failed to create subcategory');
        }
      }
}





document.querySelector('#subCatButton').addEventListener('click', newSubCatForm);