import styled, { css } from "styled-components/native";
import LottieView from "lottie-react-native";
export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color:  ${theme.colors.backgroundLight};
  `}
`;

export const IconWrapper = styled(LottieView)`
     transform: rotate(-22deg);
     width: 200px;
    height: 200px;
`;


export const Detail = styled.View`
   ${({ theme }) => css`
    width: 300px;
    height: 300px;
    justify-content: center;
    align-items: center;
    background-color: rgba(133, 36, 220, 0.3)
    border-radius: 100px;
    transform: rotate(45deg)
  `} 
`;


export const EmptyText = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.fonts.size.xLarge};
        color: ${theme.colors.text};
        margin-top: 60px;
  `}
`;

export const Content = styled.View`
    margin-top: 40px;
`;