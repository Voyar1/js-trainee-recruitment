import Animal from "@/components/Animal/Animal";
import Sidebar from "@/components/Sidebar/Sidebar";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const animals = [
  {
    name: "Polar Bear",
    subtitle: `Say hello to your new`,
    subtitleFeatured: "friend",
    img: "/Rectangle 4194.png",
  },
  {
    name: "Cheetah",
    subtitle: "No petting before",
    subtitleFeatured: "eating",
    img: "/Rectangle 4194-1.png",
  },
  {
    name: "Panda",
    subtitle: "Eating always with",
    subtitleFeatured: "pleasure",
    img: "/Rectangle 4194-2.png",
  },
  {
    name: "Fox",
    subtitle: "Sometimes quite",
    subtitleFeatured: "suspicious",
    img: "/Rectangle 4194-3.png",
  },
  {
    name: "Squirel",
    subtitle: "Staying",
    subtitleFeatured: "curious",
    img: "/Rectangle 4194-4.png",
  },
  {
    name: "Butterfly",
    subtitle: "every time of a day",
    subtitleFeatured: "Majestic ",
    img: "/Rectangle 4194-5.png",
  },
  {
    name: "Elephant",
    subtitle: "It makes a huge difference",
    img: "/Rectangle 4194-6.png",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Recruitment Task</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${inter.className} wrapper`}>
        <div className="sideBarLayout">
          <div className="sideBarContainer">
            <Sidebar animals={animals} />
          </div>
        </div>
        <div className="animals">
          {animals.map((animal) => {
            return <Animal animal={animal} key={animal.name} />;
          })}
        </div>
      </div>
    </>
  );
}
