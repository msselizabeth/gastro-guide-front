"use client";
import { useState, useEffect, useRef, Suspense } from "react";
import styles from "./HeroSlide.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { slidesEnglish, slidesUkrainian } from "@/data/hero-slider";
import Loading from "@/app/[locale]/loading";

const LeftButtonIcon = () => {
  return (
    <svg viewBox="0 0 40 40" className={styles.prevBtnIcon}>
      <g clip-path="url(#clip0_1095_9279)">
        <path d="M20 40C31.0462 40 40 31.0462 40 20C40 8.95375 31.0462 0 20 0C8.95375 0 0 8.95375 0 20C0 31.0462 8.95375 40 20 40ZM20 3.75C28.975 3.75 36.25 11.025 36.25 20C36.25 28.975 28.975 36.25 20 36.25C11.025 36.25 3.75 28.975 3.75 20C3.75 11.025 11.025 3.75 20 3.75Z" />
        <path d="M26.1425 12.3927L22.6062 8.85645L11.4637 19.9989L22.6062 31.1414L26.1412 27.6064L18.5337 19.9989L26.1425 12.3927Z" />
      </g>
      <defs>
        <clipPath id="clip0_1095_9279">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
const RightButtonIcon = () => {
  return (
    <svg viewBox="0 0 40 40" className={styles.nextBtnIcon}>
      <g clip-path="url(#clip0_1095_9284)">
        <path
          d="M20 0C8.95375 0 0 8.95375 0 20C0 31.0462 8.95375 40 20 40C31.0462 40 40 31.0462 40 20C40 8.95375 31.0462 0 20 0ZM20 36.25C11.025 36.25 3.75 28.975 3.75 20C3.75 11.025 11.025 3.75 20 3.75C28.975 3.75 36.25 11.025 36.25 20C36.25 28.975 28.975 36.25 20 36.25Z"
          fill="#F5F28E"
        />
        <path
          d="M13.8575 27.6076L17.3938 31.1439L28.5363 20.0014L17.3938 8.85889L13.8588 12.3939L21.4663 20.0014L13.8575 27.6076Z"
          fill="#F5F28E"
        />
      </g>
      <defs>
        <clipPath id="clip0_1095_9284">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const Slider = ({exploreBtn, closeBtn, modalTitle}) => {
  const { locale } = useParams();
  const slides = locale === "en" ? slidesEnglish : slidesUkrainian;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDesktopModalOpen, setIsDesktopModalOpen] = useState(false);
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);

  const openModalDesktop = (index) => {
    setIsDesktopModalOpen(true);
    setSelectedSlideIndex(index);
  };
  const modalRef = useRef();

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     goToNextSlide();
  //   }, 10000);

  //   return () => clearInterval(interval);
  // }, []);

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsDesktopModalOpen(false);
  };

  const handleModalClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.mobileSlider}>
      <button onClick={goToPrevSlide} className={styles.prevBtn}>
        <LeftButtonIcon />
      </button>
      <div
        className={styles.slide}
        onClick={() => openModal()}
      >
        <Image
          src={slides[currentSlide].imageUrl}
          alt={slides[currentSlide].altText}
          width={1000}
          height={1000}
          className={styles.icon}
        />
        <p className={styles.caption}>{slides[currentSlide].caption}</p>
      </div>
      <button onClick={goToNextSlide} className={styles.nextBtn}>
        <RightButtonIcon />{" "}
        </button>
        {isModalOpen && (
        <div className={styles.modal} onClick={handleModalClick}>
      
          <div className={styles.modalContentBackground} ref={modalRef}>
            <div className={styles.modalContent}>
              <div className={styles.modalQuestionContainer}>
                <Image
                  src="/logo-sections.svg"
                  alt="gastro guide"
                  width={300}
                  height={300}
                  className={styles.logo}
                  priority={true}
                />
                <p className={styles.modalQuestion}>
                 {`${modalTitle} - ${slides[currentSlide].caption}?`}
                </p>
              </div>
              <h3 className={styles.modalContinentTitle}>
                {slides[currentSlide].caption}
              </h3>
              <ul className={styles.modalContinentItemsList}>
                {slides[currentSlide].items.map((item, index) => <li key={index}><p>{item}</p></li>)}
              </ul>
               
              <div className={styles.modalButtonsContainer}>
            <Suspense fallback={<Loading />}>  <div className={styles.buttonExploreContainer}>
                <Link href={slides[currentSlide].path} className={styles.buttonExplore} onClick={closeModal}>
                  {exploreBtn}
                </Link>
              </div></Suspense>
              <div className={styles.buttonCloseContainer}>
       
                <button className={styles.buttonClose} onClick={closeModal}>
                 {closeBtn}
                </button>
              </div>
          
           </div>
            </div>
          </div>
    
        </div>
      )}
      </div>
      <div className={styles.desktopSlider}>
        <ul className={styles.desktopSliderList}>{slides.map((item, index) => {
          return <li key={index} className={styles.desktopSliderItem} ><Image src={item.imageUrl}
            alt={item.altText}
            onClick={() => openModalDesktop(index)}
          width={1000}
            height={1000}
            
            className={styles.iconDesktop} />
            <p className={styles.desktopSliderCaption}>{item.caption}</p>
           
            {isDesktopModalOpen && (
        <div className={styles.modal} onClick={handleModalClick}>
      
          <div className={styles.modalContentBackground} ref={modalRef}>
            <div className={styles.modalContent}>
              <div className={styles.modalQuestionContainer}>
                <Image
                        src="/logo-sections.svg"
                        alt="gastro guide"
                        width={300}
                        height={300}
                        className={styles.logo}
                        priority={true}
                        
                />
                <p className={styles.modalQuestion}>
                 {`${modalTitle} - ${slides[selectedSlideIndex].caption}?`}
                </p>
              </div>
              <h3 className={styles.modalContinentTitle}>
                {slides[selectedSlideIndex].caption}
              </h3>
              <ul className={styles.modalContinentItemsList}>
                {slides[selectedSlideIndex].items.map((item, index) => <li key={index}><p>{item}</p></li>)}
              </ul>
               
              <div className={styles.modalButtonsContainer}>
            <Suspense fallback={<Loading />}>  <div className={styles.buttonExploreContainer}>
                <Link href={slides[selectedSlideIndex].path} className={styles.buttonExplore} onClick={closeModal}>
                  {exploreBtn}
                </Link>
              </div></Suspense>
              <div className={styles.buttonCloseContainer}>
       
                <button className={styles.buttonClose} onClick={closeModal}>
                 {closeBtn}
                </button>
              </div>
          
           </div>
            </div>
          </div>
    
        </div>
      )}
          </li>
          
        })}</ul>
        
      </div>
     
    </div>
  );
};

export default Slider;
