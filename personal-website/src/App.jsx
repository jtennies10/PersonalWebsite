import logo from '/logo-personal.png'
import './App.css'
import SnakeGame from './components/SnakeGame.jsx'

function App() {
  return (
    <>
      <div>
        <img src={logo}/>
      </div>
      <p>
        This site is a work in progress. Someday it will get finished.<br />
        Until then, hang out and play some Snake.
      </p>
      <SnakeGame />
    </>
  )
}

export default App
