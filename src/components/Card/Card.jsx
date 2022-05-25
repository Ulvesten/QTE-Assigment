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
        <Grid
            className={isSpecialOffer ? 'Card__Special' : 'Card'}
            item
            xs={12}
            md={4}
        >
            <Typography pt={4} fontSize={25}>
                {title}
            </Typography>
            <Typography pt={2} fontSize={70}>
                ${isYearly ? yearly : monthly}
            </Typography>
            <Divider
                sx={{ width: '70%' }}
                flexItem={true}
                variant={'inset'}
            ></Divider>
            <Typography p={3} fontSize={20}>
                {storage} Storage
            </Typography>
            <Divider
                sx={{ width: '70%' }}
                flexItem={true}
                variant={'inset'}
            ></Divider>
            <Typography p={3} fontSize={20}>
                {user} Users Allowed
            </Typography>
            <Divider
                sx={{ width: '70%' }}
                flexItem={true}
                variant={'inset'}
            ></Divider>
            <Typography p={3} fontSize={20}>
                Send up to {send}
            </Typography>
            <Divider
                sx={{ width: '70%' }}
                flexItem={true}
                variant={'inset'}
            ></Divider>
            <Button
                variant='outlined'
                className='LearnMore__Button'
                size='large'
                sx={{
                    marginTop: '20px',
                    marginBottom: '35px',
                    width: '80%',
                    borderRadius: '5px',
                }}
            >
                Learn More
            </Button>
        </Grid>
    );
};
export default Cards;
