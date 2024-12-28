import Product from './Product';
import './ProductCard.css';
import { productData } from '../utils/constant'; 
const ProductCard = () => {
   

    return (
        <div className="product_card_container">
            {productData.map((product) => (
                <Product
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    
                    image={product.image}
                    category={product.category}
                    rating={product.rating}
                />
            ))}
        </div>
    );
};

export default ProductCard;
