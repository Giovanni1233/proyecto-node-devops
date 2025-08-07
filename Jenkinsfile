pipeline {
    agent {
        docker {
            image 'node:22'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }

    stages {
        stage('Instalación de dependencias') {
            steps {
                sh 'npm install'
            }
        }

        stage('Ejecución de pruebas automatizadas') {
            steps {
                sh 'npm run test:cov'
            }
        }
    }
}