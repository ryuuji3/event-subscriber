import { readFile } from "../utils";
import { buildSchema, GraphQLSchema, GraphQLFieldMap } from "graphql";

export default async function (): Promise<GraphQLSchema> {
    const file = await readFile("./src/schema/schema.graphql")

    return buildSchema(file);
}

export const resolvers = {
    greeting({ name }) {
        return `Hello, ${name}`;
    }
}