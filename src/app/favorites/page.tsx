"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";
import { useEffect, useState } from "react";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFavorites() {
      const response = await axios.get("http://localhost:3000/favorites");
      setFavorites(response.data);
      setLoading(false);
    }
    fetchFavorites();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul>
        {favorites.map((asteroid: any) => (
          <Card key={asteroid.id}>
            <CardHeader
              className="cursor-pointer"
              onClick={() => {
                location.href = asteroid.url;
              }}
            >
              <CardTitle>{asteroid.name}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
