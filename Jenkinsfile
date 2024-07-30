pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                // install project depemndencies
                bat 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }
        stage('Build') {
            steps{
                bat 'npm run build'
            }
        }
    }
}