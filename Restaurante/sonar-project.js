const sonarqubeScanner =  require('sonarqube-scanner');
sonarqubeScanner(
    {
        serverUrl:  'https://sonarcloud.io',
        options : {
            'sonar.projectKey': 'Gary-Joan_Practica5_sa',
            'sonar.organization':'gary-joan',
            'sonar.inclusions'  :  '**', // Entry point of your code
            'sonar.test.inclusions':  '*.test.js,**/*.test.jsx',
            'sonar.javascript.lcov.reportPaths':  'coverage/lcov.info',
            'sonar.testExecutionReportPaths':  'coverage/test-reporter.xml'
        }
    }, () => {});