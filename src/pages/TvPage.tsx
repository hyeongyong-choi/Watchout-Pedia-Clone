import React from 'react';
import AiringTodaySection from '../features/tv/airingToday';
import LatestTvSection from '../features/tv/latest';

const TvPage:React.FC = () => {
    return (
        <div>
           <LatestTvSection />
           <AiringTodaySection/>
        </div>
    );
};

export default TvPage;