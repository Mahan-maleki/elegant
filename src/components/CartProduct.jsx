import React from 'react'
import css from "./CartProduct.module.css"
import styled from 'styled-components'
import Counter from './Counter';
import { X } from 'lucide-react';

function CartProduct(props) {

  const ImgCont = styled.div`
    width: 80px;
    height: 96px;
    background-image: url("${props.img}");
  `;

  return (
    <>
      <div className="col-12 p-3 pb-4 mt-2 mb-2 border-1 border-bottom ">
        <div className="row">
          <ImgCont className="col-4"></ImgCont>
          <div className="col-8 pe-4">
            <div className="row">
              <div className="col-6">
                <h3 className={css.title + " elegant-demibold"}>{props.title}</h3>
                <p className={css.color}>رنگ: {props.color}</p>
                <Counter value={1} />
              </div>
              <div className="col-6 d-flex justify-content-start align-items-end flex-column">
                <p className={css.price + " elegant-bold"}>{props.price}</p>
                <div>
                  <X color='#6C7275' size={24}/>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartProduct