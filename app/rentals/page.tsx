"use client";
import React, { useEffect, useState } from "react";
import { getRentalsFromStorage } from "../utils/book";

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
    <>
      {rentals.length > 0 ? (
        rentals.map((item, index) => (
          <div key={index}>{item.book}</div>
        ))
      ) : (
        <div>No hay libros apartados</div>
      )}
    </>
  );
};

export default RentalsPage;
