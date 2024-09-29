import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function CheckBox ({stockChecked, setStockChecked}) {
  
    
    const handleChange = (event) => {
        let temp = event.target.checked
        setStockChecked(temp);
      };
  
    return (
            <FormControlLabel
                label="Zboží skladem"
                labelPlacement="end"
                control={
                    <Checkbox
                        checked={stockChecked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                        color='default'
                        name='onStock'
                    />
                }
            />
        )
    }