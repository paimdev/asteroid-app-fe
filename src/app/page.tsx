"use client";

import AsteroidList from "@/components/asteroidList/AsteroidList";
import { DatePickerWithRange } from "@/components/datePickerWithRange/DatePickerWithRange";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { addDays, format } from "date-fns";
import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";

const Home = () => {
  const [asteroids, setAsteroids] = useState({});
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  async function fetchDataByDate(startDate: string, endDate: string) {
    setLoading(true);
    const response = await axios.get(
      `http://localhost:3000/asteroids/${startDate}/${endDate}`
    );
    setAsteroids(response.data);
    setLoading(false);
  }

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:3000/asteroids");
      setAsteroids(response.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <DatePickerWithRange date={date} setDate={setDate} />
        <Button
          onClick={() => {
            if (date) {
              let startDate = format(date.from as Date, "yyyy-MM-dd");
              let endDate = format(date.from as Date, "yyyy-MM-dd");

              fetchDataByDate(startDate, endDate);
            }
          }}
        >
          Search
        </Button>
      </div>
      <AsteroidList asteroidData={asteroids} />
    </div>
  );
};

export default Home;
