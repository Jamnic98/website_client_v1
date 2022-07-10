import React, { FC } from 'react';

interface EmojiProps {
  symbol: string;
}

const Emoji: FC<EmojiProps> = ({ symbol }) => (
  <span data-testid='emoji' role='img'>
    {symbol}
  </span>
);

export default Emoji;
