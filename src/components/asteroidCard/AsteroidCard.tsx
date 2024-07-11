const AsteroidCard = (asteroid: any) => {
  return (
    <>
      <li>
        <h3>{asteroid.name}</h3>
        <p>ID: {asteroid.id}</p>
        <p>Absolute Magnitude: {asteroid.absolute_magnitude_h}</p>
        <p>
          Is Potentially Hazardous:{" "}
          {asteroid.is_potentially_hazardous_asteroid ? "Yes" : "No"}
        </p>
        <p>
          Close Approach Date:{" "}
          {asteroid.close_approach_data[0].close_approach_date_full}
        </p>
        <p>
          Estimated Diameter (min/max km):{" "}
          {asteroid.estimated_diameter.kilometers.estimated_diameter_min} -{" "}
          {asteroid.estimated_diameter.kilometers.estimated_diameter_max}
        </p>
        <p>
          <a
            href={asteroid.nasa_jpl_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            NASA JPL Link
          </a>
        </p>
      </li>
    </>
  );
};
export default AsteroidCard;
