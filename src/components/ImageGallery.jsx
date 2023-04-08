import React, { useState } from "react";
const ImageGallery = ({ data,handleImage,index}) => {
  // console.log('gallery data',data)
  return (
    <>
      <div className="row">
        <div className="col-md-5">
          <div className="d-flex d-md-block"style={{gap:'12px'}}>
          { data.image?.map((img,i) => {
            return (
              <>
                <div className="d-flex flex-row" key={i}>
                  <div 
                  // onClick={()=>setIndex(i)}
                  onClick={()=>handleImage(i)}
                   style={{cursor:'pointer'}}>
                    <figure className="relative">
                      <img src={img?.url} className="img-fluid" alt="" />
                      <figcaption className="caption">
                        {data.category}
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </>
            );
          })}
          </div>
        </div>
        <div className="col-md-7 m-auto">
          <img src={data.image && data.image[index].url}   className="img-fluid" alt="" />
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
