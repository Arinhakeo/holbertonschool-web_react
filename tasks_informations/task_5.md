### Projet : Types Avancés - Partie 1

**Obligatoire :**

1. Créez l'interface `DirectorInterface` avec les 3 méthodes attendues :
    - `workFromHome()` renvoyant une chaîne de caractères.
    - `getCoffeeBreak()` renvoyant une chaîne de caractères.
    - `workDirectorTasks()` renvoyant une chaîne de caractères.

2. Créez l'interface `TeacherInterface` avec les 3 méthodes attendues :
    - `workFromHome()` renvoyant une chaîne de caractères.
    - `getCoffeeBreak()` renvoyant une chaîne de caractères.
    - `workTeacherTasks()` renvoyant une chaîne de caractères.

3. Créez une classe `Director` qui implémentera `DirectorInterface` :
    - `workFromHome` doit renvoyer la chaîne de caractères "Working from home".
    - `getCoffeeBreak` doit renvoyer la chaîne de caractères "Getting a coffee break".
    - `workDirectorTasks` doit renvoyer la chaîne de caractères "Getting to director tasks".

4. Créez une classe `Teacher` qui implémentera `TeacherInterface` :
    - `workFromHome` doit renvoyer la chaîne de caractères "Cannot work from home".
    - `getCoffeeBreak` doit renvoyer la chaîne de caractères "Cannot have a break".
    - `workTeacherTasks` doit renvoyer la chaîne de caractères "Getting to work".

5. Créez une fonction `createEmployee` avec les exigences suivantes :
    - Elle peut renvoyer une instance de `Director` ou de `Teacher`.
    - Elle accepte un argument : `salary` (soit un nombre, soit une chaîne de caractères).
    - Si `salary` est un nombre et inférieur à 500, elle doit renvoyer un nouvel objet `Teacher`. Sinon, elle doit renvoyer un nouvel objet `Director`.

**Résultat attendu :**

```
console.log(createEmployee(200)); // Teacher
console.log(createEmployee(1000)); // Director
console.log(createEmployee('$500')); // Director
```

**Repo :**

- Répertoire GitHub : `holbertonschool-web_react`
- Répertoire : `TypeScript`
- Fichiers : `task_2/js/main.ts`, `task_2/webpack.config.js`, `task_2/tsconfig.json`, `task_2/package.json`


---

### Étapes Détaillées

1. **Créer les interfaces et les classes:** Définissez les interfaces `DirectorInterface` et `TeacherInterface`, puis implémentez les classes `Director` et `Teacher` qui respectent les méthodes décrites.

2. **Créer la fonction `createEmployee`:**  Implémentez la logique de la fonction `createEmployee` pour retourner soit une instance de `Teacher`, soit une instance de `Director` en fonction de la valeur du salaire.  Utilisez les opérateurs de typage appropriés pour gérer les différents types de salaire (`number` et `string`).  Une conversion de type peut être nécessaire pour le salaire de type `string`.

3. **Intégrer le code dans `main.ts`:**  Ajoutez le code des interfaces, des classes et de la fonction `createEmployee` dans votre fichier `task_2/js/main.ts`. Assurez-vous que tout est correctement formaté et que les types sont correctement définis.


Voici le code complet pour `task_2/js/main.ts` :

```typescript
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

const createEmployee = (salary: number | string): Director | Teacher => {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
};

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
```

4. **Configurer Webpack:** Assurez-vous que votre fichier `webpack.config.js` est correctement configuré pour gérer les fichiers TypeScript.  Il devrait ressembler à celui des exercices précédents.

5. **Compiler et tester:**  Utilisez Webpack pour compiler votre code (`npm run build`) et testez l'exécution du code compilé (`node dist/bundle.js`). Vérifiez que la fonction `createEmployee` fonctionne correctement et que la sortie correspond à l'attendu.


---

### Synthèse

Ce projet illustre des concepts avancés de TypeScript, notamment les interfaces et l'implémentation de classes.  Il démontre comment utiliser les interfaces pour définir des contrats pour les classes et comment utiliser les types union (`number | string`) pour gérer des paramètres d'entrée de types différents.  La fonction `createEmployee` illustre la logique conditionnelle et le polymorphisme en retournant différents types d'objets en fonction des conditions.  L'utilisation de Webpack pour la compilation assure un workflow efficace et robuste.
