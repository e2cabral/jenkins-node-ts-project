pipeline {
  agent any

  tools {nodejs "node-ts"}

  stages {

    stage('Git') {
      steps {
        git 'https://github.com/****/****'
      }
    }

    stage('Build') {
      steps {
        sh 'npm install'
         sh '<<Build Command>>'
      }
    }


    stage('Test') {
      steps {
        sh 'node test'
      }
    }
  }
}
