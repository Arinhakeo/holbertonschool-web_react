### Projet : Afficher les Informations des Enseignants

**Obligatoire :**
Écrivez une fonction `printTeacher` :

- Elle accepte deux arguments : `firstName` et `lastName` (chaînes de caractères).
- Elle renvoie la première lettre de `firstName` et le nom complet `lastName`.
- Exemple : `printTeacher("John", "Doe") -> J. Doe`
- Écrivez une interface pour la fonction nommée `printTeacherFunction`.


---

### Étapes Détaillées

1. **Créer l'interface `printTeacherFunction`:**  Définissez une interface TypeScript pour spécifier le type de la fonction `printTeacher`. Cette interface décrit le type des paramètres d'entrée et le type de la valeur de retour.

2. **Implémenter la fonction `printTeacher`:**  Créez la fonction `printTeacher` qui prend deux arguments de type `string` (firstName et lastName), et qui renvoie une chaîne de caractères formatée comme spécifié.  Utilisez les méthodes de chaîne de caractères appropriées pour extraire la première lettre du prénom.

3. **Intégrer au fichier `main.ts`:**  Ajoutez le code de l'interface et de la fonction dans votre fichier `js/main.ts`.  Assurez-vous que le code est bien formaté et que les types sont correctement définis.

Voici le code complet de `main.ts` :

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

console.log(teacher3);
console.log(director1);
console.log(printTeacher("John", "Doe")); // Test de la fonction printTeacher
```

4. **Compiler et tester:**  Utilisez Webpack pour compiler votre code (`npm run build`) et testez l'exécution du code compilé (`node dist/bundle.js`).  Vérifiez que la fonction `printTeacher` fonctionne correctement et que la sortie correspond à l'attendu.


---

### Synthèse

Ce projet illustre l'utilisation des interfaces TypeScript pour définir le type d'une fonction et renforcer la robustesse du code.  La fonction `printTeacher` manipule des chaînes de caractères et démontre une approche simple mais efficace pour extraire et formater des informations.  L'intégration de cette fonction dans le fichier `main.ts` démontre une bonne pratique d'organisation de code.  L'utilisation de Webpack pour la compilation et l'exécution assure un workflow cohérent et robuste.
