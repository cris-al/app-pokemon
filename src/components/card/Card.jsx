import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider, IconButton } from '@mui/material';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { red } from '@mui/material/colors';

export default function CardComponent(props) {
  const [favourite, setFavourite] = React.useState(false);
  return (
    <Card sx={{ 
              maxWidth: 340, 
              backgroundColor: '#1e88e5', 
              margin: '1rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
          }}>
      <CardMedia
        component="img"
        height="60%"
        image={props.image}
        alt={props.name}
        sx={{filter: 'drop-shadow(5px 5px 4px #0d47a1)',
             transition: '1s',
             ':hover': {transform: 'scale(1.02)'}}}
      />
      <CardContent height="20%">
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions height="20%">
        <IconButton onClick={()=>setFavourite(!favourite)}
        sx={{transition: '1s' ,':hover':{backgroundColor:'#1565c0', color: '#eeeeee'}}}>
         { favourite ? <FavoriteRoundedIcon sx={{color: red[500]}}/> : <FavoriteBorderRoundedIcon />}
        </IconButton>
        <Button size="small" sx={{color: 'black', transition: '1s',':hover':{backgroundColor:'#1565c0', color: '#eeeeee'}}}>Detail</Button>
      </CardActions>
    </Card>
  );
}