import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"

export const SideBar = ({ drawerWidth }) => {
    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
           <Drawer
                variant='permanent' // temporary if you want to show it in a conditional way
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
           >
                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>
                        Omar Ascanio Arias
                    </Typography>
                </Toolbar>
                <Divider />

                <List>
                    {
                        ['January', 'February', 'March', 'Arpil'].map( text => ( 
                            <ListItem key={ text } disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={ text }/>
                                        <ListItemText secondary={ 'Id labore nostrud exercitation anim qui fugiat est deserunt.' }/>
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                         ))
                    }
                </List>

            </Drawer> 
        </Box>
    )
}
