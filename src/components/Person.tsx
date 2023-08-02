import { ChangeEvent, FC, useState } from "react";

export enum HairColor {
  Blonde = "Your hair color is blonde, good for you",
  Brown = "Cool hair color",
  Pink = "Wow that is so cool",
}

interface Props {
  name: string;
  age: number;
  email: string;
  hairColor: HairColor;
}

export const Person: FC<Props> = ({ name, age, email, hairColor }: Props) => {
  const [country, setCountry] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };

  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{email}</h1>
      <input
        type="text"
        placeholder="Write down your country name..."
        onChange={handleChange}
      />
      <br />
      {country}
      {hairColor}
    </div>
  );
};
