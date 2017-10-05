FROM node:boron

# Install Chrome
RUN apt-get update -y && \
    apt-get install ca-certificates \
      gconf-service \
      libasound2 \
      libatk1.0-0 \
      libatk1.0-0 \
      libdbus-1-3 \
      libgconf-2-4 \
      libgtk-3-0 \
      libnspr4 \
      libnss3 \
      libx11-xcb1 \
      libxss1 \
      libxtst6 \
      fonts-liberation \
      libappindicator1 \
      xdg-utils \
      lsb-release \
      wget \
      curl \
      xz-utils -y --no-install-recommends && \
    wget https://dl.google.com/linux/direct/google-chrome-unstable_current_amd64.deb && \
    dpkg -i google-chrome*.deb && \
    apt-get install -f && \
    apt-get clean autoclean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* google-chrome-unstable_current_amd64.deb

# Create web-recorder-backend directory
RUN mkdir -p /usr/src/web-recorder-backend
WORKDIR /usr/src/web-recorder-backend

# Install app dependencies
COPY package.json /usr/src/web-recorder-backend/
RUN npm install

# Bundle app source
COPY . /usr/src/web-recorder-backend

RUN Xvfb :0 -ac -screen 0 1024x768x24 &

EXPOSE 4000
CMD [ "npm", "start" ]
