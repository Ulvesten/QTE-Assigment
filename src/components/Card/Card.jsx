import React from 'react';
import { Typography, Grid, Divider, Button } from '@mui/material';
import './Card.css';

export const Cards = ({
    monthly,
    yearly,
    title,
    storage,
    user,
    send,
    isYearly,
    isSpecialOffer,
}) => {
    return (
        <Grid className={isSpecialOffer ? 'Card__Special' : 'Card'} item xs={2}>
            <Typography pt={4} fontSize={30}>
                {title}
            </Typography>
            <Typography pt={2} fontSize={70}>
                ${isYearly ? yearly : monthly}
            </Typography>
            <Divider></Divider>
            <Typography p={3} fontSize={20}>
                {storage} Storage
            </Typography>
            <Divider></Divider>
            <Typography p={3} fontSize={20}>
                {user} Users Allowed
            </Typography>
            <Divider></Divider>
            <Typography p={3} fontSize={20}>
                Send up to {send}
            </Typography>
            <Divider></Divider>
            <Button
                variant='outlined'
                className='LearnMore__Button'
                sx={{ marginTop: '20px', marginBottom: '20px' }}
            >
                Learn More
            </Button>
        </Grid>
    );
};
export default Cards;
