import React, { Component } from 'react'
import Style from './Backdrop.module.css'

import { css } from "@emotion/core";
import {DotLoader} from "react-spinners";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
`;

// border-color: red;

const Backdrop =()=> {
        return (
            <div className={Style.backdrop}>
                <div className={Style.spinner}>
                <DotLoader color={'orangered'} loading={true} css={override} size={50} />

                </div>

                <span className={Style.span1}></span>

                <span className={Style.span2}></span>

                <span className={Style.span3}></span>

                <span className={Style.span4}></span>

                
            </div>
        )
    }



export default Backdrop