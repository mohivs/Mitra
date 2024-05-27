import { data } from "./App";
export default function FormInput({ oninput, input }) {
  function handleinput(e) {
    oninput((cur) => +e.target.value);
  }

  return (
    <form>
      <input type="text" onChange={handleinput} value={input} />
    </form>
  );
}
