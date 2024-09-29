'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Search from '@mui/icons-material/search';

export default function SearchField({searchField, setSearchField}) {


  const handleChange = (event) => {
    let temp = event.target.value
    setSearchField(temp)
  };


  return (
        <Box sx={{ display: 'flex', alignItems: 'flex-end', mr: 2 }}>
          <Search sx={{ color: 'action.active', alignSelf: 'center' }} />
          <TextField name='search' value={searchField} label="fulltext hledání" onChange={handleChange} variant="outlined" />
        </Box>
    );
  }