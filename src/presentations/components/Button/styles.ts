import styled, {css} from "styled-components/native";
import { TouchableOpacity } from "react-native";

type Props = {
    isDisabled: boolean
} 

export const Container = styled(TouchableOpacity)<Props>`
    ${({ theme, isDisabled}) => css`
        background-color: ${isDisabled ? theme.colors.background : theme.colors.primary};
        padding: 20px;
        border-radius: 10px;
        justify-content: center;
        align-items: center;
    `}
`

export const Label = styled.Text<Props>`
    ${({ theme, isDisabled}) => css`
        color: ${isDisabled ? theme.colors.text : theme.colors.backgroundLight};
    `}
`