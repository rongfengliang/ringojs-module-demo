FROM dalongrong/ringojs-docker:1.2.1-local
WORKDIR /app
COPY .  /app/
RUN rp install -y
ENTRYPOINT [ "ringo","index.js","-H","0.0.0.0"]