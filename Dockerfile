FROM node:13.7.0       #base docker image

WORKDIR /usr/src/app
COPY package.json .
RUN npm install  --silent   
#RUN npm install react-scripts@3.0.1 -g --silent
COPY . .  #copy current to workdir

EXPOSE 3000
CMD [ "npm", "start" ]  

#--silent silences the NPM output