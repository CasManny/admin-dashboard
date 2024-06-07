"use client"
import React from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer} from 'recharts'
import data from '@/data/analytics'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

const AnalyticsChart = () => {
  return (
    <Card className='mt-5'>
      <CardHeader>
        <CardTitle>Analytics For this Year</CardTitle>
        <CardDescription>Views per month</CardDescription>
        <CardContent>
          <div style={{width: '100%', height: 300}}>
            <ResponsiveContainer>
              <LineChart width={1100} height={300} data={data}>
                <Line type={'monotone'} dataKey={'uv'} stroke='#8884d8' />
                <CartesianGrid stroke='#ccc' />
                <XAxis dataKey={'name'} />
                <YAxis />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  )
}

export default AnalyticsChart