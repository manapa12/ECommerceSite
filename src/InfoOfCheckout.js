import CardForSummary from "./CardForSummary";
import ConfirmOrder from "./ConfirmOrder";
import { useState } from "react";


const InfoOfCheckout = ({ itemsInCart }) => {
    
 const [placeOrder, setPlaceOrder] = useState(false);

 const flattenedArray = itemsInCart.flat();
 let totalBill = 0;
 
 const uniqueIds = new Set(flattenedArray.map(item => item.id));
 const idCount = {};

 flattenedArray.forEach(item => {
    const id = item.id;
    idCount[id] = (idCount[id] || 0) + 1;
  });

const newArrayWithRepeat = [...uniqueIds].map(id => ({
 ...flattenedArray.find(item => item.id === id),
 repeat: idCount[id]
}));

for(let i = 0; i < flattenedArray.length; i++){
    totalBill = totalBill + flattenedArray[i].price;
}

let shippingTotal = Math.floor(totalBill*0.1) / 100;

const placeOrderConfirm = () => {
  if(itemsInCart.length > 0){
    setPlaceOrder(!placeOrder);
  }else{
    alert("No items on cart.")
  }
}

  return (
    <div className="summary-container">
        <div className="summary-list">
            <h3>SUMMARY</h3>
            {itemsInCart.length > 0 ? 
            newArrayWithRepeat.map(item => <CardForSummary item={item} key={item.id} />) :
            <p>No items on cart.</p>
            }
            
        </div>
        {placeOrder ?  
          <ConfirmOrder /> :
          <div className="total-bill-container">
            <p>Total:${totalBill.toFixed(2)}</p>
            <p>Shipping: ${shippingTotal}</p>
            <p><strong>Grand Total: ${(totalBill+shippingTotal).toFixed(2)}</strong></p>
            <button onClick={placeOrderConfirm} className="place-order-button">PLACE ORDER</button>
        </div>
        }
    </div>
  )
}

export default InfoOfCheckout


/**{newArrayWithRepeat.map(item => <CardForSummary item={item} key={item.id} />)} */