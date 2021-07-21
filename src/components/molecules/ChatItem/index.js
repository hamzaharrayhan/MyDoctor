import React from 'react';
import Other from './Other';
import IsMe from './IsMe';

const ChatItem = ({mine, text, date, photo}) => {
  if (mine) {
    return <IsMe text={text} date={date} />;
  }
  return <Other text={text} date={date} photo={photo} />;
};

export default ChatItem;
