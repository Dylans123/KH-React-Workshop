import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Switch, CircularProgress } from '@material-ui/core';
import WordCard from './components/WordCard.js';
const randomWords = require('random-words')

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      error: false,
      darkMode: true,
      words: [],
    }
  }

  componentDidMount() {
    for(let i = 0; i < 100; ++i) {
      const word = randomWords();
      fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=387258a6-1127-496c-8533-8389f44db7d2`)
      .then(res => res.json())
      .then(
        (result) => {
          const { words } = this.state;
          const curWord = {
            word,
            type: result[0].fl,
            def: result !== undefined && result[0].shortdef !== undefined ? result[0].shortdef[0] : 'We\'re not sure what the definition is for this word'
          }
          words.push(curWord);
          this.setState({
            words
          });
          if (i === 99) {
            this.setState({
              isLoaded: true,
            })
          }
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error: true,
          });
        })
    }
  }

  handleSwitch() {
    const { darkMode } = this.state;
    this.setState({ darkMode: !darkMode })
  }

  render() {
    const { words, darkMode, isLoaded } = this.state;
    const darkColors = ['#BB86FC', '#3700B3', '#03DAC6'];
    const lightColors = ['#ACDDDE', '#E1F8DC', '#FFE7C7'];
    const mainBgColor = darkMode ? 'black' : 'white'
    const textColor = darkMode ? 'white' : 'black';

    return (
      <div style={{ backgroundColor: mainBgColor }}>
        <AppBar position="static">
          <Toolbar style={{ backgroundColor: mainBgColor, color: textColor }}>
            <Typography>
              Dictionary
            </Typography>
            <Switch
              checked={darkMode}
              onChange={() => this.handleSwitch()}
              value={darkMode}
              color="primary"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          </Toolbar>
        </AppBar>
        {isLoaded
        ? (
          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', padding: '50px' }}>
            {words.map((word) => {
              const bgColor = darkMode ? darkColors[Math.floor(Math.random() * 3)] : lightColors[Math.floor(Math.random() * 3)];
              return (
                <WordCard word={word} bgColor={bgColor} textColor={textColor}></WordCard>
              )
            })}
          </div>
        )
        : 
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw' }}>
            <CircularProgress size={100}/>  
          </div>
      }
      </div>
    );
  }
}

export default App;
