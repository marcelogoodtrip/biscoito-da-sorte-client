import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import biscoitoImg from '../../images/biscoito.png';
import { Quotes } from '../../components';
import { getQuote } from '../../services';
import jutsoSound from '../../sounds/Shanghai Awakes.mp3'

const audio = new Audio(jutsoSound);

export function App() {

    const isMounted = useRef(true);

    const [quoteState, setQuoteState] = useState({ 
        quote: 'loading quote...', 
        speaker: 'loading speaker... ' 
    });

    const onUpdate = async () => {
        const quote = await getQuote();

        if(isMounted.current) {

            audio.play();
    
            setQuoteState(quote);
        }
    };

    useEffect(() => {
        onUpdate();

        return () => {
            isMounted.current = false;
        };
    }, []);

    return (
        <Content>
            <Quotes
                //quote={quoteState.quote}
                //speaker={quoteState.speaker}  
                // =>
                {...quoteState} onUpdate={onUpdate}
            />
            <BiscoitoImg src={biscoitoImg} alt="Biscoito da sorte" />
        </Content>
    );
}

const Content = styled.div `
    height: 100vh;
    padding: 0 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BiscoitoImg = styled.img `
    max-width: 50vw;
    align-self: flex-end;
`;
