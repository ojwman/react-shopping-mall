FROM node:12
ADD ./node-server-start.sh app.sh
ENTRYPOINT ["/bin/sh","app.sh"]
