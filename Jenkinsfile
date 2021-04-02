pipeline {
  agent any

  tools {nodejs "node-ts"}

  stages {

    stage('Git') {
      steps {
        git 'https://github.com/e2cabral/jenkins-node-ts-project.git'
      }
    }

    stage('Installation') {
          steps {
            sh 'npm install'
          }
        }

    stage('Build') {
      steps {
         sh 'npm run build'
      }
    }

    stage('Test') {
      steps {
        sh 'node test'
      }
    }
  }
}
