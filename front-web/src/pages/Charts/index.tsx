<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React, { useEffect, useState } from 'react';
>>>>>>> 61dfad43bbed3f2a0f34725c739d88c9b40a08f9
import Filters from '../../components/Filters';
import './styles.css';
import { barOptions, pieOptions } from './chart-options';
import Chart from 'react-apexcharts';
import axios from 'axios';
<<<<<<< HEAD
import { buildBarSeries, getPlatformChartData, getGenderChartData } from './helpers';
=======
import { buildBarSeries, getPlatformChartData, getGenderChartData} from './helpers';
>>>>>>> 61dfad43bbed3f2a0f34725c739d88c9b40a08f9

type PieChartData = {
    labels: string[];
    series: number[];
}

<<<<<<< HEAD
type BarChartData = {
=======
type barChartData = {
>>>>>>> 61dfad43bbed3f2a0f34725c739d88c9b40a08f9
    x: string;
    y: number;
}

const initialPieData = {
<<<<<<< HEAD
    labels: [], 
=======
    labels: [],
>>>>>>> 61dfad43bbed3f2a0f34725c739d88c9b40a08f9
    series: []
}

const BASE_URL = 'http://localhost:8080';

const Charts = () => {
<<<<<<< HEAD
    const [barChartData, setBarChartData] = useState<BarChartData[]>([]);
=======
    const [barChartData, setBarChartData] = useState<barChartData[]>([]);
>>>>>>> 61dfad43bbed3f2a0f34725c739d88c9b40a08f9
    const [platformData, setPlatformData] = useState<PieChartData>(initialPieData);
    const [genderData, setGenderData] = useState<PieChartData>(initialPieData);

    useEffect(() => {
<<<<<<< HEAD
        async function getData() {
=======
        async function getData(){
>>>>>>> 61dfad43bbed3f2a0f34725c739d88c9b40a08f9
            const recordsResponse = await axios.get(`${BASE_URL}/records`);
            const gamesResponse = await axios.get(`${BASE_URL}/games`);

            const barData = buildBarSeries(gamesResponse.data, recordsResponse.data.content);
            setBarChartData(barData);

            const platformChartData = getPlatformChartData(recordsResponse.data.content);
            setPlatformData(platformChartData);

<<<<<<< HEAD
            const genderChartData = getGenderChartData(recordsResponse.data.content);
            setGenderData(genderChartData);
        }
=======
            }

>>>>>>> 61dfad43bbed3f2a0f34725c739d88c9b40a08f9
        getData();
    }, [])

    return (
        <div className="page-container">
            <Filters link="/records" linkText="VER TABELA" />
<<<<<<< HEAD
            <div className="chart-container">   
=======
            <div className="chart-container">
>>>>>>> 61dfad43bbed3f2a0f34725c739d88c9b40a08f9
                <div className="top-related">
                    <h1 className="top-related-title">
                        Jogos mais votados
                    </h1>
                    <div className="games-container">
                        <Chart 
                            options={barOptions} 
                            type="bar"
                            width="900"
                            height="650"
<<<<<<< HEAD
                            series={[{data: barChartData}]}
=======
                            series={[{data: barChartData }]}
>>>>>>> 61dfad43bbed3f2a0f34725c739d88c9b40a08f9
                        />
                    </div>
                </div>
                <div className="charts">
                    <div className="platform-chart">
                        <h2 className="chart-title">Plataformas</h2>
<<<<<<< HEAD
                        <Chart 
                            options={{ ...pieOptions, labels: platformData?.labels }}
                            type='donut'
                            series={platformData?.series}
=======
                        <Chart
                            options={{ ...pieOptions, labels: platformData?.labels }}
                            type="donut"
                            series={[platformData?.series]}
>>>>>>> 61dfad43bbed3f2a0f34725c739d88c9b40a08f9
                            width="350"
                        />
                    </div>
                    <div className="gender-chart">
                        <h2 className="chart-title">Gêneros</h2>
<<<<<<< HEAD
                        <Chart 
                            options={{ ...pieOptions, labels: genderData?.labels}}
                            type='donut'
                            series={genderData?.series}
=======
                        <Chart
                            options={{ ...pieOptions, labels: genderData?.labels }}
                            type="donut"
                            series={[genderData?.series]}
>>>>>>> 61dfad43bbed3f2a0f34725c739d88c9b40a08f9
                            width="350"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Charts;