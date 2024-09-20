import React, { useEffect, useState } from "react";
const Jobs = () => {
	const [jobList, setJobList] = useState(null);

	useEffect(() => {
		const fetchJobs = async () => {
			try {
				const response = await fetch(
					"https://api.theirstack.com//v1/jobs/search",
					{
						headers: {
							"api-key": "",
						},
					}
				);
				console.log(response);

				const arrData = await response.json();
				setJobList(arrData);
			} catch (error) {
				console.error("error fetching jobs:", error.message);
				return null;
			}
		};

		fetchJobs();
	}, []);

	return (
		<div className="main">
			<h2>Welcome to my Joblist app</h2>
			{jobList?.map((item) => (
				<>
					<div key={item.id} className="container">
						<div className="top">
							<h2>Title: {item.title}</h2>
							<p>Job type: {item.job_type}</p>
						</div>

						<div className="bottom">
							<a href={item.apply_url}>
								<button>Apply</button>
							</a>
						</div>
					</div>
				</>
			))}
		</div>
	);
};

export default Jobs;
