import { BsFillCreditCardFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import checkIconMobile from '../../assets/mobile/checkpoint.svg';
import { useSpring, animated } from 'react-spring';
import React from 'react';

const Content = () => {
  const customer = useSpring({ customers: 10245, from: { customers: 0 } });
  const card = useSpring({ cards: 10245, from: { cards: 0 } });
  console.log('content re-render');
  return (
    <section className="md:flex md:flex-row">
      <div className="ml-[70px] mr-[54px] text-bold flex flex-col items-center bg-gradient-to-b shadow-md from-white/40 to-transparent rounded-[24px] md:w-[20%]">
        <div className="mt-16 flex gap-8 items-start">
          <FaUser size="22px" className="mt-[12px]" />
          <div className="text-26">
            <animated.div>{customer.customers.to((val) => Math.floor(val))}</animated.div>
            <p className="text-13 font-semibold mb-[36px] md:text-16">Customers</p>
          </div>
        </div>
        <div className="gap-8 flex items-start mb-16">
          <BsFillCreditCardFill size="22px" className="mt-[12px]" />
          <div className="text-26">
            <animated.div>{card.cards.to((val) => Math.floor(val))}</animated.div>
            <p className="text-13 font-semibold md:text-16">Card Issued</p>
          </div>
        </div>
      </div>

      <div className="text-13 flex flex-col w-[100%] mt-[90px] font-semibold md:w-[30%] md:mt-0 md:ml-[20%] md:text-16">
        <div className="check-content">
          <img src={checkIconMobile} alt="check-icon" />
          <p> Card reports sent to your phone every weeks </p>
        </div>
        <div className="check-content">
          <img src={checkIconMobile} alt="check-icon" />
          <p> No external fees </p>
        </div>
        <div className="check-content">
          <img src={checkIconMobile} alt="check-icon" />
          <p> Set spending limits and restrictions </p>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Content);
