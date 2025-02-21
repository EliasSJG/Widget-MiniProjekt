import React, { useState } from "react";

export default function AnimalList() {
  const [animals, setAnimals] = useState<string[]>(["gorilla", "giraff","Lion"]);
  const [inputAnimal, setInput] = useState("");

  const deleteAnimal = (animal: string) => {
    setAnimals(animals.filter((a) => a !== animal));
  };
  const editAnimal = (animal: string) => {
    if (!inputAnimal) {
      alert("We miss your animal name!")
      return
    }
    setAnimals(animals.map((a) => (a === animal ? inputAnimal : a)));
    setInput("");
  };
  const addAnimal = () => {
    if (!inputAnimal) {
      alert("We miss your animal name!")
      return
    }
    setAnimals([...animals, inputAnimal]);
    setInput("");
  };
  const reset = () =>{
    setAnimals(["gorilla", "giraff","Lion"]);
  };

  return (
    <>
      <h1>AnimalList</h1>
      <input
        type="text"
        value={inputAnimal}
        placeholder="Write your animal..."
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={addAnimal}>Add Animal</button>
      <button onClick={reset}>Reset</button>
      <ul>
        {animals.map((animal) => (
          <li key={animal}>
            {animal}{" "}
            <button
              onClick={() => {
                deleteAnimal(animal);
              }}
            >
              Delete
            </button>
            <button onClick={() => editAnimal(animal)}>ChangeMe</button>
          </li>
        ))}
      </ul>
    </>
  );
}
