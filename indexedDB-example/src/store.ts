import { openDB } from "idb";

const dbPromise = openDB("keyvalue-store", 1, {
  upgrade(db) {
    db.createObjectStore("keyvalue");
  },
});

export async function set(key, value) {
  return (await dbPromise).put("keyvalue", key, value);
}
