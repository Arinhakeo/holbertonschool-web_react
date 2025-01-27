### Projet : Espaces de Noms Ambiants pour une Bibliothèque CRUD

**Obligatoire :**

1. **Créer le répertoire `task_3` et copier les fichiers de configuration :**
   - Copiez les fichiers `package.json`, `webpack.config.js`, et `tsconfig.json` dans le répertoire `task_3`.

2. **Créer les types et interfaces dans `interface.ts` :**
   - Créez un fichier `interface.ts` dans le répertoire `task_3/js`.
   - Définissez un type `RowID` égal à `number`.
   - Définissez une interface `RowElement` avec les champs suivants :
     - `firstName`: `string`
     - `lastName`: `string`
     - `age`: `number` (optionnel)

3. **Intégrer la bibliothèque `crud.js` :**
   - Copiez le fichier `crud.js` fourni dans le répertoire `task_3/js`.

4. **Créer un fichier d'espaces de noms ambiant `crud.d.ts` :**
   - Créez un fichier `crud.d.ts` dans le répertoire `task_3/js`.
   - Importez les types `RowID` et `RowElement` du fichier `interface.ts`.
   - Déclarez les types pour les fonctions CRUD.

5. **Implémenter le fichier `main.ts` :**
   - Créez un fichier `main.ts` dans le répertoire `task_3/js`.
   - Ajoutez une directive triple slash pour inclure les dépendances du fichier `crud.d.ts`.
   - Importez les types `RowID` et `RowElement` du fichier `interface.ts`.
   - Importez toutes les fonctions de `crud.js` sous le nom `CRUD`.
   - Créez un objet `row` de type `RowElement` avec les champs spécifiés.
   - Attribuez la valeur de retour de `insertRow` à une constante `newRowID` de type `RowID`.
   - Mettez à jour l'objet `row` avec un champ `age` et appelez les fonctions `updateRow` et `deleteRow`.

**Résultat attendu :**

```typescript
const obj = { firstName: "Guillaume", lastName: "Salva" };
CRUD.insertRow(obj)
// Insert row {firstName: "Guillaume", lastName: "Salva"}

const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updatedRow);
// Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}

CRUD.deleteRow(125);
// Delete row id 125
```

**Repo :**

- Répertoire GitHub : `holbertonschool-web_react`
- Répertoire : `TypeScript`
- Fichiers : `task_3/js/main.ts`, `task_3/js/interface.ts`, `task_3/js/crud.d.ts`

---

### Étapes Détaillées

#### Créer le Répertoire et Copier les Fichiers de Configuration

1. **Créer le répertoire `task_3` :**
   ```bash
   mkdir task_3
   cd task_3
   ```

2. **Copier les fichiers de configuration :**
   - Copiez les fichiers `package.json`, `webpack.config.js`, et `tsconfig.json` dans le répertoire `task_3`.

#### Définir les Types et Interfaces

1. **Créer le fichier `interface.ts` :**
   ```typescript
   // task_3/js/interface.ts
   export type RowID = number;

   export interface RowElement {
     firstName: string;
     lastName: string;
     age?: number;
   }
   ```

#### Intégrer la Bibliothèque `crud.js`

1. **Copier le fichier `crud.js` :**
   ```javascript
   // task_3/js/crud.js
   export function insertRow(row) {
     console.log('Insert row', row);
     return Math.floor(Math.random() * Math.floor(1000));
   }

   export function deleteRow(rowId) {
     console.log('Delete row id', rowId);
     return;
   }

   export function updateRow(rowId, row) {
     console.log(`Update row ${rowId}`, row);
     return rowId;
   }
   ```

#### Créer le Fichier d'Espaces de Noms Ambiant `crud.d.ts`

1. **Créer le fichier `crud.d.ts` :**
   ```typescript
   // task_3/js/crud.d.ts
   import { RowID, RowElement } from './interface';

   declare function insertRow(row: RowElement): RowID;
   declare function deleteRow(rowId: RowID): void;
   declare function updateRow(rowId: RowID, row: RowElement): RowID;
   ```

#### Implémenter le Fichier `main.ts`

1. **Créer le fichier `main.ts` :**
   ```typescript
   // task_3/js/main.ts
   /// <reference path="./crud.d.ts" />

   import { RowID, RowElement } from './interface';
   import * as CRUD from './crud';

   const row: RowElement = {
     firstName: 'Guillaume',
     lastName: 'Salva',
   };

   const newRowID: RowID = CRUD.insertRow(row);
   console.log(`Insert row ${JSON.stringify(row)}`);

   const updatedRow: RowElement = { ...row, age: 23 };
   CRUD.updateRow(newRowID, updatedRow);
   console.log(`Update row ${newRowID} ${JSON.stringify(updatedRow)}`);

   CRUD.deleteRow(newRowID);
   console.log(`Delete row id ${newRowID}`);
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

Ce projet illustre l'utilisation des espaces de noms ambiants en TypeScript pour déclarer des types pour des bibliothèques externes sans implémentation. Les fichiers de déclaration (`*.d.ts`) permettent de fournir des informations de type pour des bibliothèques JavaScript existantes, améliorant ainsi la sécurité de type et l'intellisense dans l'IDE. La fonctionnalité CRUD démontrée ici montre comment intégrer une bibliothèque externe dans un projet TypeScript en utilisant des espaces de noms ambiants, assurant une intégration sécurisée et robuste.