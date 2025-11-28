"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger); // Register Gsap Scroll Trigger Plugin

const imageUrls = [
  "/images/iPhone_14Pro_1.png",
  "/images/iPhone_14Pro_2.png",
  "/images/iPhone_14Pro_3.png",
  "/images/iPhone_14Pro_4.png",
  "/images/iPhone_14Pro_5.png",
];

const ScrollAnimation = () => {
  const imagesRef = useRef<any[]>([]); // Fix to store multiple refs

  useGSAP(() => {
    // Convert the current array of image references to a proper array for GSAP manipulation
    const images = gsap.utils.toArray(imagesRef.current);

    // Iterate over each image element
    images.forEach((panel: any, i: number) => {
      let scale = 1;

      // If the current image is not the last one, adjust the scale based on its index
      if (i !== images.length - 1) {
        scale = 0.9 + 0.025 * i; // Create a slight scaling effect for images based on their index
      }

      gsap.to(panel, {
        scale: scale,
        transformOrigin: "top center", // Specify the point from which the scaling transformation occurs
        ease: "none",

        // Configure the ScrollTrigger plugin for scroll-based animations
        scrollTrigger: {
          trigger: panel, // Set the current image as the trigger for the ScrollTrigger

          // Define when the animation should start based on the position of the trigger
          start: "top " + (70 + 40 * i), // Start the animation when the top of the panel is 70px down plus an offset based on index
          end: "bottom +=650px", // Define when the animation should end (bottom of the panel + 650px)
          endTrigger: ".end", // Specify the end trigger element
          pin: true, // Pin the current panel/image in place while it is being triggered
          pinSpacing: false, // Disable additional spacing around pinned elements
          scrub: true, // Enable scrub for smooth animation with scrolling
        },
      });
    });
  }, []);

  return (
    <div className="flex flex-col gap-12 mx-auto max-w-2xl py-12">
      {imageUrls.map((image, index) => (
        <div
          key={index}
          ref={(el: any) => (imagesRef.current[index] = el)}
          className="">
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-auto object-bottom rounded-lg shadow-lg"
          />
        </div>
      ))}
      <div className="end"></div>
    </div>
  );
};

export default ScrollAnimation;
