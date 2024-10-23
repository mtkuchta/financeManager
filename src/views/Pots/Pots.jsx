import { useContext } from "react";
import { UserDataContext } from "../../assets/contexts/UserDataContext";

export function Pots() {
  const { pots, setPots } = useContext(UserDataContext);
  console.log(pots);
  return <div>Pots</div>;
}
