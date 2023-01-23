import styled from 'styled-components/native';

    export const Container = styled.View`
    width: 150px;
    border-width: 1px;
    border-color: ${props => props.theme.colors.red_700};
    background-color: ${props => props.theme.colors.background};
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    border-radius: 8px;
    margin-right: 12px;
    margin-bottom: 24px;
    `;

    export const Price = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    align-self: flex-end;
    margin-bottom: 4px;
    `;

    export const Coins = styled.Text`
    color: ${prop => prop.theme.colors.yellow_300};
    font-family: ${props => props.theme.fonts.bold};
    font-size: 18px;
    margin-bottom: -8px;
    margin-left: 4px;
    `;

    export const Life = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin: 12px 0;
    `;

    export const Lives = styled.Text`
    color: ${prop => prop.theme.colors.yellow_300};
    font-family: ${props => props.theme.fonts.bold};
    color: ${props => props.theme.colors.red_700};
    font-size: 18px;
    margin-left: 4px;
    `;