import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from 'scrollreveal';
import styles from './Carousel.module.css';
import result1 from "../../images/זיו דנינו המלצות 1.png";
import result2 from "../../images/זיו דנינו המלצות 2.png";
import result3 from "../../images/זיו דנינו המלצות 3.png";
import result4 from "../../images/זיו דנינו המלצות 4.png";
import result5 from "../../images/זיו דנינו המלצות 5.png";
import result6 from "../../images/זיו דנינו המלצות 6.png";
import result7 from "../../images/זיו דנינו המלצות 7.png";
import result8 from "../../images/זיו דנינו המלצות 8.png";
import result9 from "../../images/זיו דנינו המלצות 9.png";
import result10 from "../../images/זיו דנינו המלצות 10.png";
import result11 from "../../images/זיו דנינו המלצות 11.png";
import result12 from "../../images/זיו דנינו המלצות 12.png";


const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const intervalRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  // תמונות ההמלצות של זיו דנינו
  const testimonials = [
    {
      id: 1,
      image: result1,
      alt: "המלצה 1 מלקוחה מרוצה של זיו דנינו"
    },
    {
      id: 2,
      image: result2,
      alt: "המלצה 2 מלקוחה מרוצה של זיו דנינו"
    },
    {
      id: 3,
      image: result3,
      alt: "המלצה 3 מלקוחה מרוצה של זיו דנינו"
    },
    {
      id: 4,
      image: result4,
      alt: "המלצה 4 מלקוחה מרוצה של זיו דנינו"
    },
    {
      id: 5,
      image: result5,
      alt: "המלצה 5 מלקוחה מרוצה של זיו דנינו"
    },
    {
      id: 6,
      image: result6,
      alt: "המלצה 6 מלקוחה מרוצה של זיו דנינו"
    },
    {
      id: 7,
      image: result7,
      alt: "המלצה 7 מלקוחה מרוצה של זיו דנינו"
    },
    {
      id: 8,
      image: result8,
      alt: "המלצה 8 מלקוחה מרוצה של זיו דנינו"
    },
    {
      id: 9,
      image: result9,
      alt: "המלצה 9 מלקוחה מרוצה של זיו דנינו"
    },
    {
      id: 10,
      image: result10,
      alt: "המלצה 10 מלקוחה מרוצה של זיו דנינו"
    },
    {
      id: 11,
      image: result11,
      alt: "המלצה 11 מלקוחה מרוצה של זיו דנינו"
    },
    {
      id: 12,
      image: result12,
      alt: "המלצה 12 מלקוחה מרוצה של זיו דנינו"
    }
  ];

  // פונקציה להעביר לתמונה הבאה
  const nextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  // פונקציה להעביר לתמונה הקודמת
  const prevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  // פונקציה לעבור לתמונה ספציפית
  const goToSlide = (index) => {
    if (index !== currentIndex && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsTransitioning(false);
      }, 300);
    }
  };

  // טיפול בהחלקה - תחילת מגע
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  // טיפול בהחלקה - תנועת מגע
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  // טיפול בהחלקה - סיום מגע
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // טיפול במקלדת
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      nextSlide();
    } else if (e.key === 'ArrowRight') {
      prevSlide();
    }
  };

  // ScrollReveal עבור הכותרת והתיאור
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '50px',
      duration: 800,
      delay: 200,
      easing: 'ease-out',
      reset: false
    });

    if (titleRef.current) {
      sr.reveal(titleRef.current);
    }

    if (descriptionRef.current) {
      sr.reveal(descriptionRef.current, { delay: 400 });
    }

    // ניקוי ScrollReveal
    return () => {
      if (titleRef.current) {
        sr.clean(titleRef.current);
      }
      if (descriptionRef.current) {
        sr.clean(descriptionRef.current);
      }
    };
  }, []);

  // ניקוי interval בעת unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // הוספת מאזין למקלדת
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={styles.carouselContainer}>
              
      <h1 ref={titleRef} className={styles.title}>
     ואלו ההודעות שאני מקבלת מהן
      </h1>
      
      <p ref={descriptionRef} className={styles.description}>
        לחצי על החצים כדי להעביר בין התמונות
      </p>
      
      <div 
        className={styles.carouselWrapper}
      >
        
        {/* כפתור אחורה */}
        <button 
          className={`${styles.navButton} ${styles.navButtonPrev}`}
          onClick={nextSlide}
          disabled={isTransitioning}
          aria-label="התמונה הקודמת"
        >
          <ChevronRight size={24} />
        </button>

        {/* התמונה הנוכחית */}
        <div 
          className={styles.imageContainer}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className={`${styles.imageWrapper} ${!isTransitioning ? styles.visible : ''}`}>
            <img 
              src={testimonials[currentIndex].image} 
              alt={testimonials[currentIndex].alt}
              className={styles.testimonialImage}
              draggable={false}
            />
          </div>
        </div>

        {/* כפתור קדימה */}
        <button 
          className={`${styles.navButton} ${styles.navButtonNext}`}
          onClick={prevSlide}
          disabled={isTransitioning}
          aria-label="התמונה הבאה"
        >
          <ChevronLeft size={24} />
        </button>

        {/* אינדיקטורים */}
        <div className={styles.indicators}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              aria-label={`עבור להמלצה ${index + 1}`}
            />
          ))}
        </div>
      </div>
  

    </div>
  );
};

export default TestimonialsCarousel;