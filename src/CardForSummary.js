

const CardForSummary = ({ item }) => {
  return (
    <div className="description-list-container">
        <div className="image-n-title-summary">
            <img src={item.image} alt="" />
            <div className="title-and-price-summary">
                <p className="title-summary"><strong>{item.title}</strong></p>
                <p className="price-summary">${item.price}</p>
            </div>
        </div>
        <div className="summary-repeat-info">
            x{item.repeat}
        </div>
    </div>
  )
}

export default CardForSummary