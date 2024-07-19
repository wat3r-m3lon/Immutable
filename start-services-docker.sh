#!/bin/bash

# Navigate to directory containing mvnw
cd /usr/src/Immutable/UserLayer/backend
# Limit the log size
/usr/src/Immutable/DockerLog/log-limit.sh /usr/src/Immutable/DockerLog/spring-boot.log
# Start Spring Boot app in the background, redirecting both stdout and stderr to a log file
mvn spring-boot:run >> /usr/src/Immutable/DockerLog/spring-boot.log 2>&1 &

# Navigate to directory containing package.json
cd /usr/src/Immutable/UserLayer/frontend

# Install npm packages
# npm install

# Limit the log size
/usr/src/Immutable/DockerLog/log-limit.sh /usr/src/Immutable/DockerLog/npm.log
# Start the npm service, redirecting both stdout and stderr to a log file
npm run dev >> /usr/src/Immutable/DockerLog/react.log 2>&1


