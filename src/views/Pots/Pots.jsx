import { useContext } from "react";
import { UserDataContext } from "../../assets/contexts/UserDataContext";
import { ContentHeader } from "../../components/ContentHeader/ContentHeader";
import { Button } from "../../components/Button/Button";
import { Pot } from "../../components/Pot/Pot";

export function Pots() {
  const { pots, setPots } = useContext(UserDataContext);
  console.log(pots);
  return (
    <div>
      <ContentHeader>
        <Button text={"+ Add New Pot"} onClick={() => console.log("dupa")} />
      </ContentHeader>
      <div>
        {pots.map((pot) => (
          <Pot key={`pot_${pot.name}`} pot={pot} />
        ))}
      </div>
    </div>
  );
}
