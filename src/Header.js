import Cell from "./Cell";

export default function Header() {
  return (
    <div className="row">
      <Cell>شماره واحد</Cell>
      <Cell>شارژ مصوب</Cell>
      <Cell>جمع واریزی</Cell>
      <Cell>بدهی تا پایان این فصل</Cell>
      <Cell>بدهی تا پایان فصل قبل</Cell>
    </div>
  );
}
