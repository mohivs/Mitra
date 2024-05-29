import { data } from "./App";

export default function FormOutput({ input, vahed }) {
  const outPut = vahed?.lastSeason + vahed?.payment - input;
  return (
    <form>
      <input
        className={`${outPut > 0 ? "neg" : "pos"}`}
        type="text"
        value={`${
          outPut > 0
            ? `باید ${outPut} پرداخت شود`
            : `شما ${Math.abs(outPut)} از ما طلب دارید`
        }`}
        disabled
      />
    </form>
  );
}
