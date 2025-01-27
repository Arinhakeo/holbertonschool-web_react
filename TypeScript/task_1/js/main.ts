interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // Ceci permet d'ajouter des propriétés supplémentaires de n'importe quel type
  }
  
  interface Directors extends Teacher {
    numberOfReports: number; // Propriété spécifique à l'interface Directors
  }
  
  const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17, // Initialisation de la propriété numberOfReports
  };
  
  console.log(teacher3);
  console.log(director1); // Affichage des objets dans la console