// task_5/js/main.ts

// Interfaces
interface MajorCredits {
    credits: number;
    brand: "major"; // Propriété de marque pour identifier l'interface
  }
  
  interface MinorCredits {
    credits: number;
    brand: "minor"; // Propriété de marque pour identifier l'interface
  }
  
  // Fonction pour additionner les crédits majeurs
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: "major", // Assure l'identité de la marque
    };
  }
  
  // Fonction pour additionner les crédits mineurs
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: "minor", // Assure l'identité de la marque
    };
  }
  
  // Exemple d'utilisation
  const major1: MajorCredits = { credits: 4, brand: "major" };
  const major2: MajorCredits = { credits: 3, brand: "major" };
  const totalMajor = sumMajorCredits(major1, major2);
  console.log(`Total Major Credits: ${totalMajor.credits}`); // Affiche : Total Major Credits: 7
  
  const minor1: MinorCredits = { credits: 2, brand: "minor" };
  const minor2: MinorCredits = { credits: 1, brand: "minor" };
  const totalMinor = sumMinorCredits(minor1, minor2);
  console.log(`Total Minor Credits: ${totalMinor.credits}`); // Affiche : Total Minor Credits: 3