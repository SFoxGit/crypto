import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import DatePicker from '../Date/date.picker';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(100),
      height: theme.spacing(100),
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Crypto() {
  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());
  const [search, setSearch] = useState('');

  const searchForCrypto = (e) => {
    
  }
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  const classes = useStyles();
  return (
    <Grid container style={{ height: '90vh' }}>
      <Box
        xs={10}
        boxShadow={14}
        bgcolor="background.paper"
        m={1}
        p={1}
        width="100%"
        height="100%"
      // style={{ width: '50%', height: '50%' }}
      >
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Crypto: </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={search}
            onChange={handleChange}
          >
            <MenuItem value={'BTC'}>BTC</MenuItem>
            <MenuItem value={'ETH'}>ETH</MenuItem>
            <MenuItem value={'ADA'}>Cardano</MenuItem>
            <MenuItem value={'BNB'}>Binance Coin</MenuItem>
            <MenuItem value={'XRP'}>Ripple</MenuItem>
            <MenuItem value={'DOGE'}>Dogecoin</MenuItem>
            <MenuItem value={'DOT'}>Polkadot</MenuItem>
            <MenuItem value={'SOL'}>Solana</MenuItem>
            <MenuItem value={'UNI'}>Uniswap</MenuItem>
            <MenuItem value={'LINK'}>Chainlink</MenuItem>
          </Select>
        </FormControl>

        <DatePicker selectedStartDate={selectedStartDate} setSelectedStartDate={setSelectedStartDate} selectedEndDate={selectedEndDate} setSelectedEndDate={setSelectedEndDate} />
        <Button variant="outlined" color="primary" onClick={searchForCrypto}>Search</Button>
      </Box>
    </Grid>
  )
}
