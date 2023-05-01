import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { BsPlus, BsEyeFill } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';

const Product = ({ product }) => {

const {addToCart }= useContext(CartContext);

  // console.log(product);
  // DESTRUCTURE PRODUCT
  const { id, title, price, image, category } = product;
  return (
    <div>
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center '>
          {/* image */}
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img src={image} alt="" className='max-h-[160px] group-hover:scale-110 transition duration-300' />
          </div>
          {/* buttons */}
          <div className='absolute top-6 -right-11 group-hover:right-5 p-2  flex flex-col items-center justify-center gap-y2 opacity-0 group-hover:opacity-100 translate-all duration-300
          '>
            <button onClick={()=>addToCart(product,id)}>
              <div className='flex  justify-center items-center text-white bg-red-500 w-12 h-12'>
                <BsPlus className='text-3xl ' />
              </div>
            </button>
            <Link to={`/products/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'>
              <BsEyeFill />
            </Link>
          </div>

        </div>

      </div>
      {/* category ,title ,price*/}
      <div>
        <div className='text-sm capitalize text-gra-500 mb-1 '>{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className='font-semibold mb-1 
          '>{title}</h2>
        </Link>

        <div className='font-semibold'>$ {price}</div>
      </div>
    </div>

  );
};

export default Product;
