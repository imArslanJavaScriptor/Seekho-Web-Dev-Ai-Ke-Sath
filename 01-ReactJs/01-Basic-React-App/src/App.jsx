import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('React Learner')
  const [isHappy, setIsHappy] = useState(true)

  return (
    <div style={{ padding: '20px' }}>
      <h1>Naam: {name}</h1>
      <h2>Mood: {isHappy ? '😊 Khush' : '😢 Udaas'}</h2>
      <h2>Score: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Score badhao</button>
      <button onClick={() => setIsHappy(prev => !prev)}>Mood toggle karo</button>
      <button onClick={() => setName('React Master!')}>Naam badlo</button>
      <button onClick={() => setCount(0)}>Reset Score</button>
    </div>
  )
}

export default App