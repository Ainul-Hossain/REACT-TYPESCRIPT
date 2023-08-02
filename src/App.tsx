import React, { FC, createContext } from "react";
import "./App.css";
import { Person, HairColor } from "./components/Person";

interface AppContextInterface {
  name: string;
  age: number;
  email: string;
}

export const AppContext = createContext<AppContextInterface | null>(null);

const App: FC = () => {
  const contextValue: AppContextInterface = {
    name: "Ainul Hossain",
    age: 23,
    email: "ainulsakibs@gmail.com",
  };
  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <Person
          name="Ainul Hossain"
          age={23}
          email={"ainulsakibs@gmail.com"}
          hairColor={HairColor.Brown}
        />
      </div>
    </AppContext.Provider>
  );
};

export default App;
