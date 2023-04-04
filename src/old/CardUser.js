import * as React from 'react';
import {
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  CardActionArea
} from '@mui/material';

import logo from "../logo.svg";

const CardUser = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" image={logo} alt="user" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.phone}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardUser;