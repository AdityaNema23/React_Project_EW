import './Product.css';
import { CartContext } from './CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Product = ({ title, price, image, category, rating = { rate: 0, count: 0 }, id }) => {
    const { addToCart } = useContext(CartContext);

    const truncateTitle = (title) => {

        const words = title.trim().split("");
        if (words.length > 50) {
            return words.slice(0, 50).join('') + '...';
        }
        return title;
    };

    const handleAddToCart = () => {
        addToCart({ title, price, image, category, rating });
    };

    const topRated = rating?.rate >= 4;

    return (
        <div className={topRated ? 'hof-container' : ""} style={{ position: "relative" }}>
            {topRated ? <span className="sticker">Top Rated</span> : null}
            <div className="product">
                <Link to={`/products/${id}`}>
                    <img src={image} alt={title} className="product_img" />
                    <h2 className="product_name">{title.substring(0, 45) + ".."}</h2>
                    <p className="product_category">{category}</p>
                    <p className="product_price">${price}</p>
                    <span className="product_rating">⭐ {rating?.rate} ({rating?.count} reviews)</span>
                </Link>
                <button className="ButtonStyle" onClick={handleAddToCart}>
                    Add to carts
                </button>
            </div>
        </div>
    );
};

export default Product;
