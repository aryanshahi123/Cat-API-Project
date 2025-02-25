import Link from "next/link";

type Repository = {
  url: string;
};

export default async function Page() {
  const res = await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=100&api_key=live_omD639YACJq8AzD0HM11Wisyv2bqNyA4nrahZx2cMOC7HUB9FJhOiWbKq4bdOh8X"
  );
  const data: Repository[] = await res.json();

  return (
    <main className="flex flex-col justify-center items-center h-screen bg-gray-700 relative overflow-hidden">
      {/* Background Images */}
      <div className="fixed inset-0 flex flex-wrap justify-center items-start gap-4 p-4 blur-sm opacity-30">
        {data.map((item, index) => (
          <img
            key={index}
            className="h-[12vh] w-[12vw] object-cover rounded-md shadow-md p-0"
            src={item.url}
            alt={`Cat ${index}`}
          />
        ))}
      </div>

      <div className="flex flex-col justify-center items-center p-10 bg-white rounded-xl border-4 border-red-500 shadow-2xl relative z-10">
        <h1 className="text-4xl font-extrabold text-red-500 bg-blue-200 px-6 py-3 rounded-md border-2 border-red-400 shadow-md">
          RANDOM CAT IMAGES
        </h1>

        <Link
          href="/cat"
          className="mt-6 bg-cyan-600 text-white font-bold text-3xl px-8 py-4 rounded-xl border-2 border-white shadow-md transition duration-300 hover:bg-cyan-700 hover:scale-105"
        >
          Click Me
        </Link>
      </div>
    </main>
  );
}
