import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import DatePicker from '../Date/date.picker';

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
}));

export default function Crypto() {
  const [selectedStartDate, setSelectedStartDate] = useState(new Date('2014-08-18T21:11:54'));
  const [selectedEndDate, setSelectedEndDate] = useState(new Date('2014-08-18T21:11:54'));

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
        <DatePicker selectedStartDate={selectedStartDate} setSelectedStartDate={setSelectedStartDate} selectedEndDate={selectedEndDate} setSelectedEndDate={setSelectedEndDate}/>
      </Box>
    </Grid>
  )
}
