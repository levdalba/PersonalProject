import React, { useState } from 'react'
import { Box, TextField, Button, Typography } from '@mui/material'
import {
    Chart,
    LinearScale,
    ScatterController,
    PointElement,
    LineElement,
} from 'chart.js'

Chart.register(LinearScale, ScatterController, PointElement, LineElement)
let chartInstance: Chart<
    'scatter',
    { x: number; y: number }[],
    unknown
> | null = null

const Linear = () => {
    const [xValues, setXValues] = useState<number[]>([])
    const [yValues, setYValues] = useState<number[]>([])
    const [xInput, setXInput] = useState('')
    const [yInput, setYInput] = useState('')

    const addData = () => {
        const x = xInput.split(',').map(Number)
        const y = yInput.split(',').map(Number)

        if (x.every(isFinite) && y.every(isFinite) && x.length === y.length) {
            setXValues((prevXValues) => [...prevXValues, ...x])
            setYValues((prevYValues) => [...prevYValues, ...y])
            updateChart()
        }

        setXInput('')
        setYInput('')
    }

    const linearApproximation = (xValues: number[], yValues: number[]) => {
        const n = xValues.length
        let sumX = 0,
            sumY = 0,
            sumXY = 0,
            sumXX = 0
        for (let i = 0; i < n; i++) {
            sumX += xValues[i]
            sumY += yValues[i]
            sumXY += xValues[i] * yValues[i]
            sumXX += xValues[i] * xValues[i]
        }
        const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX)
        const intercept = (sumY - slope * sumX) / n
        return [intercept, slope]
    }

    const updateChart = () => {
        const originalData = {
            label: 'Original Data',
            data: xValues.map((x, i) => ({ x, y: yValues[i] })),
            borderColor: 'blue',
            backgroundColor: 'transparent',
            showLine: false,
            fill: false,
        }

        const coefficients = linearApproximation(xValues, yValues)

        const xValuesApprox = Array.from({ length: 2 }, (_, i) =>
            i === 0 ? Math.min(...xValues) : Math.max(...xValues)
        )
        const yValuesApprox = xValuesApprox.map(
            (x) => coefficients[0] + coefficients[1] * x
        )

        const linearApproximationData = {
            label: 'Linear Approximation',
            data: xValuesApprox.map((x, i) => ({ x, y: yValuesApprox[i] })),
            borderColor: 'red',
            backgroundColor: 'transparent',
            showLine: true,
            fill: false,
        }

        if (chartInstance) {
            chartInstance.destroy()
        }

        chartInstance = new Chart('myCanvas', {
            type: 'scatter',
            data: {
                datasets: [originalData, linearApproximationData],
            },
            options: {
                scales: {
                    x: { type: 'linear', position: 'bottom' },
                },
            },
        })
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

export default Linear
