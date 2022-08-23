podTemplate(yaml: '''
    apiVersion: v1
    kind: Pod
    spec:
      containers:
      - name: maven
        image: maven:3.8.6-jdk-9.04
        command:
        - sleep
        args:
        - 99d
      - name: kaniko
        image: gcr.io/kaniko-project/executor:debug
        command:
        - sleep
        args:
        - 9999999
        volumeMounts:
        - name: kaniko-secret
          mountPath: /kaniko/.docker
      restartPolicy: Never
      volumes:
      - name: kaniko-secret
        secret:
            secretName: dockercred
            items:
            - key: .dockerconfigjson
              path: config.json
''') {
  node {
     def mvnHome = tool 'maven-3.8.6'
     def dockerImage
     def dockerImageTagb = "devopsexemple${env.BUILD_NUMBER}"
     
     stage('Clone Repo'){
       git 'https://github.com/mathart7/angular-dashboard-ui'
     }

     stage('Build project') {
      sh "'${mvnHome}/bin/mvn' -B -DskipTests clean package"
    }

     stage('Initialize Docker'){
       def dockerHome = tool 'MyDocker'
       env.PATH = "${dockerHome}/bin:${env.PATH}" 
    } 

     stage('Build Docker Image'){
      sh "docker -H tcp://10.153.101.103:2375 build -t devopsexemple:${env.BUILD_NUMBER} ."
    }

     stage('Deploy Docker Image'){
       echo "Doker Image Tag Name: ${dockerImageTag}"
       sh "docker -H tcp://10.153.101.103:2375 run --name devopsexample -d -p 2222:2222 devopexample:${env.BUILD_NUMBER}"

   }

   }











