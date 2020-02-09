FROM nginx:alpine

RUN apk add yarn 

ADD package.json /root
ADD src /root/src
RUN yarn --cwd /root install
RUN yarn --cwd /root build
RUN mv /root/dist/* /usr/share/nginx/html
