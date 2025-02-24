FROM python:3.12
WORKDIR /backend-flask
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
COPY . .
ENV FLASK_ENV=development
EXPOSE ${PORT}
CMD ["python3", "-m", "flask", "run", "--host=0.0.0.0"]