import { createServer } from "./server.ts"

const app = createServer();

await app.listen({ port: 3000, host: "0.0.0.0" });
app.log.info(`Server is running at  port 3000`);

app.inject({
    method: "POST",
    url: "/chat",
    body: {question: "HELLO WORLD!!!"}  
}).then(response => {
    console.log("response status", response.statusCode)
    console.log("response body", response.body)
})

