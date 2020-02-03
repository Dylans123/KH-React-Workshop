import React from 'react';
import { Typography, Card, CardContent } from '@material-ui/core';

function WordCard({ word, bgColor, textColor }) {
    return (
      <Card variant = "outlined" style={{ backgroundColor: bgColor, color: textColor, width:"275px" }}>
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
    )
}

export default WordCard;