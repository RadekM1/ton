'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState, useEffect } from 'react';

  

  export default function RangeSlider({filteredPrice, setFilteredPrice, priceRange}) {
    

    const [tempVal, setTempVal] = useState(filteredPrice)

    const handleSliderChange = () => {
      setFilteredPrice(tempVal)
    }
    
    useEffect(() => {
      setTempVal(filteredPrice);
    }, [filteredPrice]);

   
  
    const handleChange = (event, newValue) => {
        setTempVal(newValue);
    };
  
    return (
      <>
        <Box sx={{ width: 150, margin: 3, height: 0}}>
        <Slider
          size="small"
          getAriaLabel={() => '€'}
          value={tempVal}
          onChange={handleChange}
          onMouseUp={handleSliderChange}
          onTouchEnd={handleSliderChange}
          sx={{
            color: '#808080', 
          }}
          min={priceRange[0]}
          max={priceRange[1]}
        />

        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 1 }}>
          <span className='text-gray-600 mb-2 text-sm mt-2 mx-2'>{`Min: ${tempVal[0]} €`}</span>
          <span className='text-gray-600 mb-2 text-sm mt-2 mx-2'>{`Max: ${tempVal[1]} €`}</span>
        </Box>
      </>
      
    );
  }