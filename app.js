function shirts(){
  window.location.href = 'T-Shirts/shirts.html'
}

function hoodies(){
  window.location.href = 'hoodies/hoodies.html'
}

function continueShopping(){
  window.location.href = '../index.html'
}

function addToCart(){

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-dark",
      cancelButton: "btn btn-dark"
    },
    buttonsStyling: false
  });
  swalWithBootstrapButtons.fire({
    title: "Are you sure?",
    text: "Wanna But It!",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Yes !",
    cancelButtonText: "No !",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire({
        title: "Thanks !",
        text: "Item Successfully Added To Cart.",
        icon: "success",
      });
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire({
        title: "Removed",
        text: "Item Remove From Cart :)",
        icon: "error"
      });
    }
  });
}