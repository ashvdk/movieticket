import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentwrapper/ContentWrapper';
import Carousel from '../../../components/carousel/Carousel';
import SwitchTabs from '../../../components/switchtabs/SwitchTabs';

function MovieCarousel({optiontabs, type, title}) {
    const [tabs, setTabs] = useState(optiontabs[0]);
    const onTabsChange = (type) => {
        setTabs(type);
    }
    console.log(tabs)
    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">{title}</span>
                {optiontabs.length > 1 && <SwitchTabs data={optiontabs} onTabsChange={onTabsChange}/>}
            </ContentWrapper>
            <Carousel type={type} tabs={tabs}/>
        </div>
    )
}

export default MovieCarousel