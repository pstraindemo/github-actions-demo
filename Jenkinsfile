pipeline {
    agent any

    tools {
        nodejs 'NodeJS 14'
    }

    environment {
        // Ensure that Node.js is available on the PATH
        NODEJS_HOME = tool name: 'NodeJS 14', type: 'NodeJSInstallation'
        PATH = "${NODEJS_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Install Dependencies') {
            steps {
                // Install project dependencies
                bat 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                // Run the tests
                bat 'npm test'
            }
        }
        stage('Build') {
            steps {
                // Build the project
                bat 'npm run build'
            }
        }
    }
}
