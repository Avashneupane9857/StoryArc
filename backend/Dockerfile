FROM node:18-alpine
WORKDIR /app
COPY /package*.json /app/
RUN npm install
RUN npx prisma generate
RUN npm run build 
COPY . /app/
EXPOSE 3000
CMD [ "node","dist/index.js" ]