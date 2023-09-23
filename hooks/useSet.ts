import { DataSets } from "@/data/datasets";

export function useSet(id: string) {
  return DataSets.find((x) => x.id === id);
}
