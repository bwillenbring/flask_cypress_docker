FROM python:2.7 as base

# --------------------------------------------------

FROM base as python
RUN mkdir app
COPY requirements.txt /app
WORKDIR /app
RUN pip install -r requirements.txt

# --------------------------------------------------

CMD ["python", "app.py"]
