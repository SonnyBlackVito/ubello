import * as motion from "motion/react-client";
import type { Variants } from "motion/react";
import Image from "next/image";

export default function ScrollTriggered() {
  return (
    <div style={container}>
      <motion.div className="text-white text-6xl font-semibold tracking-wide">
        WELCOME TO
        <br />
        APP UBELLO
      </motion.div>

      {food.map(([emoji, hueA, hueB], i) => (
        <Card i={i} emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
      ))}
    </div>
  );
}

interface CardProps {
  emoji: string;
  hueA: number;
  hueB: number;
  i: number;
}

function Card({ emoji, hueA, hueB, i }: CardProps) {
  //   const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className={`card-container-${i}`}
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}>
      <div style={{ ...splash }} />
      <motion.div style={card} variants={cardVariants} className="card">
        <Image
          src={emoji}
          alt="phone"
          width={800}
          height={800}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
  margin: "100px auto",
  maxWidth: 500,
  paddingBottom: 100,
  width: "100%",
};

const cardContainer: React.CSSProperties = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  paddingTop: 20,
  marginBottom: -120,
};

const splash: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

const card: React.CSSProperties = {
  fontSize: 164,
  width: 500,
  height: 600,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 20,
  background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #CAACFF 100%)",
  boxShadow:
    "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
  transformOrigin: "10% 60%",
};

/**
 * ==============   Data   ================
 */

const food: [string, number, number][] = [
  ["/images/iPhone_14Pro_1.png", 340, 10],
  ["/images/iPhone_14Pro_2.png", 20, 40],
  ["/images/iPhone_14Pro_3.png", 60, 90],
  ["/images/iPhone_14Pro_4.png", 80, 120],
  ["/images/iPhone_14Pro_5.png", 100, 140],
];
