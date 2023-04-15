import React from 'react';
import AvatarGroup from './components/AvatarGroup/AvatarGroup';

function App() {
  const data = [
    { name: 'Shofwan Hanif' },
    { name: 'Ben Daviees' },
    {
      name: 'John Doe',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqXu_FLpL0Y46q1vnyPBX7JTZi4J8dx453IHRDMXQdi-l9qGP-LD1BxPigKQUV8sjszLk&usqp=CAU',
    },
    {
      name: 'Cris Brown',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4hAiqRtFsxGqyNLbR8fU7hlGOy7-nvr2ieelwM7X5IDo-nm9iTKm5f5FNgF8GQg6dI3s&usqp=CAU',
    },
  ];
  return (
    <div className="App">
      <div className="text-black text-3xl font-bold mb-4">
        Example Avatar Group Component
      </div>
      <AvatarGroup maxLength={3} size="md" users={data} />
    </div>
  );
}

export default App;
