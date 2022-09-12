import React from 'react';
import styled from 'styled-components';
import { categories } from '../data';
import WheatItem from './wheatItem';

const Container = styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
`;

const wheatLists = () => {
  return (
  <Container>
    {categories.map(item=>(
        <WheatItem item={item} key={item.id}/>
    ))}
   </Container>
  );
};

export default wheatLists;