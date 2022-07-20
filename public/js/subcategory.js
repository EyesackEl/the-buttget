const newSubCatForm = async (event) => {
    event.preventDefault();

    console.log(1)

    const name = document.querySelector('#newSub').value.trim();
    const params = new URLSearchParams(window.location.search);
    const catID = params.get('category_id');

    console.log(name)

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


// const delButtonHandler = async (event) => {
//     const params = new URLSearchParams(window.location.search);
//     const catID = params.get('id');

//     const response = await fetch(`/api/subcategory/delete`, {
//     method: 'DELETE',
//     });

//     if (response.ok) {
//     document.location.replace('/');
//     } else {
//     alert('Failed to delete Subcategory');
//     }    
// };



document.querySelector('#subCatButton').addEventListener('click', newSubCatForm);