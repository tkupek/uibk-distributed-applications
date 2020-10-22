7z a nqueens-fractions.zip nqueensFaaS-manual.js external.js package.json
ibmcloud fn action update H02-task1-nqueens-fractions .\nqueens-fractions.zip --kind nodejs:12

cd ibm\H02-task2-nqueens-fractions\
7z a nqueens-fractions-x2faas.zip
ibmcloud fn action update H02-task2-nqueens-fractions .\nqueens-fractions-x2faas.zip --kind nodejs:12
cd ../../