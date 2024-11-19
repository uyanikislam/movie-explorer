import Movies from '@/components/Movies';
import React from 'react';

const Page = async ({ searchParams }) => {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  if (!apiKey) {
    return <div>Error: API Key is missing</div>;
  }

  const genre = searchParams.genre ? `movie/${searchParams.genre}` : "trending/all/day";
  const url = `https://api.themoviedb.org/3/${genre}?api_key=${apiKey}&language=en-US&page=1`;

  try {
    const res = await fetch(url, { next: { revalidate: 1000 } });

    if (!res.ok) {
      console.error("Failed to fetch data", res.statusText);
      return <div>Error fetching data</div>;
    }

    const data = await res.json();

    if (!data || !data.results) {
      console.error("API response is not as expected", data);
      return <div>Error loading data</div>;
    }

    console.log(data, "data");

    return (
      <div className="flex items-center justify-center flex-wrap gap-3">
        {data.results.map((dt, i) => (
          <Movies key={i} dt={dt} />
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error occurred while fetching data</div>;
  }
};

export default Page;
