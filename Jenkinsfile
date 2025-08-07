pipeline {
    agent {
        docker {
            image 'node:22'
        }
    }

    stages {
        stage('Instalación de dependencias') {
            steps {
                sh 'npm install'
            }
        }
        stage('Ejecución de pruebas') {
            steps {
                sh 'npm run test:cov'
            }
        }
    }
}