import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Header } from '../components/Header/Header';
import { Background } from '../components/Header/Background';
import { SignUp } from '../components/Login/SignUp';

export const SignUpPage = props => {
    const { isDesktop, backgroundColor } = useSelector(state => state.globalReducer);

    return (
        <Contianer background={backgroundColor}>
            <Header />
            <Main>
                {isDesktop && <Background />}
                <SignUp />
            </Main>
        </Contianer>
    );
};

const Contianer = styled.div`
    height: 100vh;
    background: #003a68;
`;

const Main = styled.main`
    position: absolute;
    height: 100%;
`;
