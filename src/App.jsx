import { useState } from 'react'
import Button from './Components/Button'
import Display from './Components/Display'


function App() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 })
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);


  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;

    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;

    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH })
  };

  const stop = () => {
    clearInterval(interv)
    setStatus(2);
  }
  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 })
  }
  const resume = () => start();

  return (
    <div>

      <div className='bg-custom-dark-bg text-gray-200 min-h-screen flex items-center justify-center'>
        <div className='text-7xl'>
          <div className='max-w-md p-6 text-center'>
          
            <Display time={time} />
            <div>

            <Button status={status} resume={resume} reset={reset} stop={stop} start={start} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
