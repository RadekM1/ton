'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState, useEffect } from 'react';

  

  export default function RangeSlider({filteredPrice, setFilteredPrice, priceRange}) {
    

    const [tempVal, setTempVal] = useState(filteredPrice)

    const handleMouseUp = () => {
      setFilteredPrice(tempVal)
    }
    
    useEffect(() => {
      setTempVal(filteredPrice);
    }, [filteredPrice]);

   
  
    const handleChange = (event, newValue) => {
        setTempVal(newValue);
    };
  
    return (
      <Box sx={{ width: 150, margin: 3, height: 0}}>
        <Slider
            size='small'
            getAriaLabel={() => '€'}
            value={tempVal}
            onChange={handleChange}
            valueLabelDisplay="on"
            valueLabelFormat={(value)=> `${value} €` }
            onMouseUp = {handleMouseUp}
            color="#808080"
            min={priceRange[0]}
            max={priceRange[1]}
            
        />
      </Box>
    );
  }