import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../slices/productsApiSlice';
//import { Link } from 'react-router-dom';
import Product from '../components/Product';
//import Intro from '../components/Intro';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import Meta from '../components/Meta';
import ProductCarousel from '../components/ProductCarousel'; // Import the ProductCarousel component

import './screen.background.css';
import './home.screen.css';



const HomeScreen = () => {
  const { pageNumber, keyword } = useParams(); // from router

  const { data, isLoading, error } = useGetProductsQuery({ //from productsApiSlice
    keyword,
    pageNumber,
  });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Meta id = "homescreen" className = "screen-background"/>
          <h1 id = "opening">Latest Products</h1>
          <ProductCarousel />
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3} className = "row-of-two">
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;