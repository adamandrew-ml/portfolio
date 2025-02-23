docker build --no-cache -t server-docker .
docker run -p 5000:5000 server-docker

docker build --no-cache -t client-docker .
docker-compose up

docker run -p 3000:3000 client-docker

sudo lsof -i :PORT

CMD ["npx", "serve", "dist"]
