import React from "react";
import styles from "./page.module.css";

const About = () => {
  return (
    <div className=' md:mx-[60px] mx-[10px]'>
      <div className={styles.imgContainer}>
        <img
          src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>About Us:</h1>
          <p className={styles.desc}>
          At [Blogger], we are a passionate team of writers, creators, and enthusiasts who love to explore and share our knowledge on a wide range of topics. Our goal is to create a platform that serves as a hub for insightful and engaging content, keeping our readers informed, entertained, and inspired.

            <br />
            <br />
          </p>
            
            <h1 className={styles.title}>What We Do:</h1>
Through our blog, we strive to provide valuable information, thought-provoking ideas, practical tips, and entertaining stories. We cover various subjects, including but not limited to:
        </div>
        <div className={styles.itemt}>
          <h1 className={styles.titlet}>What We Do?</h1>
          <p className={styles.desct}>
          Lifestyle: Our lifestyle section encompasses articles on health and wellness, personal development, travel, fashion, beauty, relationships, and more. We believe in embracing a well-rounded approach to life and aim to bring you content that enhances your overall well-being.
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
