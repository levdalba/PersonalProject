import React, { useState } from 'react'
import { Box, TextField, Button, Typography } from '@mui/material'
import { Chart, LineController, LinearScale, PointElement } from 'chart.js'

Chart.register(LineController, LinearScale, PointElement)

const Cubic = () => {
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 })

    const handleCoordinateChange = (type: string, value: string) => {
        setCoordinates((prev) => ({ ...prev, [type]: parseFloat(value) }))
    }

    const plotGraph = () => {
        const canvas = document.getElementById('myCanvas') as HTMLCanvasElement
        const ctx = canvas.getContext('2d')
        if (ctx) {
            new Chart(ctx, {
                type: 'scatter',
                data: {
                    datasets: [
                        {
                            label: 'Cubic Function',
                            data: [coordinates],
                            borderColor: 'blue',
                            fill: false,
                            showLine: false,
                        },
                    ],
                },
                options: {
                    scales: {
                        x: { type: 'linear', position: 'bottom' },
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                },
            })
        }
        setCoordinates({ x: 0, y: 0 }) // Reset coordinates
    }

    return (
        <div>
            <Typography
                sx={{
                    fontSize: '25px',
                    display: 'flex',
                    justifyContent: 'center',
                    color: 'green',
                }}
            >
                Solve Cubic problems and display graphs with us!
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
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                <TextField
                    label={`X`}
                    variant="outlined"
                    sx={{ mr: 2 }}
                    InputProps={{ style: { borderRadius: 10 } }}
                    value={coordinates.x}
                    onChange={(e) =>
                        handleCoordinateChange('x', e.target.value)
                    }
                />
                <TextField
                    label={`Y`}
                    variant="outlined"
                    sx={{ mr: 2 }}
                    InputProps={{ style: { borderRadius: 10 } }}
                    value={coordinates.y}
                    onChange={(e) =>
                        handleCoordinateChange('y', e.target.value)
                    }
                />
                <Button
                    sx={{ width: '150px', borderRadius: '20px' }}
                    variant="contained"
                    color="warning"
                    onClick={plotGraph}
                >
                    Plot
                </Button>
            </Box>

            <div
                style={{
                    marginTop: '50px',
                    width: '700px',
                    height: '500px',
                    marginLeft: '20px',
                }}
            >
                <canvas id="myCanvas"></canvas>
            </div>
        </div>
    )
}

export default Cubic
