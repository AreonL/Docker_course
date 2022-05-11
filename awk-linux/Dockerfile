FROM debian:stretch-slim

RUN apt-get update &&\
    apt-get install -y bc

WORKDIR /filter

COPY ./script.sh ./awk.awk ./

CMD ["bash", "./script.sh"]