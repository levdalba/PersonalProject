import React, { useState, useRef, useEffect } from 'react'
import {
    Chart,
    LinearScale,
    LineController,
    PointElement,
    LineElement,
    ScatterController,
    CategoryScale,
} from 'chart.js'
import { Box, Typography, TextField, Button } from '@material-ui/core'

Chart.register(
    LinearScale,
    LineController,
    PointElement,
    LineElement,
    ScatterController,
    CategoryScale
)

const Polynomial = () => {
    const [xValues, setXValues] = useState('')
    const [yValues, setYValues] = useState('')
    const chartRef = useRef<Chart | null>(null)

    const calculate = () => {
        if (chartRef.current) {
            chartRef.current.destroy()
        }

        const xData = xValues.split(',').map(Number)
        const yData = yValues.split(',').map(Number)
        const points = xData.map((x, i) => ({ x: x, y: yData[i] }))

        const xPlotValues = []
        for (let i = Math.min(...xData); i <= Math.max(...xData); i += 1) {
            xPlotValues.push(i)
        }

        const yPlotValues = xPlotValues.map((x) =>
            lagrangeInterpolation(x, points)
        )

        const canvas = document.getElementById('myChart')
        if (canvas instanceof HTMLCanvasElement) {
            chartRef.current = new Chart(canvas, {
                type: 'line',
                data: {
                    labels: xPlotValues,
                    datasets: [
                        {
                            type: 'line',
                            label: 'Lagrange Interpolation Polynomial',
                            data: yPlotValues,
                            borderColor: 'rgba(75, 192, 192, 1)',
                            fill: false,
                        },
                        {
                            type: 'scatter',
                            label: 'Points',
                            data: points.map((point) => point.y),
                            borderColor: 'red',
                            backgroundColor: 'red',
                            pointRadius: 5,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Lagrange Polynomial Interpolation',
                        },
                    },
                    scales: {
                        x: {
                            type: 'linear',
                            display: true,
                            title: {
                                display: true,
                                text: 'x',
                            },
                        },
                        y: {
                            type: 'linear',
                            display: true,
                            title: {
                                display: true,
                                text: 'y',
                            },
                        },
                    },
                },
            })
        }
    }

    const lagrangeInterpolation = (x: number, points: string | any[]) => {
        let result = 0
        let n = points.length

        for (let i = 0; i < n; i++) {
            let term = points[i].y
            for (let j = 0; j < n; j++) {
                if (j !== i) {
                    term *= (x - points[j].x) / (points[i].x - points[j].x)
                }
            }
            result += term
        }

        return result
    }

    return (
        <Box>
            <Typography
                variant="h6"
                style={{
                    fontSize: '25px',
                    display: 'flex',
                    justifyContent: 'center',
                    color: 'green',
                }}
            >
                Solve Polynomial problems and display graphs with us!
            </Typography>
            <Typography
                variant="h6"
                style={{
                    fontSize: '25px',
                    display: 'flex',
                    justifyContent: 'center',
                    color: 'brown',
                }}
            >
                Input your equations to solve them!
            </Typography>
            <Box
                sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '16px',
                }}
            >
                <TextField
                    label="X Value"
                    variant="outlined"
                    style={{ marginRight: '8px', borderRadius: 20 }}
                    value={xValues}
                    onChange={(e) => setXValues(e.target.value)}
                />
                <TextField
                    label="Y Value"
                    variant="outlined"
                    style={{ marginRight: '8px', borderRadius: 20 }}
                    value={yValues}
                    onChange={(e) => setYValues(e.target.value)}
                />
                <Button
                    style={{ width: '150px', borderRadius: '20px' }}
                    variant="contained"
                    color="primary"
                    onClick={calculate}
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
            </div>{' '}
        </Box>
    )
}

export default Polynomial
