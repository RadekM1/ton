import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function PaginationHowManyRowsBtn({rowsPerPage, setRowsPerPage}) {


  const handleChange = (event) => {
    setRowsPerPage(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 80, maxWidth: 120 }}>
      <FormControl fullWidth size='small'>
        <InputLabel id="demo-simple-select-label">Produktů</InputLabel>
        <Select
          labelId="paginatio-select"
          name='pag_select'
          value={rowsPerPage}
          label="Počet produktů na stránku"
          onChange={handleChange}
          size='small'
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}