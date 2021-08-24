import './jumbotron.css';
import { useRef, useEffect } from 'react';

export default function Jumbotron() {
  const rainRef = useRef();
  const waterRef = useRef();
  const rocksRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let value = window.scrollY;
      rainRef.current.style.top = value * 0.75 + 'px';
      waterRef.current.style.top = value * 0.50 + 'px';
    });
  }, []);

  return (
    <section>
      <form action="">
        <input type="text" />
      </form>
      <img ref={rainRef} id="rain" src="./pictures/background.png" alt="rain" />
      <img ref={waterRef} id="water" src="./pictures/water.png" alt="water" />
      <img ref={rocksRef} id="rocks" src="./pictures/rocks.png" alt="rocks" />
    </section>
  );
}
