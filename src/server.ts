import fastify from "fastify";

export const createServer = () => {
    const app = fastify({ logger: false });

    app.post("/chat", {
        schema: {
            body: {
                type: "object",
                required: ['question'],
                properties: {
                    question: { type: "string", minLength: 3 }
                }
            }
        }
    }, async (request, reply) => {
        try {
            const { question } = request.body as { question: string } 
            console.log("question", question)
            return reply.send("teste  Hello!")

        } catch (error) {
            console.error('Error handling /chat request:', error)
            return reply.code(500) 
        } 

    })
    return app;
}


