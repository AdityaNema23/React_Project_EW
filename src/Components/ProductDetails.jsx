import './ProductDetails.css';
import Skeleton from './skeleton';
import { useParams } from "react-router-dom";
import useGetSingleProdect from '../hooks/useGetSingleProdect';

const ProductDetails = () => {
    const {productId} = useParams();
    const singleProduct = useGetSingleProdect(productId);
    
    if (singleProduct === null) {
        return <Skeleton />;
    }

    const { title, price, description, image, category, rating } = singleProduct;

    return (
        <div className="product-details-container">
            <div className="product-details">
                <img src={image} alt={title} className="product-image" />
                <div className="product-info">
                    <h2 className="product-title">{title}</h2>
                    <p className="product-category">{category}</p>
                    <p className="product-price">${price}</p>
                    <div className="product-rating">⭐ {rating.rate} ({rating.count} reviews)</div>
                    <p className="product-description">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
