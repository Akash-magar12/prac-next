"use client";

import React, { useEffect, useState } from "react";
interface characterType {
  id: number;
  image: string;
  name: string;
}
const Pagination = () => {
  const [characters, setCharacters] = useState<characterType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchCharacters = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacters(data.results);
    } catch (error) {
      console.error("Error fetching characters:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);
  if (loading) {
    return <p className="text-center mt-10 text-gray-500">Loading...</p>;
  }
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Rick and Morty Characters</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {characters.map((char) => (
          <div key={char.id} className="bg-gray-100 p-2 rounded-lg shadow">
            <img src={char.image} alt={char.name} className="rounded-lg" />
            <h2 className="font-semibold text-center text-black mt-2">
              {char.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
