import React, { Component } from 'react';
import './App.css';
import { AppBar, Toolbar, Typography, Card, CardContent, Switch, Container, Grid } from '@material-ui/core';
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
    for(let i = 0; i < 25; ++i) {
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
            isLoaded: true,
            words
          });
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
    const { words, darkMode } = this.state;
    const darkColors = ['#BB86FC', '#3700B3', '#03DAC6'];
    const lightColors = ['#ACDDDE', '#E1F8DC', '#FFE7C7'];
    console.log(words);
    return (
      <div style={{ backgroundColor: darkMode ? 'black' : 'white' }}>
        <AppBar position="static">
          <Toolbar style={{ backgroundColor: 'black' }}>
            <Typography>
              Dictionary
            </Typography>
            <Switch
              checked={darkMode}
              onChange={() => this.handleSwitch()}
              value={darkMode}
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          </Toolbar>
        </AppBar>
        <Container>
          <Grid container direction="row">
            {words.map((word) => {
              const bgColor = darkMode ? darkColors[Math.floor(Math.random() * 3)] : lightColors[Math.floor(Math.random() * 3)];
              const textColor = darkMode ? 'white' : 'black';
              return (
                <Grid container item xs={3} spacing={3}>
                  <Card variant = "outlined" style={{ backgroundColor: bgColor, color: textColor, minWidth:"275px" }}>
                    <CardContent>
                      <Typography variant="h5" component="h2">
                        {word.word}
                      </Typography>
                      <Typography>
                        {word.type}
                      </Typography>
                      <Typography variant="body2" component="p">
                        {word.def}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
