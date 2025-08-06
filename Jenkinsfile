pipeline {
    agent any
    stages {
        stage('Instalacion de dependencias') {
            agent {
                docker{
                    image 'node:22'
                    reuseNode true
                }
            }
            stages{
                stage('Instalacion dependencias'){
                    steps {
                        sh 'npm install'
                    }   
                }
                stage('Ejecucion de pruebas automatizadas'){
                    steps {
                        sh 'npm run test:cov'
                    }   
                }
            } 
        }
        
    }
}
