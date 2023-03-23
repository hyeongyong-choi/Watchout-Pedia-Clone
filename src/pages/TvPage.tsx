import React from 'react';
import PopularSection from '../features/movie/popular';
import AiringTodaySection from '../features/tv/airingToday';
import LatestTvSection from '../features/tv/latest';
import OnTheAirSection from '../features/tv/onTheAir';
import TopRateSection from '../features/tv/topRate';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from '@emotion/styled';

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

const Container = styled.div`
  margin-top: 62px;
  padding: 24px 0;
`;


const TvPage: React.FC = () => {
    return (
        <>
            <Header />
            <Main>
                <Container>
                    <LatestTvSection />
                    <AiringTodaySection />
                    <OnTheAirSection />
                    <PopularSection />
                    <TopRateSection />
                </Container>
            </Main>
            <Footer />
        </>
    );
};

export default TvPage;