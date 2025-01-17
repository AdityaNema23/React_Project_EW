import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Skeleton from './skeleton';
import Product from './Product';

const Jewelery = () => {
  const [listOfProduct, setListofProduct] = useState([]);
  const [filterdList, setFilterdList] = useState([]);
  const [flag, setFlag] = useState(false);
  const [searchText, setSearchText] = useState('');


  const fetchData = async () => {
    const data = await fetch('https://fakestoreapi.com/products');
    const result = await data.json();
    setListofProduct(result.filter((product) => product.category === "jewelery"));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFilterdList(listOfProduct.filter((product) => product.category === "jewelery"));

  }, [listOfProduct]);



  const handleRateFilter = () => {
    const filteredProduct1 = filterdList.filter((product) => product.rating.rate >= 4);
    setFilterdList(flag ? filteredProduct1 : filterdList);
    setFlag((prevFlag) => !prevFlag);
  };

  const handleSearch = () => {
    const searchedData = listOfProduct.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterdList(searchedData);
  };
  console.log(filterdList);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  }

  return filterdList.length === 0 ? (
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
      <button className="rated-button" onClick={routeChange} >
        Home
      </button>
      <button className="rated-button" onClick={handleRateFilter}>
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

export default Jewelery;


