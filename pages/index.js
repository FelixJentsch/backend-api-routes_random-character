import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function HomePage() {
  const { data, error } = useSWR("/api/random-character", fetcher);

  if (error) return <div>Error loading data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Hello from Next.js!</h1>
      <h2>Random Character</h2>
      <div>
        <h3>
          {data.firstName} {data.lastName}
        </h3>
        <p>Age: {data.age}</p>
        <p>Twitter: {data.twitter}</p>
        <p>Geohash: {data.geohash}</p>
      </div>
    </div>
  );

  /*  return (
    <div>
      <h1>Hello from Next.js!</h1>
      <h2>Random Character:</h2>                                              // Ugly! 
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  ); */
}
