import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

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
              <Card key={asteroid.id}>
                <CardHeader
                  className="cursor-pointer"
                  onClick={() => {
                    location.href = asteroid.nasa_jpl_url;
                  }}
                >
                  <CardTitle>{asteroid.name}</CardTitle>
                </CardHeader>
                <CardContent>
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
                    {
                      asteroid.estimated_diameter.kilometers
                        .estimated_diameter_min
                    }{" "}
                    -{" "}
                    {
                      asteroid.estimated_diameter.kilometers
                        .estimated_diameter_max
                    }
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="secondary">Add to favorites</Button>
                </CardFooter>
              </Card>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AsteroidList;
