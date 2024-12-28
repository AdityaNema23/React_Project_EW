import './Product.css';

const Product = ({ title, price, image, category, rating }) => {
    return (
        <div className="product">
            <img src={image} alt={title} className="product_img" />
            <h2 className="product_name">{title}</h2>
            <p className="product_category">{category}</p>
            <p className="product_price">${price}</p>
            <div className="product_rating">⭐ {rating.rate} ({rating.count} reviews)</div>
        </div>
    );
};

export default Product;
