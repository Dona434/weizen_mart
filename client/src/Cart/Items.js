import React from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Items = () => {
  return (
    <>
      <div className='items-info'>
            <div className='product-img'>
              <img src='https://th.bing.com/th/id/OIP.T1oDewD0smrDwQEt39XmaAHaHa?pid=ImgDet&rs=1'/>
            </div>
            <div className='title'>
              <h2>Red wheat</h2>
              <p>Red color</p>
            </div>
            <div className='add-minus-quantity'>
              <RemoveOutlinedIcon/>
            <input type="text" placeholder="2"/>
            <AddOutlinedIcon/>
            </div>
            <div className='price'>
              <h3>2000Rs</h3>
            </div>
            <div className='remove-item'>
            <DeleteOutlineIcon/>
            </div>
          </div>
          <hr/>
    </>
  )
}

export default Items
