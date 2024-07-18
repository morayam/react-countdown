import React, { useEffect, useRef, useState } from "react";

class Footer extends React.Component {
  render() {
    return <footer>2023 © Temporizador para el semestre par.</footer> 
  }
}

function App() {
  const [timerDays, setTimerDays] = useState('...');
  const [timerHours, setTimerHours] = useState('...');
  const [timerMinutes, setTimerMinutes] = useState('...');
  const [timerSeconds, setTimerSeconds] = useState('...');

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('November 24, 2024 00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime(); // Present time

      // The difference of time between holidays and now
      const difference = countdownDate - now;

      // Catching every time difference
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      if (difference < 0) {
        // stop timer
        clearInterval(interval.current);
      } else {
        //update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }

    }, 1000); // Every second the timer changes
  };

  useEffect(() => {
    startTimer();
    return () => {
    };
      clearInterval(interval.current);
  });

  return (
<section className="timer-container">
  <section className="timer">
      <div>
          <span className="mdi mdi-calendar-clock timer-icon"></span>
          <h2>Cuenta regresiva para las vacaciones</h2>
          <p>¡Ánimo!</p>
      </div>
      <div>
        <section>
          <p>{timerDays}</p>
          <p><small>Dias</small></p>
        </section>
          <span>:</span>
          <section>
          <p>{timerHours}</p>
          <p><small>Horas</small></p>
        </section>
          <span>:</span>
          <section>
          <p>{timerMinutes}</p>
          <p><small>Minutos</small></p>
        </section>
          <span>:</span>
          <section>
          <p>{timerSeconds}</p>
          <p><small>Segundos</small></p>
        </section>
      </div>
  </section>
      <Footer/>
</section>
)
}

export default App