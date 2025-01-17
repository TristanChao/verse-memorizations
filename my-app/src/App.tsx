import { useState } from 'react';
import './App.css'
import { verses } from './data/verses'

function App() {
  const [ verse, setVerse ] = useState('');
  const [ text, setText ] = useState('');
  const [ showHint, setShowHint ] = useState(false);
  const [ showHintButton, setShowHintButton ] = useState(false);
  const [ correct, setCorrect] = useState('');
  
  function verifyVerse(e: React.FormEvent) {
    e.preventDefault();

    const verseText = verses.get(verse);
    if (verseText === text) {
      setShowHintButton(false);
      setShowHint(false);
      alert('Correct!');
      setVerse('');
      setText('');
    } else if (verseText) {
      alert('Incorrect!');
      setCorrect(verseText);
      setShowHintButton(true);
    } else {
      alert('Incorrect!');
    }
  }

  return (
    <>
      <form className='form' onSubmit={(e) => verifyVerse(e)}>
        <div>
          <h1>Verse</h1>
          <div>
            <input className='verse-input' value={verse} onChange={(e) => setVerse(e.target.value)} />
          </div>
        </div>
        <textarea className='text-input' value={text} onChange={(e) => setText(e.target.value)} />
        <button className='verify-button'>Verify</button>
        
        {showHintButton && <button type='button' onClick={() => setShowHint(!showHint)}>{showHint ? 'Hide Hint' : 'Show Hint'}</button>}
        {showHint && <p>{correct}</p>}
      </form>
    </>
  )
}

export default App
