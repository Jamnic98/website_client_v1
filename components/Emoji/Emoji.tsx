interface Props {
  symbol: string;
}

function Emoji(props: Props) {
  return (
    <span data-testid='emoji' role='img'>
      {props.symbol}
    </span>
  );
}

export default Emoji;
