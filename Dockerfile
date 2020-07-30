FROM nginx:1.17.9
COPY nginx/default.conf /etc/nginx/conf.d/
RUN rm -rf /usr/share/nginx/html/*
RUN apt-get -y update; apt-get install -y curl
WORKDIR /usr/share/nginx/html
COPY ./build .
CMD ["nginx", "-g", "daemon off;"]
