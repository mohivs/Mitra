import Row from "./Row";
import FormInput from "./FormInput";
import { useState } from "react";
import FormOutput from "./FormOutput";
import Header from "./Header";

const payment = 750;

export const data = [
  { id: 1, payment: payment, lastSeason: 0 },
  { id: 2, payment: payment, lastSeason: 750 },
  { id: 3, payment: payment, lastSeason: 600 },
  { id: 4, payment: payment, lastSeason: 2000 },
  { id: 5, payment: payment, lastSeason: 100 },
  { id: 6, payment: payment, lastSeason: 600 },
  { id: 7, payment: payment, lastSeason: 0 },
  { id: 8, payment: payment, lastSeason: 9000 },
  { id: 9, payment: payment, lastSeason: -200 },
  { id: 10, payment: payment, lastSeason: 30 },
  { id: 11, payment: payment, lastSeason: 200 },
  { id: 12, payment: payment, lastSeason: 0 },
  { id: 13, payment: payment, lastSeason: 900 },
  { id: 14, payment: payment, lastSeason: 500 },
  { id: 15, payment: payment, lastSeason: 600 },
  { id: 16, payment: payment, lastSeason: 800 },
  { id: 17, payment: payment + 150, lastSeason: 60 },
  { id: 18, payment: payment, lastSeason: 100 },
  { id: 19, payment: payment, lastSeason: 150 },
];

export default function App() {
  return (
    <div className="app">
      <Header />
      {/* cells */}
      {data.map((vahed, i) => (
        <Row
          key={vahed.id}
          c1={vahed.id}
          c2={vahed.payment}
          c5={vahed.lastSeason}
          vahed={vahed}
        />
      ))}
    </div>
  );
}
