import Button from "@components/Button";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="aboutWrapper">
      <div className="about">
        <h1>About</h1>
        <p>
          This art gallery consist of exclusive, fully customisable art from
          various artists perfect for every home. Feel free to browse and buy as
          many beautiful painting as you like.
        </p>
        <Link passHref href={"/"}>
          <Button>Go to store</Button>
        </Link>
      </div>
      <div className="contact">
        <h1>Contact</h1>
        <p>
          Need to get in touch with us? <br />
          Please email us at:
          <a href="mailto:fakeartemail@fakemail.com">
            <span> fakeartemail@fakemail.com</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
