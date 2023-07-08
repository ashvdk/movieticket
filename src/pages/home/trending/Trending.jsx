import React, { useEffect, useState } from 'react'
import ContentWrapper from '../../../components/contentwrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchtabs/SwitchTabs'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTrendingTopics } from '../../../store/thunks/fetchTrendingTypes';
import Carousel from '../../../components/carousel/Carousel';

function Trending() {
  const [tabs, setTabs] = useState("day");
  const onTabsChange = (type) => {
    setTabs(type);
  }
  console.log(tabs)
  return (
    <div className="carouselSection">
        <ContentWrapper>
            <span className="carouselTitle">Trending</span>
            <SwitchTabs data={["day", "week"]} onTabsChange={onTabsChange}/>
        </ContentWrapper>
        <Carousel type="trending" tabs={tabs}/>
    </div>
  )
}

export default Trending