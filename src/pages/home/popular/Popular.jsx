import React, { useEffect, useState } from 'react'
import ContentWrapper from '../../../components/contentwrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchtabs/SwitchTabs'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTrendingTopics } from '../../../store/thunks/fetchTrendingTypes';
import Carousel from '../../../components/carousel/Carousel';

function Popular() {
  const [tabs, setTabs] = useState("movie");
  const onTabsChange = (type) => {
    setTabs(type);
  }
  console.log(tabs)
  return (
    <div className="carouselSection">
        <ContentWrapper>
            <span className="carouselTitle">Whats popular</span>
            <SwitchTabs data={["movie", "tv"]} onTabsChange={onTabsChange}/>
        </ContentWrapper>
        <Carousel type="popular" tabs={tabs}/>
    </div>
  )
}

export default Popular