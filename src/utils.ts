import * as fs from "fs";

export function readFile(fileName: string) {
    return new Promise<string>((resolve, reject) => {
        return fs.readFile(fileName, "utf-8", (error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        })
    });
}