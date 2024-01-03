import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



export default function NavBar(props) {

    const drawerWidth = 240;
    const navItems = ['Home', 'User Policy', 'Documentation'];

    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2, fontFamily:'Henry Sans', color:'#1976d2', fontWeight:'bold'}}>
            Datastrix
        </Typography>
        <Divider />
        <List>
            {navItems.map((item) => (
            <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
                </ListItemButton>
            </ListItem>
            ))}
        </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return <>
        <AppBar component="nav" sx={{backgroundColor:'white'}}>
            <Toolbar>
                <IconButton
                    color="#1976d2"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                
                <Box sx={{ display: { xs: 'none', sm: 'block' }, marginLeft:'auto'}}>
                    {navItems.map((item,index) => (
                    <Button key={item} disableTouchRipple disableRipple sx={{ 
                        color: 'black', 
                        fontFamily:'Henry Sans',
                        marginRight: index < navItems.length - 1 ? '1rem' : '0', 
                        fontSize: '18px',
                        textTransform:'none',
                        fontWeight: item === 'Home' ? 'bold': 'regular',
                        borderBottom: item === 'Home' ? '4px solid #1976d2' : 'none',
                        borderRadius:'0px',
                        backgroundColor:'transparent',
                        "&:hover": {
                            backgroundColor: "transparent"
                        }}}
                        >
                        {item}
                    </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>   

      <nav>
            <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            >
            {drawer}
            </Drawer>
      </nav>
      
    </>
} 