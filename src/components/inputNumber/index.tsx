import { Minus, Plus } from "phosphor-react";
import * as S from "./styles";
import { useState } from "react";

export function InputNumber() {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    setValue(value - 1);
  };

  return (
    <S.ContainerInputNumber>
      <Plus size={20} onClick={handleIncrement} />
      <input type="number" min={0} max={10} defaultValue={0} value={value} />
      <Minus size={20} onClick={handleDecrement} />
    </S.ContainerInputNumber>
  );
}
