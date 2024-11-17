import { Hono } from 'hono';
import { userRouter } from './routes/userRouter';
import { blogRouter } from './routes/blogRouter';

const app = new Hono<{ Bindings: { DATABASE_URL: string; JWT: string } }>();

// Middleware to set CORS headers
app.use('*', async (c, next) => {
  c.header('Access-Control-Allow-Origin', 'http://localhost:5173');  // Allow frontend domain
  c.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');  // Allowed methods
  c.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');  // Allowed headers

  if (c.req.method === 'OPTIONS') {
    // Send a 200 response for preflight requests
    return c.text('OK', 200);
  }

  await next();
});

// Test route to confirm server is working
app.get('/', (c) => {
  return c.text('Hello Hono!');
});

// Define additional routes
app.route('/api/v1/user', userRouter);
app.route('/api/v1/blog', blogRouter);

export default app;
