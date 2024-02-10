import React from 'react'
import { Typography, Button, Box, TextField } from '@mui/material'
import graph from '../logo/graph.png'
import './Home.css'
import scroll from '../logo/scroll.png'
import Linear from './linear'
import Cubic from './cubic'
import Polynomial from './polynomial'
const Home = () => {
    return (
        <div>
            <div className="welcome">
                <div className="content">
                    <Typography variant="h6" gutterBottom>
                        Hey! we are Levan, George and Irakli!
                    </Typography>
                    <Typography variant="h3" gutterBottom>
                        Welcome to <span className="p">our website</span>
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Solve Cubic, Polynomials and Linear equations
                        effortlessly with our advanced algorithms.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Get instant solutions and insightful graphs. Join us and
                        conquer math challenges with ease!
                    </Typography>
                </div>
                <img src={graph} alt="Graph" className="graph-image" />
                <div className="scroll-text">
                    <Typography className="button">
                        <Button
                            sx={{ width: '100px', borderRadius: '10px' }}
                            variant="contained"
                            color="primary"
                        >
                            Linear
                        </Button>
                        <Button
                            sx={{ width: '100px', borderRadius: '10px' }}
                            variant="contained"
                            color="primary"
                        >
                            Cubic
                        </Button>
                        <Button
                            sx={{ borderRadius: '10px' }}
                            variant="contained"
                            color="primary"
                        >
                            Polynomial
                        </Button>
                    </Typography>
                </div>
            </div>
            <div className="linear">
                <Typography
                    sx={{
                        fontSize: '25px',
                        display: 'flex',
                        justifyContent: 'center',
                        color: 'green',
                    }}
                >
                    Solve Linear problems and display graphs with us!
                </Typography>
                <Typography
                    sx={{
                        fontSize: '25px',
                        display: 'flex',
                        justifyContent: 'center',
                        color: 'brown',
                    }}
                >
                    Input your equations to solve them!
                </Typography>
                <Linear />
            </div>
        </div>
    )
}

export default Home
