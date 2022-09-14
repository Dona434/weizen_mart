import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useEffect, createContext, useReducer } from "react";
import { reducer, initialState } from "../Reducers/UserReducer";

const Container = styled.div`
flex:1;
margin:3px;
height:70vh;
position:relative;
`;
const Image = styled.img`
width:50%;
height:50%;
object-fit:cover;
border-radius:20%;
`;

const Button = styled.button`
border:none;
padding:10px;
background-color: #ffff66;
color:grey;
cursor:pointer;
margin-left:50px;
font-weight:600px;
`;

const Title = styled.h3`
padding:5px;
margin-left:30px;
font-weight:10px;
`;

const Price = styled.h4`
padding:5px;
margin-left:50px;
font-weight:10px;
`;

const WheatItem = ({item,handleClick}) => {
  const{id,title,img,price} = item;
  return (
  <Container>
            <Image src={img}/>
            <Title>
              {title} 
            </Title>
            <Price>
            Price : {price}
            </Price>
            <Link to={"cart"}>
            <Button onClick={()=>handleClick(item)}>Add To Cart</Button>
            </Link>
    </Container>
  );
};

export default WheatItem;