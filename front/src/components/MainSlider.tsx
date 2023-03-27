import Image from 'next/image';
import { useState } from 'react';
import slide1 from '../../public/slide1.jpeg'
import slide2 from '../../public/slide2.jpeg'
import slide3 from '../../public/slide3.jpeg'

function MainSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    { image: slide1, text: 'Slide 1' },
    { image: slide2, text: 'Slide 2' },
    { image: slide3, text: 'Slide 3' }
  ];

  const nextSlide = () => {
    setActiveIndex(activeIndex === slides.length - 1 ? 0 : activeIndex + 1);
  };

  const prevSlide = () => {
    setActiveIndex(activeIndex === 0 ? slides.length - 1 : activeIndex - 1);
  };

  return (
    <div className="relative  w-full">
      <div className="overflow-hidden">
        <Image
          className="w-full h-[420px] transition-all duration-500 transform object-cover"
          src={slides[activeIndex].image}
          alt={slides[activeIndex].text}
          onClick={nextSlide}
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full text-center">
        {slides.map((slide, index) => (
          <button
            key={index}
            className={`inline-block w-3 h-3 m-2 rounded-full ${
              index === activeIndex ? 'bg-hunter-green' : 'bg-gray-300'
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
     
    </div>
  );
}
export default MainSlider;
