
import React from "react";
import { Line, Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	registerables
} from "chart.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	...registerables
);

const Chart = () => {
	
	const data = {
		labels: [
			"Jan",
			"Feb",
			"Mar",
			"April",
			"May",
			"June",
			"Jul",
			"Aug",
			"Sep",
			"oct",
			"Nov",
			"Dec",
		],
		datasets: [
			{
				label: "TRAFIC",
				data: [65, 59, 80, 81, 56, 55, 45, 76, 98, 12, 23, 43],
				fill: false,
				borderColor: "skyblue",
				backgroundColor: "skyblue",
				tension: 0.1,
			},       
			{
				label: "TRAFIC",
				data: [65, 59, 80, 81, 56, 55, 45, 76, 98, 12, 23, 43],
				fill: false,
				borderColor: "skyblue",
				backgroundColor: "blue",
				tension: 0.1,
			},
		],
	};
	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top",
			},
			title: {
				display: true,
				text: "TRAFIC",
			},
		},
	};

	return (
		<div className="chart">
			<Bar data={data} options={options}  />;
			
		</div>
	);
};

export default Chart;
