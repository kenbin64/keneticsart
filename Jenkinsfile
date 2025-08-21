pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
      dir './.devcontainer'
    }
  }
  environment {
    NODE_ENV = 'development'
  }
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Run Tests') {
      steps {
        sh 'npm test'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
    stage('Deploy') {
      when {
        branch 'main'
      }
      steps {
        sh './scripts/deploy.sh'
      }
    }
  }
}