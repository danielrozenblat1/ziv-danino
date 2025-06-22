import React, { useState, useEffect, useCallback } from 'react';
import { Link as ScrollLink } from "react-scroll";
import styles from './NavBarNew.module.css';
import logo from "../../images/זיו דנינו לוגו.png"
import { FaTimes } from 'react-icons/fa';

const NavBarNew = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  // Enhanced scroll handling with direction detection
  const handleScroll = () => {
      // Show navbar only after scrolling 200px
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

  useEffect(() => {
    // Throttle scroll events for better performance
    let timeoutId = null;
    const throttledHandleScroll = () => {
      if (timeoutId === null) {
        timeoutId = setTimeout(() => {
          handleScroll();
          timeoutId = null;
        }, 10);
      }
    };
    
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [handleScroll]);

  // Enhanced menu toggle with better animation timing
  const toggleMenu = useCallback(() => {
    if (isMenuOpen) {
      setIsClosing(true);
      // Longer timeout for smoother closing animation
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
      }, 800);
    } else {
      setIsMenuOpen(true);
      setIsClosing(false);
    }
  }, [isMenuOpen]);

  // Scroll to form functionality
  const handleScrollToForm = useCallback(() => {
    const formElement = document.getElementById('טופס');
    if (formElement) {
      formElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  // Close menu when clicking outside (accessibility improvement)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(`.${styles.mobileMenu}`)) {
        toggleMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen, toggleMenu]);

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        toggleMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen, toggleMenu]);

  return (
    <>
      <nav 
        className={`
          ${styles.navbar} 
          ${isVisible ? styles.visible : styles.hidden}
        `}
        role="navigation"
        aria-label="ניווט ראשי"
      >
        <div className={styles.navbarInner}>
          <div className={styles.logo}>
            <img 
              src={logo} 
              alt="זיו דנינו - לוגו" 
              loading="lazy"
              onError={(e) => {
                e.target.style.display = 'none';
                console.warn('Logo image failed to load');
              }}
            />
          </div>
          
          <button 
            className={styles.menuButton} 
            onClick={handleScrollToForm}
            aria-label="עבור לטופס יצירת קשר"
            type="button"
          >
            <div className={styles.buttonContent}>
              <span className={styles.buttonText}>זיו, בואי נדבר!</span>
              <span className={styles.buttonTextHover}>תלחצי כאן</span>
            </div>
          </button>
        </div>
      </nav>

      {/* Enhanced Mobile Menu with better accessibility */}
      {(isMenuOpen || isClosing) && (
        <div 
          className={`${styles.mobileMenu} ${isClosing ? styles.closing : ''}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          <div className={styles.mobileMenuHeader}>
            <button
              className={styles.closeButton} 
              onClick={toggleMenu}
              aria-label="סגור תפריט"
              type="button"
            >
              <FaTimes />
            </button>
            <div className={styles.mobileMenuLogo}>
              <img 
                src={logo} 
                alt="זיו דנינו לוגו"
                id="mobile-menu-title"
                loading="lazy"
              />
            </div>
          </div>
          
          <div className={styles.mobileMenuContent}>
            <div className={styles.mobileLogo}>
              <img 
                src={logo} 
                alt="זיו דנינו - לוגו מרכזי" 
                loading="lazy"
              />
            </div>
            
            {/* Additional content can be added here */}
            <div style={{ 
              textAlign: 'center', 
              color: '#5a4f3f', 
              fontSize: '1.2rem',
              fontWeight: '300',
              marginTop: '20px',
              opacity: '0.8'
            }}>
              ברוכים הבאים לעולם של זיו דנינו
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBarNew;