import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import FormatePrice from "../Helper/FormatePrice";
import { addToCart } from "../redux/slice/AddToCardSlice";
import AddToCard from "./AddToCard";
import ImageGallery from "./ImageGallery";
import Loading from "./Loading";
import Star from "./Star";

const SingleProduct = () => {
  const [data, setData] = useState({});
  const { stock,image } = data;
  console.log(image)
  const [amount, setAmount] = useState(1);
  const [index,setIndex]=useState('0')
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`https://api.pujakaitem.com/api/products?id=${id}`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      });
  }, []);
  // active image handle 
  const handleImage=(i)=>{
     console.log('img index',i)
     setIndex(i)
  }
  //   increase and decrese function
  const handleDecrease = () => {
     amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const handleIncrease = () => {
     amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  // add to card btn
  const handleAdd = (active) => {
    console.log('active clr',active)
   dispatch(addToCart({color:active,amount:amount,image:image[index],stock:stock}))
  };
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {data?.name}
              </li>
            </ol>
          </nav>
          <div className="container">
            <div className="row ">
              <div className="col-md-6">
                <ImageGallery data={data} index={index} handleImage={handleImage} />
              </div>
              <div className="col-md-6 ">
                <p className="fs-2">{data?.company}</p>
                <Star stars={data?.stars} />
                MPR <del>{<FormatePrice price={data?.price + 250000} />}</del>
                <p>
                  <strong>Deal{<FormatePrice price={data?.price} />} </strong>
                </p>
                <p>{data?.description}</p>
                <hr />
                <AddToCard
                  data={data}
                  handleAdd={handleAdd}
                  handleDecrease={handleDecrease}
                  handleIncrease={handleIncrease}
                  amount={amount}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SingleProduct;
