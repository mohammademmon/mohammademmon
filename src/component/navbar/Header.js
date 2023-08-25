"use client";
import Headmenudata from "@/data/Headmenudata";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../images/emmon-logo.png";
import { Inconsolata } from "next/font/google";
import { Roboto } from "next/font/google";
import Socialicons from "../sociallinks/Socialicons";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: "400",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

const Header = () => {
  return (
    <>
      <section className="d-flex justify-content-center" id="course">
        <Link className={roboto.className} href="#"><span>Click here</span> to Hire me to solve your websites security issues</Link>
      </section>
      <Navbar expand="lg" id="nav_custom">
        <Container>
          <Link href="#">
            <Image
              width={150}
              maxHeight={45}
              src={Logo}
              alt="Logo"
              className="nav_logo"
            />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto menu"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {Headmenudata?.map((data, i) => (
                <Link
                  className={inconsolata.className + " " + "menu_items"}
                  href={data.url}
                >
                  {data.title}
                </Link>
              ))}
            </Nav>
          </Navbar.Collapse>
          <div className="social mx-end"><Socialicons/></div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
