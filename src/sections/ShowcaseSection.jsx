import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  

  useGSAP(() => {

     // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

     // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });

  }, [])

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper bg-[#FFEFDB]">
              <img src="/images/project4.png" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>
                YC Directory - A Startup Showcase App
              </h2>
              <p className="text-white-50 md:text-xl">
                A Next.js app that showcases and explores startups, powered by Sanity CMS. Browse startup cards, view detailed pitches rendered from Markdown, filter by category, and discover editor-curated picks. Sentry is integrated for error monitoring.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div ref={libraryRef} className="project">
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>The Library Management Platform</h2>
            </div>
            <div ref={ycDirectoryRef} className="project">
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/Abe_garaj1.png" alt="YC Directory App" />
              </div>
              <h2>Abe Garage: Your Premier Automotive Service and Repair Hub</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
