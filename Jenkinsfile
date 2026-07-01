pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Repository checked out successfully.'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t aevora-app .'
            }
        }

        stage('Run Docker Container') {
            steps {
                bat 'docker run -d -p 3000:3000 --name aevora-container aevora-app'
            }
        }
    }
}