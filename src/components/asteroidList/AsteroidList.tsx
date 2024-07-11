import AsteroidCard from "../asteroidCard/AsteroidCard";

const AsteroidList = ({ asteroidData }: any) => {
  const sortAsteroidsByName = (asteroids: any[]) => {
    return asteroids.slice().sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  };

  return (
    <div>
      {Object.keys(asteroidData).map((date) => (
        <div key={date}>
          <h2>{date}</h2>
          <ul>
            {sortAsteroidsByName(asteroidData[date]).map((asteroid: any) => (
              <AsteroidCard asteroid={asteroid} key={asteroid.id} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AsteroidList;
