import axios from "axios";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useState } from "react";

const AsteroidCard = ({ asteroid }: any) => {
  const [localFavorite, setLocalFavorite] = useState(false);

  async function addFavorite(id: string, name: string, url: string) {
    const response = await axios.post(`http://localhost:3000/favorites`, {
      id: id,
      name: name,
      url: url,
    });
    setLocalFavorite(true);
  }

  return (
    <Card>
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
          {asteroid.estimated_diameter.kilometers.estimated_diameter_min} -{" "}
          {asteroid.estimated_diameter.kilometers.estimated_diameter_max}
        </p>
      </CardContent>
      <CardFooter>
        <Button
          variant="secondary"
          disabled={localFavorite}
          onClick={() =>
            addFavorite(asteroid.id, asteroid.name, asteroid.nasa_jpl_url)
          }
        >
          Add to favorites
        </Button>
      </CardFooter>
    </Card>
  );
};
export default AsteroidCard;
