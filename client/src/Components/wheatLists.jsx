import React,{useState} from 'react';
import styled from 'styled-components';
import { wheats } from '../data';
import WheatItem from './wheatItem';

const Container = styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
`;

const WheatLists = () => {
  const [cart,setCart] = useState([]);
  const handleClick = (item)=>{
    setCart([...cart,item])
    console.log(cart);
  }
  return (
  <Container>
    
    {wheats.map((item)=>(
        <WheatItem item={item} key={item.id} handleClick={handleClick}/>
    ))}
    
   </Container>
  );
};

export default WheatLists;