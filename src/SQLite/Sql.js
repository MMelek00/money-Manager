import { SQLite } from "expo";

let db = SQLite.openDatabase("db.db");

export const getAllTransactions = callback => {
  db.transaction(tx => {
    tx.executeSql(
      "select * from transactions;",
      [],
      (_, { rows: { _array } }) => callback(_array)
    );
  });
};

export const Createtable = db => {
  db.transaction(tx => {
    tx.executeSql(
      "create table if not exists transactions (id integer primary key not null, amount numeric, description text,category text,type text,location);"
    );
  });
};

export const add = data => {
  db.transaction(tx => {
    tx.executeSql(
      "insert into transactions (amount, value,description,category,type,location) values (0, ?)",
      [data.amount, data.description, data.category, data.type, data.location]
    );
  }, null);
};
