### Projet : Création d'une Classe Étudiant

**Obligatoire :**
Écrivez une classe nommée `StudentClass` :

- Le constructeur accepte deux arguments `firstName` (chaîne de caractères) et `lastName` (chaîne de caractères).
- La classe a une méthode nommée `workOnHomework` qui renvoie la chaîne de caractères "Currently working".
- La classe a une méthode nommée `displayName` qui renvoie le prénom de l'étudiant (`firstName`).
- Le constructeur de la classe doit être décrit à l'aide d'une interface.
- La classe doit être décrite à l'aide d'une interface.

**Exigences :**

- Vous pouvez réutiliser la configuration Webpack de l'exercice précédent pour compiler le code.
- Lors de l'exécution de `npm run build`, aucune erreur TypeScript ne doit être affichée.
- Toutes les variables doivent utiliser TypeScript lorsque cela est possible.


---

### Étapes Détaillées

1. **Définir les interfaces :**  Définissez deux interfaces : `StudentConstructor` pour décrire le constructeur de la classe, et `StudentClass` pour décrire la classe elle-même.

2. **Implémenter la classe `StudentClass`:**  Créez la classe `StudentClass` avec son constructeur et ses méthodes `workOnHomework` et `displayName`.  Assurez-vous que les types sont correctement définis.

3. **Intégrer au fichier `main.ts`:**  Ajoutez le code des interfaces et de la classe dans votre fichier `js/main.ts`.  Assurez-vous que le code est bien formaté et que les types sont correctement définis.

Voici le code complet de `main.ts` :

```typescript
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClass {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

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
  numberOfReports: 17,
};

const student1 = new StudentClass("Alice", "Smith");

console.log(teacher3);
console.log(director1);
console.log(printTeacher("John", "Doe")); // Test de la fonction printTeacher
console.log(student1.workOnHomework()); // Test de la méthode workOnHomework
console.log(student1.displayName()); // Test de la méthode displayName
```

4. **Compiler et tester:**  Utilisez Webpack pour compiler votre code (`npm run build`) et testez l'exécution du code compilé (`node dist/bundle.js`).  Vérifiez que la classe `StudentClass` fonctionne correctement et que les méthodes `workOnHomework` et `displayName` renvoient les résultats attendus.


---

### Synthèse

Ce projet illustre l'utilisation des interfaces TypeScript pour décrire des classes et leurs constructeurs.  La classe `StudentClass` démontre une approche simple mais efficace pour encapsuler des données et des comportements.  L'intégration de cette classe dans le fichier `main.ts` démontre une bonne pratique d'organisation de code.  L'utilisation de Webpack pour la compilation et l'exécution assure un workflow cohérent et robuste.