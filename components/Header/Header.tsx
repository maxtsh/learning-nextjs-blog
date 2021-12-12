import { useRouter, NextRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";
import { BsHouseFill, BsGithub } from "react-icons/bs";
import { RiPagesFill } from "react-icons/ri";
import { HiViewGrid } from "react-icons/hi";
import { Container } from "./styles";

export const Header: React.FC = () => {
  const { push }: NextRouter = useRouter();

  const handleRouter = (url: string) => {
    return () => {
      window.open(url, "_blank");
    };
  };

  const handleContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    push("/contact");
  };

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
              <BsHouseFill
                size={20}
                color="#666"
                className="navigation-list-item-icon"
              />
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleRouter("https://github.com/maxtsh")}
              className="navigation-list-item"
            >
              <BsGithub
                size={20}
                color="#666"
                className="navigation-list-item-icon"
              />
              <a>Github</a>
            </li>
            <li className="navigation-list-item">
              <RiPagesFill
                size={20}
                color="#666"
                className="navigation-list-item-icon"
              />
              <Link href="/posts">Posts</Link>
            </li>
            <li className="navigation-list-item">
              <HiViewGrid
                size={20}
                color="#666"
                className="navigation-list-item-icon"
              />
              <Link href="/portfolio">Portfolio</Link>
            </li>
          </ul>
        </nav>
        <div className="contact">
          <button onClick={handleContact} className="contact-btn">
            Contact Me
          </button>
        </div>
      </div>
    </Container>
  );
};

export default memo(Header);
