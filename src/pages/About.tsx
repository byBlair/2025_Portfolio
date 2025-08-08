import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

const AboutWrap = styled.section`
    width: 100%;
    height: auto;
    position: relative;
`;

const AboutContainer = styled.div`
    width: 100%;
    height: auto;
    min-height: 100vh;
    position: relative;
`;

const About: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
<></>
    );
};

export default About;
