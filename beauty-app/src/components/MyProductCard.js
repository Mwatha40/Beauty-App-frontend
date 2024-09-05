const MyProductCard = ({product}) => {
    return (
    <div key={product.id} className="product-item">
        <img src={product.image} alt={product.name} className="product-image" />
        <h3 className="product-name">{product.name}</h3>
        <button className="btn add-to-cart">Add to Cart</button>
        <button className="btn view-product">View Product</button>
    </div>
    );
}

export default MyProductCard;