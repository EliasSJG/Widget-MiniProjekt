import "./exercise.scss";
import AnimalList from "./react-exercise/animalList";
import Counter from "./react-exercise/countertemp";
import InputDemo from "./react-exercise/inputDemo";
import NewCounter from "./react-exercise/newCounter";
import PersonCard from "./react-exercise/personCard";
function ExercisePart() {
  return (
    <div className="school-exercise">
      <Counter></Counter>
      <NewCounter></NewCounter>
      <InputDemo></InputDemo>
      <PersonCard></PersonCard>
      <AnimalList></AnimalList>
    </div>
  );
}

export default ExercisePart;
