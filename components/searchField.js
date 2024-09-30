'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { FaSearch } from 'react-icons/fa';

export default function SearchField({ searchField, handleChange }) {


  return (
    <Box sx={{ mr: 1, display: 'flex', alignItems: 'flex-end' }}>
      
      <TextField
        name="search"
        value={searchField}
        label="fulltext hledání"
        onChange={handleChange}
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FaSearch />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
