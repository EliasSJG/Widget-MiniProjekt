import React, { useState } from "react";
import Button from "../../components/Button/button";
import ZombieCards from "./ZombieCards/ZombieCard";

export default function ZombieBox() {
  const [existingZombies, setExistingZombies] = useState<string[]>([
    "Lars The Cool Zombie",
    "Johan The Drunk Zombie",
    "Kalle The Dumb Zombie",
  ]);
  const [zombieInput, setZombieInput] = useState("");

  const addZombie = () => {
    if (zombieInput === "") {
      alert("You need to add Name");
    } else {
      setExistingZombies([...existingZombies, zombieInput]);
    }
  };
  return (
    <>
      <h1>Part 2: Zombie</h1>
      <div>
        <input
          type="text"
          id="zombie-name"
          value={zombieInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setZombieInput(e.target.value);
          }}
        />

        <Button handleClick={addZombie} title="Add Zombie"></Button>

        <div>
          {existingZombies.map((zombieName) => (
            <ZombieCards name={zombieName}></ZombieCards>
          ))}
        </div>
      </div>
    </>
  );
}
