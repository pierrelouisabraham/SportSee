import { createServer, Response } from 'miragejs';
import axios from 'axios';

export function makeServer() {
  const server = createServer({
   

    routes() {
      this.namespace = '/api';
      this.get('/user/:userId', async (schema, request) => {
        const userId = request.params.userId;

        try {
          console.log(userId)
          const response = await axios.get(`http://localhost:4000/user/${userId}`);
          return new Response(200, {}, response.data);
        } catch (error) {
          return new Response(500, {}, { error: 'Failed to fetch data from real server' });
        }
      });
    },
  });

  return server;
}   