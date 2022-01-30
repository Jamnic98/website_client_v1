import Link from 'next/link';
import styles from './CustomLink.module.css';

interface Props {
  url: string;
  children?: any;
}

function CustomLink({ url, children }: Props) {
  return (
    <Link href={url}>
      <a className={styles.customLink}>{children}</a>
    </Link>
  );
}

export default CustomLink;
