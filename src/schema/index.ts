import { readFile } from "../utils";
import { buildSchema, GraphQLSchema, GraphQLFieldMap } from "graphql";
import Event from "../models/Event";

export default async function (): Promise<GraphQLSchema> {
    const file = await readFile("./src/schema/schema.graphql")

    return buildSchema(file);
}

const events: Event[] = [];

export const resolvers = {
    events() {
        return events;
    },
    publish({ payload: raw }) {
        const payload = JSON.parse(raw);
        const event = new Event(payload);

        events.push(event);

        return event;
    }
}