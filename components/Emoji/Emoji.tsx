import React from 'react';

interface EmojiProps {
  symbol: string;
}

const Emoji: React.FC<EmojiProps> = ({ symbol }) => (
  <span data-testid='emoji' role='img'>
    {symbol}
  </span>
);

export default Emoji;
