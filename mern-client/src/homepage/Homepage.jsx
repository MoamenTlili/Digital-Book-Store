import React from 'react';
import Banner from '../components/Banner';
import BestSellerBOOKS from './BestSellerBOOKS';
import Awardwinning from './Awardwinning';
import AwardPromoBanner from './AwardPromoBanner';
import OtherBooks from './OtherBooks';
import Reviews from './Reviews';

const Homepage = () => {
  return (
    <div>
        <Banner />
        <BestSellerBOOKS />
        <Awardwinning />
        <AwardPromoBanner />
        <OtherBooks/>
        <Reviews />

    </div>
  )
}

export default Homepage