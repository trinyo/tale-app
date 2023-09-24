type DataSet = { [key: string]: string };

const MagyarJelenkor: DataSet = require("./mjelenkor.json");
const Magyar19451956: DataSet = require("./m19451956.json");

export const DataSets = [
  {
    id: "m19451956",
    name: "Magyarország 1945-1956",
    data: Magyar19451956,
    count: Object.keys(Magyar19451956).length,
  },
  {
    id: "mjelenkor",
    name: "Magyarország Jelenkor",
    data: MagyarJelenkor,
    count: Object.keys(MagyarJelenkor).length,
  },
];
