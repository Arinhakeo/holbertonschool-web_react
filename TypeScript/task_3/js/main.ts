/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

const newRowID: RowID = CRUD.insertRow(row); // Insère la ligne et renvoie un RowID

const updatedRow: RowElement = {
  ...row,
  age: 23, // Ajoute le champ "age"
};

CRUD.updateRow(newRowID, updatedRow); // Met à jour la ligne
CRUD.deleteRow(newRowID); // Supprime la ligne
