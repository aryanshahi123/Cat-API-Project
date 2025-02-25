import Link from "next/link";

type Repository = {
  url: string;
};

export default async function Page() {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const data: Repository[] = await res.json();

  return (
    <main className="flex justify-center items-center h-screen flex-col bg-blue-950">
      <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-lg animate-fadeIn">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">You obtained this...</h1>

        <img className="h-80 w-80 object-cover rounded-lg shadow-md" src={data[0]?.url} alt="Random Cat" />
      
        <Link 
          href="/cat" 
          className="mt-6 bg-cyan-600 text-white font-semibold text-2xl px-8 py-4 rounded-xl border-2 border-white shadow-md transition duration-300 hover:bg-cyan-700 hover:scale-105"
        >
          Regenerate
        </Link>
      </div>
    </main>
  );
}
