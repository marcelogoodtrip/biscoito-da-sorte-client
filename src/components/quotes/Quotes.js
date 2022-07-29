import styled from "styled-components";
import { string, func } from 'prop-types';
import { Button } from '../../components';

export const Quotes = ({ quote, speaker, onUpdate }) => {
    return (
        <Wrapper>
            <Quote>{quote}</Quote>
            <Speaker>{speaker}</Speaker>
            <Button onClick={onUpdate}>Quebrar Biscoito!</Button>
        </Wrapper>
    );
};

Quotes.propTypes = {
    quotes: string,
    speaker: string,
    onUpdate: func
};

const Wrapper = styled.div `
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const Quote = styled.p `
    color: #fff;
    font-size: 3em;
    margin: 0;
    background: rgba(164, 0, 0, 0.5);
`;

const Speaker = styled(Quote) `
    text-align: right;
    margin-bottom: 50px;
`;