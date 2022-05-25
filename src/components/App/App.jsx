import Card from '../Card/Card.jsx';
import './App.css';
import { Typography, Box, Grid, Switch, Container, Stack } from '@mui/material';
import { useState } from 'react';
import { styled } from '@mui/material/styles';

// Process;
// Dataformatering
// Rendering av Grids
// Dynamiska Värden
const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 56,
    height: 32,
    padding: 0,
    display: 'flex',
    '&:active': {
        '& .MuiSwitch-thumb': {
            width: 30,
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(18px)',
        },
    },
    '& .MuiSwitch-switchBase': {
        padding: 4,
        '&.Mui-checked': {
            transform: 'translateX(24px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor:
                    theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
        width: 24,
        height: 24,
        borderRadius: 50,
        transition: theme.transitions.create(['width'], {
            duration: 200,
        }),
    },
    '& .MuiSwitch-track': {
        borderRadius: 32 / 2,
        opacity: 1,
        backgroundColor:
            theme.palette.mode === 'dark'
                ? 'rgba(255,255,255,.35)'
                : 'rgba(0,0,0,.25)',
        boxSizing: 'border-box',
    },
}));
const offers = [
    {
        monthly: '19.99',
        yearly: '199.99',
        title: 'Basic',
        storage: '500 GB',
        user: '2',
        send: '3 GB',
    },
    {
        monthly: '24.99',
        yearly: '249.99',
        title: 'Professional',
        storage: '1 TB',
        user: '5',
        send: '10 GB',
    },
    {
        monthly: '39.99',
        yearly: '399.99',
        title: 'Master',
        storage: '2 TB',
        user: '10',
        send: '20 GB',
    },
];

function App() {
    const [isYearly, setIsYearly] = useState(false);
    function handleChange(event, value) {
        setIsYearly(value);
    }

    const renderCards = () => {
        return offers.map((offer, i) => (
            <Card
                {...offer}
                key={i}
                isYearly={isYearly}
                isSpecialOffer={i % 2 !== 0}
            />
        ));
    };
    return (
        <div className='App'>
            <Container maxWidth={'lg'}>
                <Box className='Title__Text'>
                    <Typography
                        fontSize={40}
                        pt={5}
                        sx={{ color: 'hsl(232, 13%, 33%)' }}
                    >
                        Our Pricing{' '}
                    </Typography>

                    <Stack direction='row' spacing={1} alignItems='center'>
                        <Typography fontSize={15} sx={{ color: '#00000060' }}>
                            Monthly
                        </Typography>
                        <AntSwitch
                            inputProps={{ 'aria-label': 'ant design' }}
                            onChange={handleChange}
                        />
                        <Typography fontSize={15} sx={{ color: '#00000060' }}>
                            Annually
                        </Typography>
                    </Stack>
                </Box>
                <Box>
                    <Grid
                        container
                        Spacing={{ xs: '10', md: 0 }}
                        sx={{
                            justifyContent: 'center',
                            display: 'flex',
                            flexDirection: {
                                xs: 'column',
                                md: 'row',
                            },
                            gap: { xs: '2vh', md: '0' },
                        }}
                        className='Cards'
                    >
                        {renderCards()}
                    </Grid>
                </Box>
            </Container>
        </div>
    );
}

export default App;
