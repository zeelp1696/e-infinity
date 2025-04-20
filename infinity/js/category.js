

   //switching category (all to trending)
   document.querySelector('.Trending').addEventListener('click',function(){

    document.querySelector('.product-list').style.display='none';
    document.querySelector('.woman-list').style.display='none';
    document.querySelector('.cargo-list').style.display='none';
    document.querySelector('.kids-list').style.display='none';
    document.querySelector('.jeans-list').style.display='none';
    document.querySelector('.formal-list').style.display='none';
    document.querySelector('.trending-list').style.display='block';

  
   
    document.querySelector('.sidebar ul li:nth-child(2)').style.background='transparent';
    document.querySelector('.sidebar ul li:nth-child(3)').style.background='transparent';
    document.querySelector('.sidebar ul li:nth-child(1)').style.background='#ddd';
    document.querySelector('.sidebar ul li:nth-child(4)').style.background='transparent';
    document.querySelector('.sidebar ul li:nth-child(5)').style.background='transparent';
    document.querySelector('.sidebar ul li:nth-child(6)').style.background='transparent';
    document.querySelector('.sidebar ul li:nth-child(7)').style.background='transparent';
    
     });


  //switching category (all to man)
  document.querySelector('.man').addEventListener('click',function(){

    document.querySelector('.product-list').style.display='block';
    document.querySelector('.woman-list').style.display='none';
    document.querySelector('.cargo-list').style.display='none';
    document.querySelector('.kids-list').style.display='none';
    document.querySelector('.jeans-list').style.display='none';
    document.querySelector('.formal-list').style.display='none';
    document.querySelector('.trending-list').style.display='none';

  
    
    
    document.querySelector('.sidebar ul li:nth-child(2)').style.background='#ddd';
    document.querySelector('.sidebar ul li:nth-child(3)').style.background='transparent';
    document.querySelector('.sidebar ul li:nth-child(1)').style.background='transparent';
    document.querySelector('.sidebar ul li:nth-child(4)').style.background='transparent';
    document.querySelector('.sidebar ul li:nth-child(5)').style.background='transparent';
    document.querySelector('.sidebar ul li:nth-child(6)').style.background='transparent';
    document.querySelector('.sidebar ul li:nth-child(7)').style.background='transparent';
    
     });

 //switching category (all to woman)
 document.querySelector('.woman').addEventListener('click',function(){

 document.querySelector('.product-list').style.display='none';
 document.querySelector('.woman-list').style.display='block';
 document.querySelector('.cargo-list').style.display='none';
 document.querySelector('.kids-list').style.display='none';
 document.querySelector('.jeans-list').style.display='none';
 document.querySelector('.formal-list').style.display='none';
 document.querySelector('.trending-list').style.display='none';



document.querySelector('.sidebar ul li:nth-child(2)').style.background='transparent';
document.querySelector('.sidebar ul li:nth-child(3)').style.background='#ddd';
document.querySelector('.sidebar ul li:nth-child(1)').style.background='transparent';
document.querySelector('.sidebar ul li:nth-child(4)').style.background='transparent';
document.querySelector('.sidebar ul li:nth-child(5)').style.background='transparent';
document.querySelector('.sidebar ul li:nth-child(6)').style.background='transparent';
document.querySelector('.sidebar ul li:nth-child(7)').style.background='transparent';
 });

  //switching category (all to cargo)
  document.querySelector('.cargos').addEventListener('click',function(){

    document.querySelector('.product-list').style.display='none';
    document.querySelector('.woman-list').style.display='none';
    document.querySelector('.cargo-list').style.display='block';
    document.querySelector('.kids-list').style.display='none';
    document.querySelector('.jeans-list').style.display='none';
    document.querySelector('.formal-list').style.display='none';
    document.querySelector('.trending-list').style.display='none';


    
    document.querySelector('.sidebar ul li:nth-child(2)').style.background='transparent';
    document.querySelector('.sidebar ul li:nth-child(3)').style.background='transparent';
    document.querySelector('.sidebar ul li:nth-child(1)').style.background='transparent';
    document.querySelector('.sidebar ul li:nth-child(4)').style.background='transparent';
    document.querySelector('.sidebar ul li:nth-child(5)').style.background='transparent';
    document.querySelector('.sidebar ul li:nth-child(6)').style.background='#ddd';
    document.querySelector('.sidebar ul li:nth-child(7)').style.background='transparent';
    
     });


 //switching category (all to kids)
   document.querySelector('.kids').addEventListener('click',function(){

    document.querySelector('.product-list').style.display='none';
    document.querySelector('.woman-list').style.display='none';
    document.querySelector('.cargo-list').style.display='none';
    document.querySelector('.kids-list').style.display='block';
    document.querySelector('.jeans-list').style.display='none';
    document.querySelector('.formal-list').style.display='none';
    document.querySelector('.trending-list').style.display='none';



    
    document.querySelector('.sidebar ul li:nth-child(2)').style.background='transparent';
    document.querySelector('.sidebar ul li:nth-child(3)').style.background='transparent';
    document.querySelector('.sidebar ul li:nth-child(1)').style.background='transparent';
    document.querySelector('.sidebar ul li:nth-child(4)').style.background='#ddd';
    document.querySelector('.sidebar ul li:nth-child(5)').style.background='transparent';
    document.querySelector('.sidebar ul li:nth-child(6)').style.background='transparent';
    document.querySelector('.sidebar ul li:nth-child(7)').style.background='transparent';
    
     });

 //switching category (all to formal)
 document.querySelector('.formal').addEventListener('click',function(){

    document.querySelector('.product-list').style.display='none';
    document.querySelector('.woman-list').style.display='none';
    document.querySelector('.cargo-list').style.display='none';
    document.querySelector('.kids-list').style.display='none';
    document.querySelector('.jeans-list').style.display='none';
    document.querySelector('.formal-list').style.display='block';
    document.querySelector('.trending-list').style.display='none';



    
    document.querySelector('.sidebar ul li:nth-child(2)').style.background='transparent';
    document.querySelector('.sidebar ul li:nth-child(3)').style.background='transparent';
    document.querySelector('.sidebar ul li:nth-child(1)').style.background='transparent';
    document.querySelector('.sidebar ul li:nth-child(4)').style.background='transparent';
    document.querySelector('.sidebar ul li:nth-child(5)').style.background='transparent';
    document.querySelector('.sidebar ul li:nth-child(6)').style.background='transparent';
    document.querySelector('.sidebar ul li:nth-child(7)').style.background='#ddd';
    
     });

      //switching category (all to jeans)
   document.querySelector('.jeans').addEventListener('click',function(){

    document.querySelector('.product-list').style.display='none';
    document.querySelector('.woman-list').style.display='none';
    document.querySelector('.cargo-list').style.display='none';
    document.querySelector('.kids-list').style.display='none';
    document.querySelector('.jeans-list').style.display='block';
    document.querySelector('.formal-list').style.display='none';
    document.querySelector('.trending-list').style.display='none';



    
    document.querySelector('.sidebar ul li:nth-child(2)').style.background='transparent';
    document.querySelector('.sidebar ul li:nth-child(3)').style.background='transparent';
    document.querySelector('.sidebar ul li:nth-child(1)').style.background='transparent';
    document.querySelector('.sidebar ul li:nth-child(4)').style.background='transparent';
    document.querySelector('.sidebar ul li:nth-child(5)').style.background='#ddd';
    document.querySelector('.sidebar ul li:nth-child(6)').style.background='transparent';
    document.querySelector('.sidebar ul li:nth-child(7)').style.background='transparent';
    
     });

//fitering price range



 // Select all "Add to Cart" buttons
// Event listener for the Add to Cart button
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        const productId = this.getAttribute('data-id');  // Get product ID from data-id attribute
        
        addToCart(productId);  // Call the addToCart function and pass the product ID
    });
});

// Function to send the product ID to the server and show an alert
const addToCart = (productId) => {
    fetch('/api/cart/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId }),
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.success) {
            alert(data.message);  // Show the success message
        } else {
            alert('Failed to add product to cart');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Something went wrong');
    });
};


//fitering price range
document.querySelector('.pricebtn').addEventListener('click',function(){
    document.querySelector('.priceRangeBox').classList.remove("hidden");
  });
       document.querySelector('.filterbtn').addEventListener('click', function() { 
        let selectedValue = document.querySelector('input[name="range"]:checked')?.value;
    
        // Show all products first (reset state)
        document.querySelectorAll('.product-box').forEach(product => product.classList.remove("hidden"));
    
        if (selectedValue === "under20") {
            document.querySelectorAll('.pr0-20').forEach(product => product.classList.remove("hidden"));
            document.querySelectorAll('.pr20-30, .above30').forEach(product => product.classList.add("hidden"));
            
        } else if (selectedValue === "under30") {
            document.querySelectorAll('.pr20-30').forEach(product => product.classList.remove("hidden"));
            document.querySelectorAll('.pr0-20, .above30').forEach(product => product.classList.add("hidden"));
    
        } else if (selectedValue === "above30") {
            document.querySelectorAll('.above30').forEach(product => product.classList.remove("hidden"));
            document.querySelectorAll('.pr0-20, .pr20-30').forEach(product => product.classList.add("hidden"));
        }
    });
    
    document.querySelector('.priceclose').addEventListener('click',function(){
      document.querySelector('.priceRangeBox').classList.add("hidden");
    });