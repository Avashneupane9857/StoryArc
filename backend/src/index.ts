import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'


const app = new Hono<{Bindings:{
  DATABASE_URL:string;
}}>()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})


app.post('api/v1/user/signup',(c)=>{
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())
  return c.text("hello from signup")
})

app.post('api/v1/user/signin',(c)=>{
  return c.text("hello from signin")
})

app.post('api/v1/blog',(c)=>{
  return c.text("hello from blog")
})


app.put('api/v1/blog',(c)=>{
  return c.text("hello from update blog")
})



app.get('api/v1/blog/:id',(c)=>{
  return c.text("hello from get blog")
})



app.get('api/v1/blog/bulk',(c)=>{
  return c.text("hello from bulk blog")
})




export default app













