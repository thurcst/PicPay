import { exp } from 'react-native/Libraries/Animated/src/Easing'
import styled from 'styled-components/native'

export const Container = styled.ScrollView.attrs(()=>({
    horizontal: true,
    contentContainerStyle: {        
        alignItems: 'center',
        paddingLeft: 16,
    },
}))`
    background: rgba(96,96,96,0.6);
    height: 130px;
`;

export const Option = styled.TouchableOpacity`
    width: 80px;
    margin-right: 10px;
    align-items: center;
`;
export const Img = styled.Image``;

export const Label = styled.Text`
    color: #fff;
    font-weight: 600;
    margin-top: 8px;
    font-size: 14px;
    text-align: center;
`;