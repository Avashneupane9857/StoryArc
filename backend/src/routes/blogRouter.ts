
import { withAccelerate } from "@prisma/extension-accelerate";

import { PrismaClient } from '@prisma/client/edge'

import { Hono } from "hono";
import { verify } from "hono/jwt";

export const blogRouter=new Hono<{Bindings:{
    DATABASE_URL:string;
    JWT:string
  },
    Variables:{
      userId:string
    } 
}>()



  blogRouter.use('/*', async (c, next) => {
    const jwt = c.req.header('Authorization');
    if (!jwt) {
      c.status(401);
      return c.json({ error: "unauthorized" });
    }
    const token = jwt.split(' ')[1];
    const payload = await verify(token, c.env.JWT);
    if (!payload) {
      c.status(401);
      return c.json({ error: "unauthorized" });
    }
    //@ts-ignore
    c.set('userId', payload.id);
    await next()
  })



blogRouter.post('/',async(c)=>{

    const body=await c.req.json()
    const userId=c.get("userId")
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const post=await prisma.post.create({
    data:{
       title:body.title,
       content:body.content,
       authorId:userId,
    }
  })
  return c.json({
    id:post.id
  })
    
  })
  
  
  blogRouter.put('/',async(c)=>{
    const body=await c.req.json()
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const post=await prisma.post.update({
   where:{
    id:body.id
   },
   data:{
    title:body.title,
    content:body.content, 
   }
  })
  return c.json({
    id:post.id
  })
    
  })
  
  
  blogRouter.get('/:id',async(c)=>{
    const body=await c.req.json()
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  try{
    const post=await prisma.post.findFirst({
      where:{
       id:body.id
      }
      
     })
     return c.json({
       post
     })
       
  }catch(e){
    return c.text("error in get blog route ")
  }
  
  })
    
  
  
  blogRouter.get('bulk',async(c)=>{
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
const allBlog=await prisma.post.findMany()
    return c.json({posts:allBlog})
  })
  
  