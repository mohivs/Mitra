import { data } from "./App";

export default function FormOutput({ oninput, input, num, output, vahed }) {
  // const outPut = data[num].lastSeason + data[num].payment - input;
  const outPut = vahed?.lastSeason + vahed?.payment - input;
  return (
    <form>
      {/* <input type="text" disabled value={outPut} /> */}
      <input type="text" value={outPut} disabled />
    </form>
  );
}
