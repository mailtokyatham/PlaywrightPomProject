# Use the official Node.js image as the base
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Playwright and its dependencies
RUN npx playwright install

# Copy the rest of your application code and tests
COPY . .

# Expose the necessary port (optional, for web applications)
# EXPOSE 3000

# Command to run Playwright tests
CMD ["npm", "run", "tests:api"]


