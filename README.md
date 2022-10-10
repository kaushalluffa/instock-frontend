# For developers how to use the git and github
1. Use this command to clone the repo "git clone repo-url". There is no need to set remote or origin now.
2. Use this command to checkout to develop branch of the repo "git checkout develop"
3. Then use this command to create a new branch as per your ticket number "git checkout -b ticket/###"
4. Then you can write the code then stage the changes "git add -A" and commit the changes "git commit -m 'message' " and push to your ticket/### branch "git push -u origin ticket/###".
5. Once you have committed and pushed the code to your feature branch then checkout to develop branch "git checkout develop"
6. Use "git pull" command on develop branch to pull the updated version
7. Now checkout again to the feature branch "git checkout ticket/###" and use this command "git merge develop" it will merge the updated version to the feature branch. You will have to solve the merge conflicts.
8. And now you will go to github and create a pull request and one of us will review it.
9. Once PR is approved use these two commands: to delete the branch on github "git push origin --delete branchname" and to delete the local git branch -D branchname