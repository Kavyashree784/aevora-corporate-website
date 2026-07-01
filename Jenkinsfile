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

        stage('Deploy Container') {
            steps {
                bat '''
                docker stop aevora-container || ver > nul
                docker rm aevora-container || ver > nul
                docker run -d -p 8081:80 --name aevora-container aevora-app
                '''
            }
        }
    }
}