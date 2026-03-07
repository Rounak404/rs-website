import React, { useState, useRef, useEffect, useCallback } from 'react';

const facultyList = [
  {
    name: "Prof.(Dr.) Dipak Kumar Sahoo",
    extraDesignation: "Vice Chancellor",
    designation: "President , Technical Society",
    email: "vc@vssut.ac.in",
    image: "/faculties/dipakkumar.jpg",
  },
  {
    name: "Prof Rakesh Roshan Dash",
    extraDesignation: "Dean of Students' Welfare",
    designation: "Technical Society",
    email: "rrdash_ce@vssut.ac.in",
    image: "/faculties/rakesh.jpg",
  },
  {
    name: "Dr. Trupti Ranjan Mohapatra",
    designation: "Vice president , Technical Society",
    email: "trmahapatra_pe@vssut.ac.in , truptiranjan01@gmail.com",
    image: "/faculties/trmahapatra.jpg",
  },
  {
    name: "Dr. (Mrs.) Santi Behera",
    designation: "Faculty Advisor",
    email: "db.santibehera@gmail.com",
    image: "/faculties/-mrs.santi-behera.jpg",
  },
  {
    name: "Dr. Lopamudra Ghadei",
    designation: "Faculty Advisor",
    email: "lopa.180@gmail.com",
    image: "/faculties/lopamudra-ghadai.jpg",
  },
];

const FacultyCarousel = () => {
  const scrollContainerRef = useRef(null);
  const animationFrameId = useRef(null); 
  const singleSetWidth = useRef(0); 

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const DRAG_SENSITIVITY = 1.5;
  const AUTO_SCROLL_SPEED = 0.5; 


  useEffect(() => {
  if (scrollContainerRef.current) {
    const cardElements = scrollContainerRef.current.querySelectorAll('.faculty-card');
    let width = 0;
    for (let i = 0; i < facultyList.length; i++) {
      const card = cardElements[i];
      const style = window.getComputedStyle(card);
      width += card.offsetWidth + parseFloat(style.marginRight);
    }
    singleSetWidth.current = width;
  }
}, []);


  const autoScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!isDragging && !isHovering && container && singleSetWidth.current > 0) {
      container.scrollLeft += AUTO_SCROLL_SPEED;
if (container.scrollLeft >= singleSetWidth.current) {
  container.scrollLeft -= singleSetWidth.current;
} else if (container.scrollLeft <= 0) {
  container.scrollLeft += singleSetWidth.current;
}
    }
    animationFrameId.current = requestAnimationFrame(autoScroll);
  }, [isDragging, isHovering]);


  useEffect(() => {
    if (singleSetWidth.current > 0) { 
        animationFrameId.current = requestAnimationFrame(autoScroll);
    }
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [autoScroll, singleSetWidth]); 

  const handleMouseDown = (e) => {
    if (!scrollContainerRef.current || e.button !== 0) return;
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftStart(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.classList.add('no-select');
    if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current); // Pause auto-scroll
  };

  const handleMouseMove = useCallback((e) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * DRAG_SENSITIVITY;
    scrollContainerRef.current.scrollLeft = scrollLeftStart - walk;
  }, [isDragging, startX, scrollLeftStart, DRAG_SENSITIVITY]);

  const stopDragging = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.classList.remove('no-select');
    }
  }, [isDragging ]);

  const handleTouchStart = (e) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftStart(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.classList.add('no-select');
    if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
  };

  const handleTouchMove = useCallback((e) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * DRAG_SENSITIVITY;
    if (Math.abs(scrollLeftStart - (scrollLeftStart - walk)) > 5) {
      e.preventDefault();
    }
    scrollContainerRef.current.scrollLeft = scrollLeftStart - walk;
  }, [isDragging, startX, scrollLeftStart, DRAG_SENSITIVITY]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    
    if (isDragging) { 
        stopDragging();
    }
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', stopDragging);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', stopDragging);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', stopDragging);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', stopDragging);
    };
  }, [isDragging, handleMouseMove, stopDragging, handleTouchMove]);

  return (
    <section className="faculty-section">
      <div className="container">
        <h2 className="section-title">Meet Our Faculty</h2>
        <div
          className="faculty-scroll-container"
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          style={{ overflowX: 'hidden' }} 
        >
          
          <div className="faculty-scroll" style={{ display: 'flex', minWidth: '100%' }}>
            {[...facultyList, ...facultyList, ...facultyList].map((faculty, index) => (
              <div key={index} className="faculty-card">
                <div className="faculty-image">
                  <img src={ faculty.image} alt={faculty.name} draggable="false" />
                </div>
                <div className="faculty-info">
                  <h3>{faculty.name}</h3>
                  {faculty.extraDesignation && <p className="extra-designation">{faculty.extraDesignation}</p>}
                  <p className="designation">{faculty.designation}</p>
                  <a href={`mailto:${faculty.email}`}>{faculty.email}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultyCarousel;