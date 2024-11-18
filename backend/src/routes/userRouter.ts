import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { jwt, sign } from 'hono/jwt'
import {signupInput,signinInput} from "@avashnp/common"
export const userRouter=new Hono<{Bindings:{
    DATABASE_URL:string;
    JWT:string
  }}>()


  
userRouter.post('/signup',async(c)=>{
    const body=await c.req.json()
    const { success } = signupInput.safeParse(body);
	if (!success) {
		c.status(400);
		return c.json({ error: "invalid input" });
	}
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  try{
   const user= await prisma.user.create({
      data:{
        email:body.email,
        password:body.password,
        name:body.name,
    
      }
    })
    const token=await sign({
  id:user.id
    },c.env.JWT)
    return c.json({ token });

  }
  
  catch(e){
    c.status(400)
    return c.text("Error in signup ")
  }
  
  })
  
  
  
  
  
  userRouter.post('/signin',async(c)=>{
    const body=await c.req.json()
    const { success } = signinInput.safeParse(body);
	if (!success) {
		c.status(400);
		return c.json({ error: "invalid input" });
	}
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  
  try{
   const user= await prisma.user.findFirst({
      where:{
        email:body.email,
        password:body.password,
    
      }
    })
    
   if(!user){
    c.status(403)
    return c.text("Error in signIn ") 
   }
   const token=await sign({
    id:user.id
      },c.env.JWT)
  
      return c.json({ token });

    
  }
  
  catch(e){
    c.status(400)
    return c.text("Error in signIn ")
  }
  })