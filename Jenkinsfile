pipeline {
  agent any
  triggers {
   cron('H/5 ****')
   }
  stages {
    stage('echo') {
      steps {
        echo 'Hello from Jenkins'
      }
    }

    stage('secondmessage') {
      steps {
        echo 'Again Helloooo'
      }
    }
    
    stage('thirdmessage') {
      steps {
        echo 'Third Hellooo'
      }
    }

    stage('Fourth mssg') {
      steps {
        echo 'Hi Hi 4th'  
    }

  }
  }
