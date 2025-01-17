
import './ProductCard.css';
import { useEffect, useState } from 'react';
import Skeleton from './skeleton';
import Product from './Product'

const ProductCard = () => {
    const [listOfProduct, setListofProduct] = useState([]);
    const [filterdList, setFilterdList] = useState([]);
    const [flag, setFlag] = useState(false);
    const [searchText, setSearchText] = useState('');

    const initialState = () => setFilterdList(listOfProduct);

    const handleClick = () => {
        const filteredProduct = listOfProduct.filter((product) => product.rating.rate >= 4);
        setFilterdList(flag ? filteredProduct : listOfProduct);
        setFlag((prevFlag) => !prevFlag);
    };

    const handleSearch = () => {
        const searchedData = listOfProduct.filter((product) =>
            product.title.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilterdList(searchedData);
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('https://fakestoreapi.com/products');
            const resData = await data.json();
            setListofProduct(resData);
            setFilterdList(resData);
        };

        fetchData();
    }, []);


    return listOfProduct.length === 0 ? (
        <Skeleton />
    ) : (
        <>
            <input
                type="text"
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
            />
            <button className="rated-button" id="search-button" onClick={handleSearch}>
                Search 🔍
            </button>
            <button className="rated-button" onClick={initialState}>
                Home
            </button>
            <button className="rated-button" onClick={handleClick}>
                4+ Rated Product
            </button>

            <div className="product_card_container">
                {filterdList.map((product) =>
                    <Product
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        category={product.category}
                        rating={product.rating}
                        id={product.id}
                    />
                )}

            </div>
        </>
    );
};

export default ProductCard;
