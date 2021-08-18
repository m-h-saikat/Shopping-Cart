function updateQuantity(product ,price , isIncreasing)
{
    const productInput=  document.getElementById(product + '-quantity');
    // console.log(productInput);
let productNumber=productInput.value;
if(isIncreasing)
 productInput.value=parseInt(productNumber)+1;
  else if(productNumber>0)
 productInput.value=parseInt(productNumber)-1;


//  update Price 
const mainPrice=document.getElementById(product + '-Price');
mainPrice.innerText = productInput.value* price;
}

function calculateTotal()
{
    const phoneQuantity=document.getElementById('phone-quantity');
    const phoneNumber=parseInt(phoneQuantity.value);
    const phoneTotal=phoneNumber*1219; 

    const caseQuantity=document.getElementById('case-quantity');
    const caseNumber=parseInt(caseQuantity.value);
    const caseTotal=caseNumber*59;

    let SubTotal=document.getElementById('sub-total');
    SubTotal.innerText= caseTotal + phoneTotal;

    const tax=document.getElementById('tax-amount');
    const taxAmount=parseInt(phoneQuantity.value);
    let totalTax= (caseTotal + phoneTotal)*0.075;
    tax.innerText=parseInt (totalTax);

    const total=document.getElementById('total-price');
    const totalPrice=parseInt(total.value);
    let totalamount= parseFloat(caseTotal + phoneTotal+totalTax);
    total.innerText=parseInt(totalamount);
   
}



document.getElementById('phone-plus').addEventListener('click',function(){
    updateQuantity('phone',1219 ,true);
})
document.getElementById('phone-Minus').addEventListener('click',function(){
    updateQuantity('phone' ,1219,false); 
  })


  document.getElementById('case-plus').addEventListener('click',function(){
    updateQuantity('case',59 ,true); 
})
document.getElementById('case-Minus').addEventListener('click',function(){
    updateQuantity('case',59 ,false);
  })
  document.getElementById('check-out').addEventListener('click',function(){
    calculateTotal();
  
  })






