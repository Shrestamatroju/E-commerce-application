import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrum/Breadcrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

const Product = () => {
  const {products}=useContext(ShopContext)
  const{id}=useParams();//to get product id we use useparams
  const product=products.find((e)=>e.id === Number(id));

  return (
    <div>
        <Breadcrum product={product} />
        <ProductDisplay product={product}/>
        <DescriptionBox />
        <RelatedProducts />
    </div>
  )
}

export default Product;
