import Button from "../../../components/Button/button";
import "./_FootballerCard.scss";

//Footballer props
type FootballerProps = {
  index: number;
  footballerName: string;
  deleteFootballer: (index: number) => void;
  editFootballer: (name: string) => void;
};

function FootballerCard({
  index,
  footballerName,
  deleteFootballer,
  editFootballer,
}: Readonly<FootballerProps>) {
  return (
    <div className="FootballerItem">
      <h3>{footballerName}</h3>

      {/* Individual delete and change for buttons*/}
      <Button
        title={"Delete"}
        handleClick={() => {
          deleteFootballer(index);
        }}
      ></Button>

      <Button
        title="change"
        handleClick={() => {
          editFootballer(footballerName);
        }}
      ></Button>
    </div>
  );
}
export default FootballerCard;
