FROM node:lts AS development
WORKDIR /app
COPY package*.json /app
RUN npm install
COPY . .
# EXPOSE 2000
CMD ["npm","run","start"]