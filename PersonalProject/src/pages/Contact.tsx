import React from 'react'
import {
    Typography,
    Box,
    Container,
    Link,
    Card,
    CardContent,
    CardMedia,
    Grid,
} from '@mui/material'
import levanImage from '../logo/leo.jpeg'
import georgeImage from '../logo/kurta.jpeg'
import irakliImage from '../logo/kere.jpeg'
import './Contact.css' // Import the CSS file

const Contact = () => {
    return (
        <Container maxWidth="md" className="fade-in">
            <Box sx={{ my: 4 }}>
                <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    align="center"
                    sx={{ color: 'green' }}
                >
                    Contact Page
                </Typography>

                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                            className="slide-in"
                        >
                            <CardMedia
                                component="img"
                                height="250"
                                image={levanImage}
                                alt="Levan Dalbashvili"
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h2"
                                >
                                    Levan Dalbashvili
                                </Typography>
                                <Typography>
                                    Email:{' '}
                                    <Link href="https://mail.google.com/mail">
                                        levanidalbashvili00@gmail.com
                                    </Link>
                                </Typography>
                                <Typography>
                                    Instagram:{' '}
                                    <Link
                                        href="https://www.instagram.com/levandalbashvili"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        @levandalbashvili
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                            className="slide-in"
                        >
                            <CardMedia
                                component="img"
                                height="250"
                                image={georgeImage}
                                alt="George Kurtanidze"
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h2"
                                >
                                    George Kurtanidze
                                </Typography>
                                <Typography>
                                    Email:{' '}
                                    <Link href="https://mail.google.com/mail">
                                        george@example.com
                                    </Link>
                                </Typography>
                                <Typography>
                                    Instagram:{' '}
                                    <Link
                                        href="https://www.instagram.com/george"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        @george
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                            className="slide-in"
                        >
                            <CardMedia
                                component="img"
                                height="250"
                                image={irakliImage}
                                alt="Irakli Kereleishvili"
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h2"
                                >
                                    Irakli Kereleishvili
                                </Typography>
                                <Typography>
                                    Email:{' '}
                                    <Link href="https://mail.google.com/mail">
                                        irakli@example.com
                                    </Link>
                                </Typography>
                                <Typography>
                                    Instagram:{' '}
                                    <Link
                                        href="https://www.instagram.com/irakli"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        @irakli
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Contact
