import React from "react";
import styles from "./animal.module.css";
import Image from "next/image";

const Animal = ({ animal }) => {
  let animalSubtitle = (
    <h2 className={styles.animalSubTitle}>
      {animal.subtitle} <span>{animal.subtitleFeatured}</span>
    </h2>
  );

  if (animal.name === "Butterfly") {
    animalSubtitle = (
      <h2 className={styles.animalSubTitle}>
        <span>{animal.subtitleFeatured}</span> {animal.subtitle}
      </h2>
    );
  }

  if (animal.name === "Elephant") {
    animalSubtitle = (
      <h2 className={styles.animalSubTitle}>
        It makes a <span>huge</span> difference
      </h2>
    );
  }

  return (
    <section className={styles.animalCard} id={animal.name.replace(/\s/g, "")}>
      <span className={styles.animalName}>{animal.name.toUpperCase()}</span>
      {animalSubtitle}
      <div className={styles.animalImage}>
        <Image src={animal.img} alt={animal.name} width={817} height={431} />
      </div>
    </section>
  );
};

export default Animal;
