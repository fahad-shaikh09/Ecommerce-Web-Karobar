import React from 'react'
import Logo from "./../Images/logo.png"
import "./Navbar.css";
//Search bar
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';


const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
];

const filter = createFilterOptions();

const Navbar = () => {
  const [value, setValue] = useState(null);

  return (
    <div  style={{display:"flex", alignItems:"center", justifyContent:"space-evenly"}}>
      <div id="logo"> <img src={Logo} alt="Logo" /> </div>
      {/* ////////////////////////////////////////////////////////////////////////////// */}

      {/* SEARCH BAR */}
      <div style={{display:"flex", alignItems:"center"}}>
        <div style={{ width: 300,marginRight:"5px"}}>
          <Autocomplete
            value={value}
            onChange={(event, newValue) => {
              if (typeof newValue === 'string') {
                setValue({
                  title: newValue,
                });
              } else if (newValue && newValue.inputValue) {
                // Create a new value from the user input
                setValue({
                  title: newValue.inputValue,
                });
              } else {
                setValue(newValue);
              }
            }}
            filterOptions={(options, params) => {
              const filtered = filter(options, params);

              // Suggest the creation of a new value
              if (params.inputValue !== '') {
                filtered.push({
                  inputValue: params.inputValue,
                  title: `Add "${params.inputValue}"`,
                });
              }

              return filtered;
            }}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            id="free-solo-with-text-demo"
            options={top100Films}
            getOptionLabel={(option) => {
              // Value selected with enter, right from the input
              if (typeof option === 'string') {
                return option;
              }
              // Add "xxx" option created dynamically
              if (option.inputValue) {
                return option.inputValue;
              }
              // Regular option
              return option.title;
            }}
            renderOption={(option) => option.title}
            style={{ width: 300 }}
            freeSolo
            renderInput={(params) => (
              <TextField {...params} label="Looking for Something? Search Here" variant="outlined" />
            )}
          />
        </div>
        <div><SearchIcon style={{ backgroundColor:'rgb(10, 138, 185)',color:"white",fontSize:40 }}/></div>
      </div>
      
      
      
      {/* /////////////////////////////////////////////////////////////////////////////////////////// */}
      <div style={{width:"150px",display:"flex", justifyContent:"space-around"}}>
        <AccountBoxIcon />
        <FavoriteBorderIcon />
        <ShoppingCartIcon />
      </div>

      <div>
        <Button variant="contained" color="primary" disableElevation>
          Advertise your Karobar
        </Button>
      </div>


    </div>
  )
}

export default Navbar
