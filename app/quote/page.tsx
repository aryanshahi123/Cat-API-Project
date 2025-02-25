"use client";
import { useEffect, useState } from "react";

interface Quote {
  quote: string;
  author: string;
}

export default function Quote() {
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.quotable.io/random");
        const fetchedData = await response.json();

        setQuote({
          quote: fetchedData.content || "No quote available",
          author: fetchedData.author || "Unknown Author",
        });
      } catch (error) {
        console.error("Error fetching quote:", error);
      }
    };

    fetchData();
  }, []); // Runs once when the component mounts

  return (
    <main className="flex justify-center items-center h-screen flex-col bg-gray-900">
      <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-lg animate-fadeIn">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Random Quote</h1>

        {quote ? (
          <div className="text-center">
            <p className="text-lg font-medium text-gray-700 mb-2">"{quote.quote}"</p>
            <p className="text-sm text-gray-500">- {quote.author}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}

        <button
          onClick={() => location.reload()} // Refreshes the page to regenerate a new quote
          className="mt-6 bg-blue-600 text-white font-semibold text-lg px-6 py-3 rounded-xl border-2 border-white shadow-md transition duration-300 hover:bg-blue-700 hover:scale-105"
        >
          Regenerate
        </button>
      </div>
    </main>
  );
}
