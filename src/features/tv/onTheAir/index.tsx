import React from 'react';
import styled from '@emotion/styled';
import useOnTheAirApi from './useOnTheAir';
import Card from '../../../components/Card';
import Slider from '../../../components/Slider';

const Base = styled.div`
    margin-bottom:62px;
`

const Title = styled.h4`
    font-size:22px;
    font-weight:700;
    line-height:30px;
    padding:12px 0 14px;
`


const OnTheAirSection = () => {
    const {data, isLoading} = useOnTheAirApi();

    const getYear = (date: string) => date?.split('-')[0]

    return (
        <Base>
        <Title>onTheAir</Title>
        {
            isLoading || !data ? (
                <div>Loading...</div>
            ) : (
                <Slider>
               {data.data.results.map(tv => (
                <Card
                linkUrl={`/tv/${tv.id}`}
                title={tv.name}
                posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${tv.poster_path}`}
                voteAverage={tv.vote_average}
                year={getYear(tv.first_air_date)}
            />
               ))}
               </Slider>
            )
        }
        </Base>
    );
};

export default OnTheAirSection;