import { Box } from "@mui/material"
import { NavBar, SideBar } from "../components";


const drawerWidth = 280;

export const JournalLayout = ({ children }) => {
    return (
        <Box  sx={{ displa: 'flex' }}>

            <NavBar drawerWidth={ drawerWidth }/>
            <SideBar drawerWidth={ drawerWidth } />

            <Box 
                component='main'
                sx={{ flexGrow: 1, p: 3 }}
            >

                {/* Toolbar */}
                
                { children }

            </Box>

        </Box>
    )
}
