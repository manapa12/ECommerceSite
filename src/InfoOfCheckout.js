import CardForSummary from "./CardForSummary";

const InfoOfCheckout = ({ itemsInCart }) => {
    
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

  return (
    <div className="summary-container">
        <div className="summary-list">
            <h3>SUMMARY</h3>
            {newArrayWithRepeat.map(item => <CardForSummary item={item} key={item.id} />)}
        </div>
        <div className="total-bill-container">
            <p>Total:${totalBill.toFixed(2)}</p>
            <p>Shipping: ${shippingTotal}</p>
            <p><strong>Grand Total: ${(totalBill+shippingTotal).toFixed(2)}</strong></p>
            <button className="place-order-button">PLACE ORDER</button>
        </div>
    </div>
  )
}

export default InfoOfCheckout