import React from 'react'
export interface EmojiProps {
	symbol: string
}

export const Emoji: React.FC<EmojiProps> = ({ symbol }) => (
	<div data-testid="application-emoji" role="img">
		{symbol}
	</div>
)
