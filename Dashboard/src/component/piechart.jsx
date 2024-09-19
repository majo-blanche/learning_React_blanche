import React from 'react'
import { Line, Bar} from "react-chartjs-2";
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

const Piechart = () => {
	const data = {
		labels: [
			"January",
			"February",
			"March",
			"April",
			"May",
			
			
		],
		datasets: [
			{
				label: "Sale",
				data: [65, 59, 80, 81, 56, 55, 45, 76, 98, 12, 23, 43],
				fill: true,
				borderColor: "skyblue",
				backgroundColor: "skyblue",
				tension: 0.1,
			},
			{
				label: "Sale",
				data: [90, 100, 80, 81, 56, ],
				fill: true,
				borderColor: "blue",
				backgroundColor: "blue",
        tension: 0.1,
        borderRadius:"10px"
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
		
			<Line className='pie' data={data} options={options} />
		
	);
};



export default Piechart
