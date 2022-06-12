import React from "react";


import load from "./empty.json";

import * as S from "./styles";

type Props = {
    children?: React.ReactNode
}

export function Empty({children}: Props) {
  return (
    <S.Container>
        <S.Detail>
            <S.IconWrapper
                testID="load-animation"
                autoPlay
                source={load}
                loop
                resizeMode="contain"
            />
        </S.Detail>

      <S.EmptyText>Ops, meio vazio por aqui</S.EmptyText>

    {!!children && 
        <S.Content>
            {children}
        </S.Content>
    }
    </S.Container>
  );
}