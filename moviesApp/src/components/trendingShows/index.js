import React,{useState} from 'react'
import { useQuery } from 'react-query'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    card: {display: "flex" ,overflow:'none',width:700},
    media: { },
    avatar: {
      
    },
    movieover: {
      
      position:"absolute",
     
      
      transform: 'translateY(100%)',
      transition: "transform 0.3s ease-in-out",
  
    }
  
   
    
  });
export default function TrendingShows({show}) {
    const classes = useStyles();
    const [showNum, setShowNum] = useState(0)

    //var show= show[showNum]

    //console.log(shows)
    
    show=show
    


   

   
    return (
     
            
  
           <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          width="400"
          image={"https://image.tmdb.org/t/p/original"+show.backdrop_path}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {show.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {show.overview}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
           
       
    )
}