# Smart Model Router Gateway

This project is a backend service designed to act as a gateway for routing requests to AI models. It is built using Fastify and TypeScript, providing a lightweight and efficient server structure.

## Features

- **Fastify Framework**: High-performance web framework for Node.js.
- **TypeScript Support**: Utilizing modern TypeScript features.
- **API Endpoint**: Exposes a `/chat` endpoint for processing questions.
- **Request Validation**: Schema-based validation for request bodies.

## Prerequisites

- Node.js (Latest version recommended for native TypeScript support without transpilation steps via `--experimental-strip-types` or similar, implied by the project setup).
- npm

## Installation

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

## Running the Application

To start the development server with watch mode and inspector enabled:

```bash
npm run dev
```

The server will start on port **3000**.

## API Endpoints

### POST /chat

Accepts a JSON payload with a `question`.

**Request Body:**

```json
{
  "question": "Your question here"
}
```

**Response:**

Returns a string response.

**Example Request:**

```bash
curl -X POST http://localhost:3000/chat \
  -H "Content-Type: application/json" \
  -d '{"question": "Hello World"}'
```

## Project Structure

- `src/index.ts`: Application entry point.
- `src/server.ts`: Server configuration and route definitions.

## License

This project is licensed under the ISC License.
