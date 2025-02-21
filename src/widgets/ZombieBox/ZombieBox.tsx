import React, { useState } from "react";
import Button from "../../components/Button/button";
import ZombieCards from "./ZombieCards/ZombieCard";

//Zombie Parent
export default function ZombieBox() {
  //zombies that already exists and base state
  const [existingZombies, setExistingZombies] = useState<string[]>([
    "Lars The Cool Zombie",
    "Johan The Drunk Zombie",
    "Kalle The Dumb Zombie",
  ]);

  //state to add zombies
  const [zombieInput, setZombieInput] = useState("");

  //add zombies function
  const addZombie = () => {
    if (zombieInput === "") {
      alert("You need to add Name");
    } else {
      //creates new version of existing zombies by taking the input value of the input
      setExistingZombies([...existingZombies, zombieInput]);
    }
  };
  return (
    <>
      <h1>Part 2: Zombie</h1>
      <div>
        {/* Takes value of input and the targets the brings the value of the input with setZombieInput */}
        <input
          type="text"
          id="zombie-name"
          value={zombieInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setZombieInput(e.target.value);
          }}
        />
        {/* Add Zombie Button */}
        <Button handleClick={addZombie} title="Add Zombie"></Button>

        {/*See the zombies  */}
        <div>
          {existingZombies.map((zombieName) => (
            <ZombieCards name={zombieName}></ZombieCards>
          ))}
        </div>
      </div>
    </>
  );
}
