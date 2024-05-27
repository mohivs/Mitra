import { useState } from "react";
import Cell from "./Cell";
import FormInput from "./FormInput";
import FormOutput from "./FormOutput";

export default function Row({ c1, c2, c3, c4, c5, vahed }) {
  const [input, setinput] = useState("");

  return (
    <div className="row">
      <Cell>{c1}</Cell>
      <Cell>{c2}</Cell>
      <Cell>
        <FormInput oninput={setinput} />
      </Cell>
      <Cell classs={input > 0 ? "pos" : "neg"}>
        <FormOutput input={input} vahed={vahed} />
      </Cell>
      <Cell>{c5}</Cell>
    </div>
  );
}
