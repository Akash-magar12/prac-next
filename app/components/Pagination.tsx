"use client";

import React, { useEffect, useState } from "react";

interface CharacterType {
  id: number;
  image: string;
  name: string;
}

const Pagination = () => {
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const fetchCharacters = async (pageNumber: number) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${pageNumber}`
      );
      const data = await response.json();
      setCharacters(data.results);
      setTotalPages(data.info.pages);
    } catch (error) {
      console.error("Error fetching characters:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters(page);
  }, [page]);

  const handleNext = () => {
    if (page < totalPages) setPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  if (loading) {
    return <p className="text-center mt-10 text-gray-500">Loading...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Rick and Morty Characters
      </h1>

      {/* Character Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {characters.map((char) => (
          <div
            key={char.id}
            className="bg-gray-100 p-2 rounded-lg shadow hover:scale-105 transition-transform"
          >
            <img src={char.image} alt={char.name} className="rounded-lg" />
            <h2 className="font-semibold text-center text-black mt-2">
              {char.name}
            </h2>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className={`px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition ${
            page === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Previous
        </button>

        <span className="font-medium">
          Page {page} of {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className={`px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition ${
            page === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
