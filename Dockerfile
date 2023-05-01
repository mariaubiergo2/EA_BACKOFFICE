FROM node:14.21.3 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --configuration=production
FROM nginx:alpine
COPY --from=node /app/dist/backoffice /usr/share/nginx/html