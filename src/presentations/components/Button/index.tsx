import React from "react";
import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

type ButtonProps = {
    label: string,
    isDisabled: boolean,
} & TouchableOpacityProps

export function Button({label, isDisabled, ...rest}: ButtonProps) {
    return <S.Container testID="button" isDisabled={isDisabled} disabled={isDisabled} {...rest} >
        <S.Label isDisabled={isDisabled}>{label}</S.Label>
    </S.Container>
}