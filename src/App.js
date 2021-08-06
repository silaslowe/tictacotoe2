import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [board, setboard] = useState(['', '', '', '', '', '', '', '', ''])
  const [player, setPlayer] = useState(true)
  const [message, setMessage] = useState('')
  const [gameWinner, setGameWinner] = useState(false)

  const handleClick = (index) => {
    const updated = [...board]

    if (player && updated[index] === '') {
      updated[index] = 'X'
      setboard(updated)
      
    } 
    if (!player && updated[index] === '') {
      updated[index] = 'O'
      setboard(updated)
    }
    setPlayer(!player)
    setMessage('')
  }



  const winner = () => {
    setPlayer(!player)
    player ? setMessage('Player 2 wins') : setMessage('Player 1 wins')
  }

  const reset = () => {
    setboard(['', '', '', '', '', '', '', '', ''])
    winner() 
    setPlayer(true)
    setGameWinner(true)
  }

const winCondition = () => {
  if(board[0] !== '' && board[0] === board[1] && board[1] === board[2]) {
    reset()
  }
  if(board[0] !== '' && board[0] === board[3] && board[3] === board[6]) {
    reset()
  }
  if(board[0] !== '' && board[0] === board[4] && board[4] === board[8]) {
    reset()
  }
  if(board[1] !== '' && board[1] === board[4] && board[4] === board[7]) {
    reset()
  }
  if(board[2] !== '' && board[2] === board[4] && board[4] === board[6]) {
    reset()
  }
  if(board[2] !== '' && board[2] === board[4] && board[4] === board[8]) {
    reset()
  }
  if(board[3] !== '' && board[3] === board[4] && board[4] === board[5]) {
    reset()
  }
  if(board[6] !== '' && board[6] === board[7] && board[7] === board[8]) {
    reset()
  }
  return
}

const computerPlay = () => {
  winCondition()
  if(player === false && gameWinner === false) {
    const play = Math.floor(Math.random() * 8)
    if (board[play] === '') {
        handleClick(play)
        return
      } else {
        computerPlay()  
        }
      }
    }
  
  useEffect(() => {
    computerPlay()
  }, [board])

  winCondition()

  return (
    <div className='App'>
      <h1>Tic Tac Toe</h1>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div className='box' onClick={() => handleClick(0)}>
              <p>{board[0]}</p>
            </div>
            <div className='box' onClick={() => handleClick(1)}>
              <p>{board[1]}</p>
            </div>
            <div className='box' onClick={() => handleClick(2)}>
              <p>{board[2]}</p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div className='box' onClick={() => handleClick(3)}>
              <p>{board[3]}</p>
            </div>
            <div className='box' onClick={() =>handleClick(4)}>
              <p>{board[4]}</p>
            </div>
            <div className='box' onClick={() =>handleClick(5)}>
              <p>{board[5]}</p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div className='box' onClick={() =>handleClick(6)}>
              <p>{board[6]}</p>
            </div>
            <div className='box' onClick={() =>handleClick(7)}>
              <p>{board[7]}</p>
            </div>
            <div className='box' onClick={() =>handleClick(8)}>
              <p>{board[8]}</p>
            </div>
          </div>
        </div>
      </div>
      <p>{message}</p>
    </div>
  )
}

export default App
