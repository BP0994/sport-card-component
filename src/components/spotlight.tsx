"use client";
import React from "react";
import Spotlight_card from "./spotlight-card";
import newJersy from "../assets/newJersy.png";

const Spotlight = () => {
  const aviators =
    "https://s3-alpha-sig.figma.com/img/bc7b/d2d1/a2c7e5def5b347470305864869a894b6?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BZDcos--1UzSQRlT-N9cx65GfMLCdY1bDgUpPVGWaSaeNFqn5f3mWqPPavOC3dwIVAQ5LSFSV87f4nqFWTL47SpM9SAoK-Hik~QDb9r9ZcMQi0f2bLc~CwVSIVqTWUUErwccA~nln3KASNGTwveym6PUgIPSqPuS0TzUtzpGFgI80gg31qkC0KXNRC--XF6vFtVP5szniy~A5-hhak8Ct-WgvgQLqVThJm~LXpDkB0NIVZ8NQ9O2y6whQDm0gf7Ex7i03oFtipY19gbTtPAr6mzV-0RZKivl-0woyvGsK-aA1JzKvWYgzExzhjqGFCca1yvb2KbomyjjpZHxtvZV-A__";
  const rclive =
    "https://s3-alpha-sig.figma.com/img/3de4/4e83/b6e3aeda879dc6f22f94711c788789b5?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nUF~1EVyrZGHV5Y2m287PwrLOJlkr894fLVacxtljXvPD4wxG9g4D2HNAj17sY960ZApdFZ7vZXHvZjq0~7Vb0wM3nF3b6Vi4SHLk4ztO3tAouszbmpZp~d~lEZl3-95hpbTXgrwtNGB8ujsBxQL5KUsZwG3wCPXLt61kJIpz2pmCQcmY9vS-JuNgfHT13F0ObY4jJSYeFrRcihRJfTmLxzOCbyXqncFRQhnBCuL50D-E1XAHNLFOX5AXJVnBoisGHVAYJbjfoz3UWH0g-bApbnLTUyR5vEZUBdIwoQISiaSttjGTQD6NhpHyKXKHWuE3yVUN2jmWzVwOnvPzn1nEA__";
  return (
    <div className="bg-base-300 p-8">
      <div>
        <div>
          <h1 className="text-center   text-5xl font-bold mb-4 mt-8">
            Collection Spotlight
          </h1>
          <h1 className="text-center font-light px-8">
            Discover extraordinary moments with our Spotlight Collection
            metatickets—exclusive access to premium events for an unforgettable
            experience. Grab yours today!
          </h1>
        </div>
        <div className="flex justify-around flex-wrap gap-y-4 mt-20">
          <Spotlight_card
            image={aviators}
            team="Las Vegas Aviators"
            time="OCT | SUN | 4:30pm"
            place="Las Vegas Ballpark, Las Vegas, Nevada"
            button="Take Flight Collection"
          />
          <Spotlight_card
            image={rclive}
            team="Sacramento River Cats"
            time="OCT | SUN | 4:30pm"
            place="Sutter Health Park, Sacramento, California"
            button="Orange Collection"
          />
          <Spotlight_card
            image={aviators}
            team="Las Vegas Aviators"
            time="OCT | SUN | 4:30pm"
            place="Las Vegas Ballpark, Las Vegas, Nevada"
            button="Take Flight Collection"
          />
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
