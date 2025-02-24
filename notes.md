docker build --no-cache -t backend-flask .
docker run -p 5000:5000 backend-flask

docker build --no-cache -t frontend-react .
docker run -p 80:80 client-docker

docker-compose up --build

sudo lsof -i :PORT

CMD ["npx", "serve", "dist"]
