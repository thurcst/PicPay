import styled from 'styled-components/native'

export const Wrapper = styled.SafeAreaView`
    background: #2c2c2c;
    flex: 1;
`;

export const Header = styled.View`
    height: 55px;
    padding: 1px 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
    background: rgba(64,64,64, 0.6);
`;

export const Container = styled.ScrollView`

`;

export const BalanceContainer = styled.View`

`;

export const BalanceTitle = styled.Text`
    color: rgba(255,255,255,0.9);
    font-size: 14px;
    text-align: center;
`;

export const Balance = styled.Text`
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
`;