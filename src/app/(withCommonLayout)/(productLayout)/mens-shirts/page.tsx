"use client";

const MensShirtsPage = ({ searchParams }: { searchParams: any }) => {
  console.log(searchParams);

  // Convert the searchParams object to an array of [key, value] pairs
  const queryParamsArray = Object.entries(searchParams);

  return (
    <div>
      <h1>All Shirts here</h1>
      <ul>
        {/* Map through the queryParamsArray and render each key-value pair */}
        {queryParamsArray.map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MensShirtsPage;
