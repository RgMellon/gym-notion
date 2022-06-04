import React from "react";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";

import * as S from "./styles";

type ButtonProps = {
    label: string,
    isLoading: boolean,
    isDisabled: boolean,
} & TouchableOpacityProps

export function Button({label, isLoading, isDisabled, ...rest}: ButtonProps) {
    return <S.Container testID="button" isDisabled={isDisabled} disabled={isDisabled} {...rest} >
        {isLoading ? <ActivityIndicator size="small" color="#ffffff"/> : <S.Label isDisabled={isDisabled}>{label}</S.Label>}
    </S.Container>
}