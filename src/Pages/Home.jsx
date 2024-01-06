import React from "react";
import Hero from "../components/Hero";

import UiUxImg from "../assets/ui.png";
import webDesignImg from "../assets/graphic-design.png";
import webdevImg from "../assets/coding.png";
import contentWritingImg from "../assets/content.png";
import digitalMarketing from "../assets/digital-marketing.png";
import SeoImg from "../assets/seo.png";
import { whyChooseUs } from "../content";
import { ServiceCard } from "../components/ServiceCard";

const Home = () => {
  return (
    <div className='mx-auto px-10 bg-black'>
      <div className=' bg-black '>
        <Hero />
        <div>
          <h1 className='text-center text-primaryText  text-4xl font-bold'>
            Reasons to choose{" "}
            <span className='text-secondaryColor'>CODECHIP</span>
            <br />
            for your digital journey
          </h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-16'>
            {whyChooseUs.map((item) => {
              const { id, iconSrc, title, description, learnMore } = item;
              return (
                <div key={id}>
                  <ServiceCard
                    icon={iconSrc}
                    cardTitle={title}
                    cardDescription={description}
                    url={learnMore}
                  />
                </div>
              );
            })}
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>{}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
