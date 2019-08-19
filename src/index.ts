import express from "express";
import graphqlHTTP from "express-graphql";
import { default as loadSchema, resolvers as rootValue } from "./schema";

const port = process.env.SERVER_PORT || 3000;
const graphiql = process.env.NODE_ENV !== "production";
const server = express();

loadSchema().then(schema => {
    server.use('/graphql', graphqlHTTP({
        schema,
        rootValue,
        graphiql
    }));

    server.listen(port);
}).catch(console.error);