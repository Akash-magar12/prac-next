import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          Find Your Next Opportunity
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-8">
          Discover thousands of jobs from top companies. Search, explore, and
          apply — all in one place.
        </p>

        {/* Search Bar */}
        <div className="flex w-full max-w-lg space-x-2">
          <Input
            type="text"
            placeholder="Search jobs, roles, or keywords..."
            className="bg-white text-black placeholder:text-gray-500"
          />
          <Button
            variant="default"
            className="bg-white text-black hover:bg-gray-200"
          >
            Search
          </Button>
        </div>
      </section>
    </main>
  );
}
