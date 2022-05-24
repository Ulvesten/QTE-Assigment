import Card from '../Card/Card.jsx';
import './App.css';
import { Typography, Box, Grid, Switch } from '@mui/material';
import { useState } from 'react';

// Process;
// Dataformatering
// Rendering av Grids
// Dynamiska Värden

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
            <Box className='Title__Text'>
                <Typography fontSize={40}>Our Pricing </Typography>
                <Typography fontSize={30} sx={{ color: '#00000060' }}>
                    Monthly
                    <Switch onChange={handleChange} />
                    Annually
                </Typography>
            </Box>
            <Box>
                <Grid
                    container
                    spacing={0}
                    sx={{ justifyContent: 'center', display: 'flex' }}
                    className='Cards'
                >
                    {renderCards()}
                </Grid>
            </Box>
        </div>
    );
}

export default App;
