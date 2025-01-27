## Projet : Étendre l'Interface Enseignant

**Obligatoire :**
1. Écrivez une interface nommée `Directors` qui étend l'interface `Teacher`. Elle nécessite un attribut nommé `numberOfReports` (nombre).
  
**Exemple :**
```typescript
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// devrait afficher
// Object
// firstName: "John"
// fullTimeEmployee: true
// lastName: "Doe"
// location: "London"
// numberOfReports: 17
```

**Repo :**
- Répertoire GitHub : `holbertonschool-web_react`
- Répertoire : `TypeScript`
- Fichier : `task_1/js/main.ts`

---

### Étapes Détaillées du Projet

1. **Modifier le fichier `main.ts`:**
   - Ouvrez le fichier `js/main.ts` qui a été créé précédemment.
   - Ajoutez la nouvelle interface `Directors` qui étend l'interface `Teacher` et inclut l'attribut `numberOfReports`. Voici comment votre code devrait apparaître :

   ```typescript
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
   ```

2. **Compiler avec Webpack:**
   - Après avoir sauvegardé les modifications dans `main.ts`, ouvrez votre terminal et exécutez la commande suivante pour compiler votre code :
     ```bash
     npm run build
     ```
   - Webpack devrait compiler le code sans afficher d'erreurs si tout est correctement configuré.

3. **Vérifier la sortie:**
   - Une fois la compilation terminée, exécutez le fichier `bundle.js` généré par Webpack avec la commande suivante :
     ```bash
     node dist/bundle.js
     ```
   - Vous devriez voir les objets `teacher3` et `director1` affichés dans la console, confirmant que l'interface `Directors` étend correctement l'interface `Teacher`.

---

### Synthèse

Cet exercice illustre le concept d'héritage en TypeScript à travers l'extension d'interface. L'interface `Directors` hérite de toutes les propriétés de l'interface `Teacher` et ajoute sa propre propriété spécifique (`numberOfReports`). Cela démontre la capacité de TypeScript à créer des structures de données hiérarchiques et réutilisables, améliorant la maintenabilité et la lisibilité du code. L'utilisation de Webpack assure une compilation et une exécution efficaces du code TypeScript. L'absence d'erreurs de compilation confirme la bonne implémentation de l'héritage d'interface.