import Cell from "./Cell";

export default function Header() {
  return (
    <div className="row">
      <Cell classs={"col-1-of-5"}>شماره واحد</Cell>
      <Cell classs={"col-2-of-5"}>شارژ مصوب</Cell>
      <Cell classs={"col-2-of-5"}>جمع واریزی</Cell>
      <Cell classs={"col-2-of-5"}>بدهی تا پایان این فصل</Cell>
      <Cell classs={"col-2-of-5"}>بدهی تا پایان فصل قبل</Cell>
    </div>
  );
}
