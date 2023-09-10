import { type FC } from "react";
import Link from "next/link";

import { useWidth } from "../../utils";
import styles from "./NavLogo.module.css";

export interface NavLogoProps {
  handleClick?: Function;
  linkURL?: string;
}

export const NavLogo: FC<NavLogoProps> = ({ handleClick, linkURL = "/" }) => {
  const width = useWidth() || 800;

  return (
    <Link href={linkURL} legacyBehavior>
      <a
        className={styles.navLogo}
        onClick={handleClick ? () => handleClick() : undefined}
      >
        {width >= 800 ? "Jamie Stimpson" : "JS"}
      </a>
    </Link>
  );
};
