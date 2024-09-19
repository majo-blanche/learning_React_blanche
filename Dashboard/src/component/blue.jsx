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
	registerables,
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

const Blue= () => {
	const data = {
		labels: ["Jan", "Feb", "Mar", "Apr", "May"],
		datasets: [
			{
				label: "any",
				data: [100, 59, 80, 81, 20],
				fill: true,
				borderColor: "skyblue",
				
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
			},
		},
	};

	return( <Line className="bleu" data={data} options={options} />)
};

export default Blue;
