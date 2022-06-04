import YoutubePlayer from "react-native-youtube-iframe";
import styled, { css } from "styled-components/native";

export const Container = styled.SafeAreaView`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    position: relative;
    flex: 1;
  `}
`;

export const VideoPlayer = styled(YoutubePlayer)`
  height: 350px;
  width: 100%;
`;

export const Content = styled.ScrollView`
  ${({ theme }) => css`
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    background-color: ${theme.colors.background};
    margin-top: 20px;
  `}
`;

export const ContentTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${theme.fonts.size.xLarge};
    color: ${theme.colors.text};
    margin-bottom: 10px;
  `}
`;
