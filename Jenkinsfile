pipeline {
  agent any
  tools {nodejs "node"}
  environment {
    BC_USER="admin"
    BC_PWD="baac@123"
    PROJECT_NAME="PROJECT_NAME"
    APP_NAME="APP_NAME"
  }
  stages {
    stage('Sonarqube Scanner') {
      environment {
        scannerHome = tool 'SonarQubeScanner'
      }
      steps {
        withSonarQubeEnv('sonarqube') {
          sh "echo ${scannerHome}"
          sh "${scannerHome}/bin/sonar-scanner -X"
        }
      }
    }
    
    stage('Preparing & Build for UAT') {
      steps {
        script {
          withEnv(["PATH+NODE=${env.WORKSPACE}/node/bin"]) {
            sh "npm install -g yarn"
            sh "yarn install"
            sh "yarn build:uatunix"
          }
        }
      }
    }

    stage('Read package.json for UAT') {
      steps {
        script {
          def props = readJSON file: "/var/jenkins_home/workspace/${APP_NAME}/package.json"
          env.version = props.version 
          sh "echo ${env.version}"
        }
      }
    }

    stage("Build ENV docker-compose for UAT") {
      steps {
        sh "echo 'TAG=${env.version}'>.env"
      }
    }
    
    stage("Build Docker Image for UAT") {
      steps {
        sh "chmod 777 Dockerfile"    
        sh "docker build -t bluecurve.int.baac.or.th/${PROJECT_NAME}/${APP_NAME}-uat:${env.version} -f Dockerfile ."
      }
    }

    stage("Assign docker tag & push to harbor for UAT"){
      steps {
        sh "docker login bluecurve.int.baac.or.th -u ${BC_USER} -p ${BC_PWD}"  
        sh "docker push bluecurve.int.baac.or.th/${PROJECT_NAME}/${APP_NAME}-uat:${env.version}"  
        sh "docker logout bluecurve.int.baac.or.th"
      }
    }

    stage("Build Docker Image for PROD") {
      steps {
        sh "chmod 777 Dockerfile"    
        sh "docker build -t bluecurve.int.baac.or.th/${PROJECT_NAME}/${APP_NAME}-prod:${env.version} -f Dockerfile ."
      }
    }

    stage("Assign docker tag & push to harbor for PROD"){
      steps {
        sh "docker login bluecurve.int.baac.or.th -u ${BC_USER} -p ${BC_PWD}"  
        sh "docker push bluecurve.int.baac.or.th/${PROJECT_NAME}/${APP_NAME}-prod:${env.version}"  
        sh "docker logout bluecurve.int.baac.or.th"
      }
    }
    
    stage("Run docker-compose"){
      steps {
        sh "docker-compose stop ${APP_NAME}"
        sh "docker-compose rm -f ${APP_NAME}"
        sh "docker-compose up -d ${APP_NAME}"
      }
    }
  }
}
