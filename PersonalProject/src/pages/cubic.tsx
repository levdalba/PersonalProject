import React, { useState, useRef, useEffect } from 'react'
import { Box, TextField, Button, Typography } from '@mui/material'
import {
    Chart,
    LinearScale,
    ScatterController,
    PointElement,
    LineElement,
} from 'chart.js'

Chart.register(LinearScale, ScatterController, PointElement, LineElement)

const Cubic = () => {
    const [xInput, setXInput] = useState('')
    const [yInput, setYInput] = useState('')
    const [data, setData] = useState<{ x: number; y: number }[]>([])
    const chartRef = useRef<Chart | null>(null)

    const addData = () => {
        setData((prev) => [
            ...prev,
            { x: parseFloat(xInput), y: parseFloat(yInput) },
        ])
    }

    useEffect(() => {
        chartRef.current = new Chart('myCanvas', {
            type: 'scatter',
            data: {
                datasets: [],
            },
            options: {
                scales: {
                    x: { type: 'linear', position: 'bottom' },
                },
            },
        })

        return () => {
            if (chartRef.current) {
                chartRef.current.destroy()
            }
        }
    }, [])

    useEffect(() => {
        if (chartRef.current) {
            if (chartRef.current.data.datasets.length > 0) {
                chartRef.current.data.datasets[0] = {
                    data: data,
                    borderColor: 'red',
                    backgroundColor: 'transparent',
                }
            } else {
                chartRef.current.data.datasets.push({
                    data: data,
                    borderColor: 'red',
                    backgroundColor: 'transparent',
                })
            }
            chartRef.current.update()
        }
    }, [data])

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
                    label="X Value"
                    variant="outlined"
                    sx={{ mr: 2 }}
                    InputProps={{ style: { borderRadius: 10 } }}
                    value={xInput}
                    onChange={(e) => setXInput(e.target.value)}
                />
                <TextField
                    label="Y Value"
                    variant="outlined"
                    sx={{ mr: 2 }}
                    InputProps={{ style: { borderRadius: 10 } }}
                    value={yInput}
                    onChange={(e) => setYInput(e.target.value)}
                />
                <Button
                    sx={{ width: '150px', borderRadius: '20px' }}
                    variant="contained"
                    color="warning"
                    onClick={addData}
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
