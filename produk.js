
const buy = document.querySelector('.buy');
const buttons = document.querySelectorAll('.button-buy');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const buyElement = document.querySelector('.buy');
    buyElement.classList.toggle('active');

    const product = e.currentTarget.closest('.product');
    const dataPrice = product.getAttribute('data-price');
    
    document.getElementById('price').innerHTML = dataPrice;
  });
});



document.querySelector("#tombol-beli").addEventListener('click', function(){
    swal("Terimakasih telah membeli produk ini");
  });