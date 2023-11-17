import { type FC } from 'react'

export interface EmojiProps {
	symbol: string
}

export const Emoji: FC<EmojiProps> = ({ symbol }) => (
	<span data-testid="emoji" role="img">
		{symbol}
	</span>
)
