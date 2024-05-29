import { useState } from "react";
import Cell from "./Cell";
import FormInput from "./FormInput";
import FormOutput from "./FormOutput";

export default function Row({ c1, c2, c3, c4, c5, vahed }) {
  const [input, setinput] = useState("");

  return (
    <div className="row">
      <Cell classs={"col-1-of-5"}>{c1}</Cell>
      <Cell classs={"col-2-of-5"}>{c2}</Cell>
      <Cell classs={"col-2-of-5"}>
        <FormInput oninput={setinput} />
      </Cell>
      <Cell classs={"col-2-of-5"}>
        <FormOutput input={input} vahed={vahed} />
      </Cell>
      <Cell classs={"col-2-of-5"}>{c5}</Cell>
    </div>
  );
}
