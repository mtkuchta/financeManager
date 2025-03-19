import { useState, useContext } from "react";
import { UserDataContext } from "../../assets/contexts/UserDataContext";
import { ContentHeader } from "../../components/ContentHeader/ContentHeader";
import { Button } from "../../components/Button/Button";
import { Pot } from "../../components/Pot/Pot";
import { Modal } from "../../components/Modal/Modal";
import { NewPotForm } from "../../components/NewPotForm/NewPotForm";

export function Pots() {
  const { pots, setPots } = useContext(UserDataContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <ContentHeader>
        <Button text={"+ Add New Pot"} onClick={() => setIsModalOpen(true)} />
      </ContentHeader>
      <div>
        {pots.map((pot) => (
          <Pot key={`pot_${pot.name}`} pot={pot} />
        ))}
      </div>
      <Modal
        title={"Add New Pot"}
        isOpen={isModalOpen}
        onClose={closeModal}
        text="Create a pot to set savings targets. These can help keep you on track as you save for special purchases."
      >
        <NewPotForm closeModal={closeModal} />
      </Modal>
    </div>
  );
}
