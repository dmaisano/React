import { promises as fsPromises } from "fs";
import { resolve } from "path";
import chalk from "chalk";

const { readFile, writeFile } = fsPromises;

/**
 * Initial project setup script
 */
const main = async () => {
  createOrmConfig("src/ormconfig.ts");
};

const createOrmConfig = async (fileName: string) => {
  const fileContents = (await readFile(`${__dirname}/ormconfig.sample.ts`, {
    encoding: "utf-8",
  })) as string;

  const absPath = chalk.magenta(resolve(fileName));

  try {
    await writeFile(fileName, fileContents, {
      encoding: "utf-8",
      flag: "wx",
    });

    console.log(`${chalk.green("Created file:")} ${absPath}`);
  } catch (e) {
    if (e!.errno === -17) {
      console.log(`${chalk.red("File already exists:")} ${absPath}`);
    } else {
      console.log(`${chalk.red("Unable to create file:")} ${absPath}`);
    }
  }
};

main();
