import React from 'react';
import { Box, Grid, Typography, TextField, InputAdornment, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CheckIcon from '@mui/icons-material/Check';
import clsx from 'clsx';

const SectionFirst = () => {
    return (
        <Box sx={{minHeight: '100vh', display: 'flex', paddingTop: '2%' }}
        className={clsx('bg-orange-100', 'dark:bg-slate-800')}>
            <Grid container sx={{ height: '100%' }}>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/007/138/783/large_2x/recruitment-concept-girl-browsing-work-opportunities-online-using-job-search-app-or-website-on-laptop-free-photo.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100vh'
                    }}
                ></Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 4 }}>
                    <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
                        Find The Perfect<br />Job For You
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'gray', marginTop: 2 }}>
                        Search your career opportunity through 12,000 yours
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 4 }}>
                        <TextField
                            variant="outlined"
                            placeholder="Search job title"
                            sx={{ flex: 1, marginRight: 2, '& .MuiOutlinedInput-root': { borderRadius: '20px', background: 'white', color: 'black' } }}
                        />
                        <TextField
                            variant="outlined"
                            placeholder="Location"
                            sx={{ flex: 1, '& .MuiOutlinedInput-root': { borderRadius: '20px', background: 'white', color: 'black' }}}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton sx={{ bgcolor: 'orange', borderRadius: '20px', color: 'white' }}>
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>
                    <List sx={{ marginTop: 4 }}>
                        <ListItem>
                            <ListItemIcon>
                                <CheckIcon />
                            </ListItemIcon>
                            <ListItemText primary="Wide range of job categories" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CheckIcon />
                            </ListItemIcon>
                            <ListItemText primary="Flexible working hours" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CheckIcon />
                            </ListItemIcon>
                            <ListItemText primary="Remote work options" />
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SectionFirst;
