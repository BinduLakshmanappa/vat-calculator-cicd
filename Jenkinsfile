// Same pipeline for Jenkins (needs the NodeJS plugin with a tool named "node20")
pipeline {
  agent any
  tools { nodejs 'node20' }
  stages {
    stage('Install')   { steps { sh 'npm ci' } }
    stage('Typecheck') { steps { sh 'npm run typecheck' } }
    stage('Test')      { steps { sh 'npm test' } }
    stage('Build')     { steps { sh 'npm run build' } }
    stage('Archive') {
      when { branch 'main' }
      steps { archiveArtifacts artifacts: 'dist/**' }
    }
  }
}
