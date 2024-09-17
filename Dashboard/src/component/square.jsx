
import React from "react";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const Chart = () => {
	
	const data = {
		labels: ["January", "February", "March", "April", "May", "June"],
		datasets: [
			{
				label: "Sales",
				data: [65, 59, 80, 81, 56, 55],
				fill: false,
				borderColor: "rgba(75, 192, 192, 1)",
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
				text: "Sales Over Time",
			},
		},
	};

	return (
		<div className="chart">
			<Line data={data} options={options} />;
			
		</div>
	);
};

export default Chart;
