import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  AboutTitleStyled,
  AboutTitleBox,
  AboutTitleLight,
  AboutTitleDesc,
  AboutTitleDescLight,
  AboutTitleBoxDivider,
} from './AboutTitle.styles';

export const AboutTitle = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px',
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={textAnimation}
        transition={{ duration: 0.5 }}
        ref={ref}
      >
        <AboutTitleBox>
          <AboutTitleBoxDivider>
            <AboutTitleStyled>Be </AboutTitleStyled>
            <AboutTitleLight>fast</AboutTitleLight>
            <AboutTitleStyled>, </AboutTitleStyled>
            <AboutTitleLight>smart</AboutTitleLight>
            <AboutTitleStyled>, </AboutTitleStyled>
            <AboutTitleLight>BET</AboutTitleLight>
          </AboutTitleBoxDivider>
          <AboutTitleDesc>
            Welcome to BET Transport, your trusted partner in transportation
            solutions based in Montreal, Canada. Established in 2021, we take
            pride in providing reliable and efficient trucking services to meet
            the diverse needs of our valued clients. At BET Transport, we
            understand the significance of dependable transportation in todays
            fast-paced world. Whether you need to transport goods locally or
            across Canada, our dedicated team is committed to ensuring your
            cargo arrives safely and on time. Our fleet of modern and
            well-maintained trucks, combined with our team of experienced
            drivers, enables us to offer a wide range of transportation
            services. From general freight and perishable goods to oversized and
            specialized cargo, we have the expertise and resources to handle
            your unique requirements. What sets us apart is our unwavering
            commitment to customer satisfaction. We believe in building strong
            relationships with our clients based on trust, transparency, and
            open communication. When you choose BET Transport, you can expect
            personalized attention, tailored solutions, and a seamless
            experience from start to finish.
          </AboutTitleDesc>
        </AboutTitleBox>
      </motion.div>
    </>
  );
};
