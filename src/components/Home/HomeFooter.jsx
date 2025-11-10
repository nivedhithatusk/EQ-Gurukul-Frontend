import React from "react";
import Link from "next/link";

const HomeFooter = () => {
  return (
    <section className="homefooter-banner">
      <div >
        <p>We welcome you to learn more about our admission process</p>
        <h1>We’re always happy to <br/>
        hear from you</h1>

        <div className="homefooter-banner-button">
            <Link href="#hero-banner"><button className="cursor-pointer">JOIN WITH US</button></Link>
        </div>
      </div>
    </section>
  );
};

export default HomeFooter;
