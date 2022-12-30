import styled from 'styled-components'

const Container = styled.div`
    margin: auto;
    max-width: 500px;
    font-family: sans-serif;
`;

const PokemonWrapper = styled.div`
    display: inline-block;
    width: 23.4375%;
    vertical-align: top;
    margin: 0 .78125% 50px;
`;

const PokemonName = styled.h5`
    font-size: 115%;
    text-transform: capitalize;
    font-weight: bold;
    color: #313131;
    margin-bottom: 5px;
`;

const PokemonSprite = styled.img`
    width: 100%;
`;

const PokemonTypesWrapper = styled.div``;

const PokemonType = styled.span<{
    type: string
}>`
    color: ${({ type }) => {
        switch (type) {
        case "grass":
            return '#000';
        default:
            return '#fff';
        }
    }};
    background-color: ${({ type }) => {
        switch (type) {
        case "grass":
            return '#9bcc50';
        case "poison":
            return '#b97fc9';
        case "fire":
            return '#fd7d24'
        case "water":
            return '#4592c4';
        case "bug":
            return '#729f3f';
        case "electric":
            return '#eed535';
        case "fairy": 
            return '#fdb9e9';
        case "fighting":
            return '#d56723';
        case "psychic":
            return '#f366b9';
        case "rock":
            return '#a38c21';
        case "steel":
            return '#9eb7b8';
        case "ice":
            return '#51c4e7';
        case "dark":
            return '#707070';
        case "ghost":
            return '#7b62a3';
        default:
            return '#a4acaf';
        }
    }};
    background: ${({ type }) => {
        switch (type) {
        case "flying":
            return 'linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)';
        case "ground":
            return 'linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);'
        case "dragon":
            return 'linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);'
        default:
            return 'webkit-linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)';
        }
    }};
    border-radius: 3px;
    line-height: 18px;
    margin: 0 1.5625% 0 0;
    width: 38.4%;
    float: left;
    font-size: 11px;
    text-align: center;
    text-transform: capitalize;
`;

export default {
    Container,
    PokemonWrapper,
    PokemonName,
    PokemonSprite,
    PokemonTypesWrapper,
    PokemonType
};