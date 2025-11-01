import { Card as JobCard, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Card = async () => {
  const res = await fetch("https://jobicy.com/api/v2/remote-jobs?count=10");
  const data = await res.json();
  const jobs = data.jobs || [];
  console.log(jobs);
  return (
    <section className="min-h-screen bg-black text-white px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-10">
        Latest Job Openings
      </h1>

      {jobs.length === 0 ? (
        <p className="text-center text-gray-400">No jobs found.</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              className="bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition rounded-xl"
            >
              <CardContent className="p-6">
                <h3 className="text-lg text-white font-semibold mb-2 line-clamp-1">
                  {job.jobTitle}
                </h3>
                <p className="text-gray-400 text-sm mb-2">{job.jobType}</p>
                <p className="text-gray-500 text-sm mb-4 line-clamp-1">
                  {job.companyName}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">
                    {job.jobGeo || "Remote"}
                  </span>
                  <Button
                    asChild
                    variant="secondary"
                    className="bg-white text-black hover:bg-gray-200 text-sm"
                  >
                    <a href={job.url} target="_blank" rel="noopener noreferrer">
                      View
                    </a>
                  </Button>
                </div>
              </CardContent>
            </JobCard>
          ))}
        </div>
      )}
    </section>
  );
};

export default Card;
