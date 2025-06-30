import React, { useRef, useState } from 'react';
import styles from './FormScreen.module.css';

const FormScreen = () => {
  // State for validation errors
  const [errors, setErrors] = useState({
    fullName: '',
    phone: '',
    treatmentType: ''
  });

  // State for form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Refs for form fields
  const fullNameRef = useRef(null);
  const phoneRef = useRef(null);
  const treatmentTypeRef = useRef(null);

  // Server settings
  const serverUrl = "https://dynamic-server-dfc88e1f1c54.herokuapp.com/leads/newLead";
  const reciver = "Zivdanino1998@gmail.com"; // עודכן לזיו

  // Treatment options
  const treatmentOptions = [
    { value: '', label: 'בחר סוג טיפול' },
    { value: 'micropigmentation_eyebrows', label: 'מיקרופיגמנטציה לגבות' },
    { value: 'micropigmentation_lips', label: 'מיקרופיגמנטציה לשפתיים' },
    { value: 'microtouch', label: 'מיקרוטאצ׳' }
  ];

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const name = fullNameRef.current.value;
    const phone = phoneRef.current.value;
    const treatmentType = treatmentTypeRef.current.value;
    
    // Validate inputs
    let valid = true;
    const newErrors = { ...errors };

    // Validate full name
    if (!name.trim()) {
      newErrors.fullName = 'נא להזין שם מלא';
      valid = false;
    } else if (name.trim().length < 2) {
      newErrors.fullName = 'שם חייב להכיל לפחות 2 תווים';
      valid = false;
    } else {
      newErrors.fullName = '';
    }

    // Validate phone number (Israeli format)
    const phoneRegex = /^0(5\d|[23489])\d{7}$/;
    if (!phone.trim()) {
      newErrors.phone = 'נא להזין מספר טלפון';
      valid = false;
    } else if (!phoneRegex.test(phone.trim())) {
      newErrors.phone = 'נא להזין מספר טלפון תקין';
      valid = false;
    } else {
      newErrors.phone = '';
    }

    // Validate treatment type
    if (!treatmentType) {
      newErrors.treatmentType = 'נא לבחור סוג טיפול';
      valid = false;
    } else {
      newErrors.treatmentType = '';
    }

    setErrors(newErrors);
    
    if (!valid) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Server data object
    const serverData = {
      name: name,
      phone: phone,
      email: "", // Not required in this form but included in the API structure
      reason: treatmentOptions.find(option => option.value === treatmentType)?.label || treatmentType,
      reciver: reciver
    };

    try {
      // Send to server
      const serverResponse = await fetch(serverUrl, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(serverData)
      });

      if (serverResponse.ok) {
        setIsSubmitting(false);
        setSubmitted(true);
        
        // Reset form after successful submission
        setTimeout(() => {
          fullNameRef.current.value = "";
          phoneRef.current.value = "";
          treatmentTypeRef.current.value = "";
          setSubmitted(false);
          setErrors({
            fullName: '',
            phone: '',
            treatmentType: ''
          });
        }, 3000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      alert("התרחשה שגיאה, אנא נסו שוב מאוחר יותר");
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.formScreenContainer} id="טופס">
      <div className={styles.titleContainer}>
        <div className={styles.title}>השאירי פרטים לשיחת התאמה לגבי כל טיפול</div>
      </div>
      
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="fullName">שם מלא</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className={`${styles.input} ${errors.fullName ? styles.inputError : ''}`}
              placeholder="השם המלא שלך"
              disabled={isSubmitting || submitted}
              ref={fullNameRef}
            />
            {errors.fullName && <p className={styles.errorText}>{errors.fullName}</p>}
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="phone">מספר טלפון</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
              placeholder="050-0000000"
              disabled={isSubmitting || submitted}
              ref={phoneRef}
            />
            {errors.phone && <p className={styles.errorText}>{errors.phone}</p>}
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="treatmentType">סוג טיפול</label>
            <select
              id="treatmentType"
              name="treatmentType"
              className={`${styles.select} ${errors.treatmentType ? styles.inputError : ''}`}
              disabled={isSubmitting || submitted}
              ref={treatmentTypeRef}
            >
              {treatmentOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.treatmentType && <p className={styles.errorText}>{errors.treatmentType}</p>}
          </div>
          
          <button 
            type="submit" 
            className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''} ${submitted ? styles.submitted : ''}`}
            disabled={isSubmitting || submitted}
          >
            {isSubmitting ? 'שולח...' : submitted ? 'נשלח בהצלחה!' : 'זיו, בואי נדבר!'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormScreen;