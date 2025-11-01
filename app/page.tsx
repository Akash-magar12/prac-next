export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Find Your Dream Job
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Browse thousands of remote & local opportunities from top companies.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-xl flex bg-white rounded-full overflow-hidden shadow-lg">
          <input
            type="text"
            placeholder="Search jobs, roles, or keywords..."
            className="flex-grow px-6 py-3 text-gray-800 outline-none"
          />
          <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 text-white font-semibold">
            Search
          </button>
        </div>
      </section>

      {/* Latest Jobs Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8">Latest Job Openings</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Job Card Example */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">Frontend Developer</h3>
            <p className="text-gray-600 mb-2">Remote | Full Time</p>
            <p className="text-sm text-gray-500 mb-4">
              Company: OpenAI Technologies
            </p>
            <button className="text-indigo-600 font-medium hover:underline">
              View Details →
            </button>
          </div>

          {/* Repeat Job Cards (You’ll replace these with API data later) */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">UI/UX Designer</h3>
            <p className="text-gray-600 mb-2">New York | Hybrid</p>
            <p className="text-sm text-gray-500 mb-4">Company: Pixel Studio</p>
            <button className="text-indigo-600 font-medium hover:underline">
              View Details →
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
