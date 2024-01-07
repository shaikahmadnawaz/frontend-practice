import { useState, useEffect } from "react";

const JobBoard = () => {
  const [jobIds, setJobIds] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchJobIds = async () => {
      const response = await fetch(
        "https://hacker-news.firebaseio.com/v0/jobstories.json"
      );
      const data = await response.json();
      setJobIds(data);
      setIsLoading(false);
    };

    fetchJobIds();
  }, []);

  useEffect(() => {
    const fetchJobs = async () => {
      const start = (page - 1) * 6;
      const end = start + 6;

      const jobsData = await Promise.all(
        jobIds.slice(start, end).map(async (id) => {
          const response = await fetch(
            `https://hacker-news.firebaseio.com/v0/item/${id}.json`
          );
          return await response.json();
        })
      );

      setJobs((prevJobs) => [...prevJobs, ...jobsData]);
    };

    if (!isLoading) {
      fetchJobs();
    }
  }, [jobIds, page, isLoading]);

  // using axios

  //  useEffect(() => {
  //    const fetchJobIds = async () => {
  //      try {
  //        const response = await axios.get(
  //          "https://hacker-news.firebaseio.com/v0/jobstories.json"
  //        );
  //        setJobIds(response.data);
  //        setIsLoading(false);
  //      } catch (error) {
  //        console.error("Error fetching job IDs:", error);
  //      }
  //    };

  //    fetchJobIds();
  //  }, []);

  //  useEffect(() => {
  //    const fetchJobs = async () => {
  //      const start = (page - 1) * 6;
  //      const end = start + 6;

  //      try {
  //        const jobDataPromises = jobIds.slice(start, end).map(async (id) => {
  //          const response = await axios.get(
  //            `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  //          );
  //          return response.data;
  //        });

  //        const jobsData = await Promise.all(jobDataPromises);
  //        setJobs((prevJobs) => [...prevJobs, ...jobsData]);
  //      } catch (error) {
  //        console.error("Error fetching job details:", error);
  //      }
  //    };

  //    if (!isLoading) {
  //      fetchJobs();
  //    }
  //  }, [jobIds, page, isLoading]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="mx-auto flex flex-col justify-center items-center max-w-lg py-4">
      <h1 className="flex justify-start text-left text-2xl w-full font-bold text-orange-500">
        Hacker News Jobs Board
      </h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="py-4 flex flex-col gap-y-4 font-normal">
          {jobs.map((job) => (
            <div key={job.id} className="border shadow-md p-3">
              <h3 className="font-bold text-xl">
                {job.url ? (
                  <a href={job.url} target="_blank" rel="noopener noreferrer">
                    {job.title}
                  </a>
                ) : (
                  job.title
                )}
              </h3>
              <p>
                Posted by {job.by} .{" "}
                {new Date(job.time * 1000).toLocaleString()}
              </p>
            </div>
          ))}
          {jobs.length < jobIds.length && (
            <button onClick={handleLoadMore}>Load More</button>
          )}
        </div>
      )}
    </div>
  );
};

export default JobBoard;
