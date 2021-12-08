import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import { Container } from "./styles";

export const Header: React.FC = () => {
  return (
    <Container>
      <div className="header">
        <div className="avatar">
          <Image
            width={80}
            height={80}
            className="avatar-img"
            src="/images/avatar.jpeg"
            alt="logo-img"
          />
        </div>
        <nav className="navigation">
          <ul className="navigation-list">
            <li className="navigation-list-item">
              <Link href="/">Home</Link>
            </li>
            <li className="navigation-list-item">
              <Link href="/about">About</Link>
            </li>
            <li className="navigation-list-item">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="navigation-list-item">
              <Link href="/portfolio">Portfolio</Link>
            </li>
          </ul>
        </nav>
        <div className="contact">
          <button className="contact-btn">Contact Us</button>
        </div>
      </div>
    </Container>
  );
};

export default memo(Header);
