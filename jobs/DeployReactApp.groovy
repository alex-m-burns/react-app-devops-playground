pipelineJob("Deploy-React-App"){
    description("Deploys a React web application to AWS")
    logRotator {
        daysToKeep(5)
        numToKeep(20)
    }
    concurrentBuild(allowConcurrentBuild = false)
    triggers {
        scm("* * * * *"){
            ignorePostCommitHooks(ignorePostCommitHooks = false)
        }
    }
    parameters {
      stringParam("ANIMAL_IDENTIFIER", defaultValue = "pootLovato", description = "Your unique animal identifier for this playground!")
    }
    definition {
    cpsScm {
      scm {
        git {
          branch("${BRANCH_TO_BUILD}")
          remote {
            credentials("${GIT_USER}")
            url("${GIT_URL}")
          }
        }
      }
      scriptPath('Jenkinsfile')
    }
  }
}