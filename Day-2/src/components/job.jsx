import React, { useEffect, useState } from "react";
import './jobList.css'

const Job = () => {
	const [jobList, setJobList] = useState(null);

	useEffect(() => {
		const fetchJobs = async () => {
			try {
				const response = await fetch (
					"https://api.crackeddevs.com/v1/get-jobs",
					{
						headers: {
							"api-key": "e25836ad-d179-4f9c-a7e4-b909d4b278be",
						},
					}
				);
        console.log(response)

        const arrData = await response.json()
        setJobList(arrData)

			} catch (error) {
				console.error("error fetching jobs:", error.message);
				return null;
			}
		};

		fetchJobs()
	}, []);

	return (
		<div>
      {jobList?.map((item => (
        <div key={item.id} className="container">
          <h2>Title: {item.title }</h2>
          <p>Job type: {item.job_type}</p>
        </div>
      )))}
		</div>
	);
};

export default Job;
