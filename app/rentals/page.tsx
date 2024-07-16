"use client";
import React, { useEffect, useState } from "react";
import { getRentalsFromStorage } from "../utils/book";
import RentedBookCard from "../components/RentedBookCard";

interface RentalsPageProps {
  title: string;
}

const RentalsPage: React.FC<RentalsPageProps> = ({ title }) => {
  const [rentals, setRentals] = useState<any[]>([]);

  useEffect(() => {
    const rentalsInStorage = getRentalsFromStorage();
    const parsedRentals = rentalsInStorage ? JSON.parse(rentalsInStorage) : [];
    setRentals(parsedRentals);
  }, []);

  return (
    <section className="flex flex-wrap gap-3 md:gap-8 items-center justify-center">
      {rentals.length > 0 ? (
        rentals.map((item, index) => (
          <RentedBookCard key={index} book={item}/>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </section>
  );
};

export default RentalsPage;
