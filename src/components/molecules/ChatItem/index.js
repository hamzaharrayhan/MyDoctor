import React from 'react';
import Other from './Other';
import IsMe from './IsMe';

const ChatItem = ({mine}) => {
  if (mine) {
    return <IsMe />;
  }
  return <Other />;
};

export default ChatItem;
