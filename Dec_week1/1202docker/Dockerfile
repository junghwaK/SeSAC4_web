FROM node:alpine

WORKDIR /app

# copy는 소스코드를 추가하는것. 앞은 내위치, 뒤는 컨테이너 위치다. 
COPY . /app

# 명령어를 실행해라. node modules깔고 하라고 알려주는거임
RUN npm install

# 컨테이너가 만들어질때 뿐만아니라 멈췄다가 다시 실행될때도 되는친구임.
CMD [ "npm", "start" ]