import React, { useEffect, useState } from 'react';
import AvatarGroup from './components/AvatarGroup/AvatarGroup';

function App() {
  const data = [
    { name: 'Alice Doe Goergo', image: '' },
    { name: 'Bob Marley', image: './ava.jpeg' },
    { name: 'Charlie Van', image: '' },
    { name: 'Dave', image: '' },
    { name: 'De Jong', image: './ava.jpeg' },
    { name: 'Frank Lamp', image: './ava.jpeg' },
  ];

  const [timer, setTimer] = useState(0);
  const [disabledStart, setDisabledStart] = useState(false);
  const intervalRef = React.useRef<null | NodeJS.Timeout>(null);

  const handleStart = () => {
    intervalRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handleStop = () => {
    setDisabledStart(true);
  };

  useEffect(() => {
    if (disabledStart) {
      clearInterval(intervalRef.current as NodeJS.Timeout);
    }
  }, [disabledStart]);

  return (
    <div className="App px-4">
      <div className="text-black text-3xl font-bold mb-6">
        Example Avatar Group Component
      </div>
      <div className="mb-4">
        <p className="font-bold text xs">Size XS</p>
        <AvatarGroup maxLength={3} size="xs" users={data} />
      </div>
      <div className="mb-4">
        <p className="font-bold text xs">Size SM</p>
        <AvatarGroup maxLength={4} size="sm" users={data} />
      </div>
      <div className="mb-4">
        <p className="font-bold text xs">Size MD</p>
        <AvatarGroup maxLength={5} size="md" users={data} />
      </div>
      <div className="mb-4">
        <p className="font-bold text xs">Size LG</p>
        <AvatarGroup maxLength={5} size="lg" users={data} />
      </div>

      <div>
        <button onClick={handleStart} disabled={disabledStart}>
          Start
        </button>
        <p>{timer}</p>
        <button onClick={handleStop}>Stop</button>
      </div>
    </div>
  );
}

export default App;
