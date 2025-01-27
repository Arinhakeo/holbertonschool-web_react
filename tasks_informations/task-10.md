### Projet : Convention de Marque et Typage Nominal

**Obligatoire :**

1. **Créer le répertoire `task_5` et copier les fichiers de configuration :**
   - Copiez les fichiers `package.json`, `tsconfig.json`, et `webpack.config.js` dans le répertoire `task_5`.

2. **Créer les interfaces `MajorCredits` et `MinorCredits` dans `task_5/js/main.ts`:**
   - Chaque interface doit définir un nombre nommé `credits`.
   - Ajoutez une propriété de marque à chaque interface pour les identifier de manière unique.

3. **Créer deux fonctions nommées `sumMajorCredits` et `sumMinorCredits` dans `task_5/js/main.ts`:**
   - Chaque fonction prend deux arguments, `subject1` et `subject2`.
   - `sumMajorCredits` doit renvoyer une valeur de type `MajorCredits` et `sumMinorCredits` doit renvoyer une valeur de type `MinorCredits`.
   - Chaque fonction doit additionner les crédits des deux matières.

**Repo :**

- Répertoire GitHub : `holbertonschool-web_react`
- Répertoire : `TypeScript`
- Fichiers : `task_5/js/main.ts`, `task_5/package.json`, `task_5/webpack.config.js`, `task_5/tsconfig.json`

---

### Étapes Détaillées

#### Créer le Répertoire et Copier les Fichiers de Configuration

1. **Créer le répertoire `task_5` :**
   ```bash
   mkdir task_5
   cd task_5
   ```

2. **Copier les fichiers de configuration :**
   - Assurez-vous que les fichiers `package.json`, `tsconfig.json`, et `webpack.config.js` sont présents dans le répertoire `task_5`.

#### Créer les Interfaces et Fonctions dans `main.ts`

1. **Créer le fichier `main.ts` :**
   - Créez un fichier `main.ts` dans `task_5/js` :

```typescript
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
```

### Compiler et Tester

1. **Configurer Webpack :**
   - Assurez-vous que votre fichier `webpack.config.js` est correctement configuré pour gérer les fichiers TypeScript.

2. **Compiler le Code :**
   ```bash
   npm run build
   ```

3. **Exécuter le Code :**
   ```bash
   node dist/bundle.js
   ```

### Synthèse

Ce projet démontre l'utilisation de conventions de marque et de typage nominal en TypeScript pour créer des types uniques qui peuvent être utilisés pour effectuer des opérations spécifiques. Les interfaces `MajorCredits` et `MinorCredits` sont clairement définies avec une propriété de marque qui aide à distinguer les types, même s'ils contiennent des propriétés similaires. Les fonctions `sumMajorCredits` et `sumMinorCredits` illustrent comment ces types peuvent être utilisés pour encapsuler des comportements spécifiques tout en garantissant la sécurité de type.