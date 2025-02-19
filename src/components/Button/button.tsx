import "./_button.scss";
type ButtonProps = {
  title: string;
  handleClick: () => void;
};
export default function Button({ title, handleClick }: Readonly<ButtonProps>) {
  return (
    <button onClick={handleClick} className="app-button">
      {" "}
      {title}
    </button>
  );
}
