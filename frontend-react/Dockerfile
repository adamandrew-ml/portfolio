FROM node:18-slim
ENV PORT=80
ENV PATH=/frontend-react/node_modules/.bin/$PATH
ENV NODE_ENV=production
COPY . /frontend-react
WORKDIR /frontend-react
RUN rm -rf node_modules package-lock.json
RUN npm install -g vite 
RUN npm install --save
RUN npm run build
EXPOSE ${PORT}
CMD ["vite", "--host", "0.0.0.0", "--port", "80"] 