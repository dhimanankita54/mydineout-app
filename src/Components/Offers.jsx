import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './styles/home.css';

export default function ActionAreaCard() {
    return (
        <>
            <Typography
            textAlign="left"
                variant="h6"
                color="black"
                fontSize="25px"
                margin="30px 30px 10px 30px"
                marginLeft = "15%"
                fontWeight="bold"
                component="div"
                sx={{ display: { xs: 'none', sm: 'block' } }}
            >
                Best Offers
            </Typography>
            <div className="offers-container" >

                <CardActionArea>
                    <CardMedia
                        className="offer_card"
                        component="img"
                        height="180"
                        image="https://im1.dineout.co.in/images/uploads/misc/2020/Nov/20/30offid.png?tr=tr:n-small"
                        alt="green iguana"
                    />

                </CardActionArea>
                <CardActionArea>
                    <CardMedia
                        className="offer_card"
                        component="img"
                        height="180"
                        image="https://im1.dineout.co.in/images/uploads/misc/2020/Aug/12/25offid.png?tr=tr:n-small"
                        alt="green iguana"
                    />

                </CardActionArea>
                <CardActionArea>
                    <CardMedia
                        className="offer_card"
                        component="img"
                        height="180"
                        image="https://im1.dineout.co.in/images/uploads/misc/2020/Aug/12/20offid.png?tr=tr:n-small"
                        alt="green iguana"
                    />

                </CardActionArea>
                <CardActionArea>
                    <CardMedia
                        className="offer_card"
                        component="img"
                        height="180"
                        image="https://im1.dineout.co.in/images/uploads/misc/2020/Nov/20/15offid.png?tr=tr:n-small"
                        alt="green iguana"
                    />

                </CardActionArea>
            </div>
        </>
    );
}
