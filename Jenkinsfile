
pipeline {
    agent any

    triggers {
        pollSCM('* * * * *')
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Test Application') {
            steps {
                sh 'node --check server.js'
            }
        }

        stage('Deploy Application') {
            steps {
                sh '''
                    pm2 startOrReload ecosystem.config.js \
                    --update-env
                '''
            }
        }
    }

    post {
        success {
            echo 'Application deployed successfully!'
        }

        failure {
            echo 'Deployment failed. Check the console output.'
        }
    }
}

