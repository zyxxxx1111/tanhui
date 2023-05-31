FROM nginx:alpine

# COPY /nginx/ /etc/nginx/
COPY . /usr/share/nginx/html/
COPY /nginx.conf /etc/nginx/conf.d/default.conf.template

EXPOSE 80
CMD nginx -g "daemon off;"
