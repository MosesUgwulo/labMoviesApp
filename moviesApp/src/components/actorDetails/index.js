import React, { useState} from "react";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";


export default function ActorDetails( { actors } ) {

    const root = {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        listStyle: "none",
        padding: 1.5,
        margin: 0,
    };
    
    const [drawerOpen, setDrawerOpen] = useState(false);

  return (
<>
      <Typography variant="h5" component="h3">
        <b>Biography of {actors.name}</b>
      </Typography>

      <Typography variant="h6" component="p">
        {actors.biography}
      </Typography>

      <Paper 
        component="ul" 
        sx={root}>
         <Chip
         label={`${actors.popularity}`}
        />
        
        <Chip
         label={`${actors.birthday}`}
        />

         <Chip
         label={`${actors.place_of_birth}`}
        />

         <Chip
         label={`${actors.known_for_department}`}
        />

        </Paper>

      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}>

        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
      </Drawer>
      </>
  );
};
