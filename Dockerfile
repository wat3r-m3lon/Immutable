# Start with the official Node.js image
FROM node:18

# Set environment variables for Java version (change these if you need a different version)
ENV JAVA_VERSION 17

# Install OpenJDK
RUN apt-get update \
    && apt-get install -y --no-install-recommends openjdk-${JAVA_VERSION}-jdk \
    && apt-get install -y maven \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Check installed versions
RUN node --version
RUN npm --version
RUN java -version
RUN javac -version

# Create app directory
WORKDIR /usr/src/Immutable

# Copy code directory from host to container
COPY . /usr/src/Immutable

# Set the working directory to backend
WORKDIR /usr/src/Immutable/UserLayer/backend

# Use sed to modify the configuration file
RUN sed -i 's/jdbc:mysql:\/\/localhost:3306/jdbc:mysql:\/\/host.docker.internal:3306/' /usr/src/Immutable/UserLayer/backend/src/main/resources/application.properties

# Build arguments --- NEED TO BE MOTIFIED ---
ARG YOUR_DATABASE_PASSWORD=<YOUR_DATABASE_PASSWORD>
ARG YOUR_JWT_SECRET=<YOUR_JWT_SECRET>
ARG YOUR_SERVER_EMAIL_ADRESS=<YOUR_SERVER_EMAIL_ADRESS>
ARG YOUR_SERVER_EMAIL_PASSWORD=<YOUR_SERVER_EMAIL_PASSWORD>
ARG YOUR_WEB3STORAGE_EMAIL=<YOUR_WEB3STORAGE_EMAIL>

# Create .env file with the content using the build arguments for backend
RUN echo "SPRING_DATASOURCE_PASSWORD=$YOUR_DATABASE_PASSWORD" > /usr/src/Immutable/UserLayer/backend/.env && \
    echo "USERLAYER_APP_JWT_SECRET=$YOUR_JWT_SECRET" >> /usr/src/Immutable/UserLayer/backend/.env && \
    echo "# FOR SENDING VALIDATION EMAIL" >> /usr/src/Immutable/UserLayer/backend/.env && \
    echo "SPRING_MAIL_USERNAME=$YOUR_SERVER_EMAIL_ADRESS" >> /usr/src/Immutable/UserLayer/backend/.env && \
    echo "SPRING_MAIL_PASSWORD=$YOUR_SERVER_EMAIL_PASSWORD" >> /usr/src/Immutable/UserLayer/backend/.env && \
    echo "WEB3STORAGE_EMAIL=$YOUR_WEB3STORAGE_EMAIL" >> /usr/src/Immutable/UserLayer/backend/.env

# Set the working directory to frontend
WORKDIR /usr/src/Immutable/UserLayer/frontend

# install node modules
RUN npm install
#RUN npm install dotenv
#RUN npm install express cors web3.storage

RUN chmod -R 777 /usr/src/Immutable/start-services-docker.sh
RUN chmod -R 777 /usr/src/Immutable/DockerLog/log-limit.sh
# Execute the shell script
CMD ["/bin/bash", "/usr/src/Immutable/start-services-docker.sh"]
