import './Product.css';
import { CartContext } from './CartContext';
import { useContext } from 'react';
const Product = ({ title, price, image, category, rating }) => {
    const { addToCart } = useContext(CartContext);
    const handleAddToCart = () => {
        addToCart({ title, price, image, category, rating })
      };
    return (
        <div className="product">
            <img src={image} alt={title} className="product_img" />
            <h2 className="product_name">{title}</h2>
            <p className="product_category">{category}</p>
            <p className="product_price">${price}</p>
            <div className="product_rating">⭐ {rating.rate} ({rating.count} reviews)</div>
            <button className="add-to-cart-button" onClick={handleAddToCart}>
        Add to Cart
      </button>
        </div>
    );
};

export default Product;

export const HOF = (WrappedProduct) => {
    return (props) => (
        <div className="hof-container" style={{ position: "relative" }}>
            <span className="sticker">Top Rated</span>
            <WrappedProduct {...props} />
        </div>
    );
};
