import "./App.scss";
import ExercisePart from "./pages/react-school/exercise";
import FootballerBox from "./widgets/FootballerBox/FootballerBox";
import ZombieBox from "./widgets/ZombieBox/ZombieBox";

function App() {
  return (
    <>
      <FootballerBox></FootballerBox>
      <ExercisePart></ExercisePart>
      <ZombieBox></ZombieBox>
    </>
  );
}

export default App;
