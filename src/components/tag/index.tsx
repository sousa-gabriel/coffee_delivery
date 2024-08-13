import * as S from "./styles";

interface TagProps {
  label: string;
}

export function Tag({ label }: TagProps) {
  return (
    <S.TagContainer>
      <S.Label>{label}</S.Label>
    </S.TagContainer>
  );
}
