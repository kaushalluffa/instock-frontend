# For developers how to use the git and github
1. Once you have committed and pushed the code to your feature branch then checkout to develop branch
2. Use "git pull" command on develop branch to pull the updated version
3. Now checkout again to the feature branch and use this command "git merge develop" it will merge the updated version to the feature branch. You will have to solve the merge conflicts.
4. After step 3 you will commit and push changes to the feature branch.
5. And now you will go to github and create a pull request and one of us will review it.
6. Once PR is approved use these two commands: to delete the branch on github "git push origin --delete branchname" and to delete the local git branch -D branchname