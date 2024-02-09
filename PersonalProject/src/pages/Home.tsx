import React from 'react'
import { Typography, Button } from '@mui/material'
import graph from '../logo/graph.png'
import './Home.css'
import scroll from '../logo/scroll.png'
const Home = () => {
    return (
        <div className="welcome">
            <div className="content">
                <Typography variant="h6" gutterBottom>
                    Hey! we are Levan, George and Irakli!
                </Typography>
                <Typography variant="h3" gutterBottom>
                    Welcome to <span className="p">our website</span>
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Solve cubic polynomials and linear equations effortlessly
                    with our advanced algorithms.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Get instant solutions and insightful graphs. Join us and
                    conquer math challenges with ease!
                </Typography>
            </div>
            <img src={graph} alt="Graph" className="graph-image" />
            <div className="scroll-text">
                <Typography className="pp">scroll down for more</Typography>
                <img src={scroll} alt="" />
            </div>
        </div>
    )
}

export default Home
