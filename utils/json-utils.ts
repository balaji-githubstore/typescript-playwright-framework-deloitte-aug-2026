import fs from "fs"
import { JSONFILE } from "../config.js"


export class JsonUtils {
    public static getJsonData(key?: string): any {

        const data = JSON.parse(fs.readFileSync(JSONFILE, 'utf-8'))

        if (key === undefined) {
            return data;
        }

        return data[key]
    }
}