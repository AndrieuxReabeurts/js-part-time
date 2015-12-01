git workflow for teams

1. “admin” creates a remote repository on github.com

2. “admin”, using “git init”, creates a local repository on their computer

3. “admin”, using “git remote set-url”, links their local repository to the remote repository at the url

ex: get remote set-url https://github.com/AndrieuxReabeurts/js-part-time

4. “admin” sets up the basic code base, optionally, does some work on the project, then adds, commits, and pushes all code to master.  FROM THIS POINT FORWARD, best practice is for all team members to work with branches and for no team member to push directly to master.

5. “admin” adds group members as collaborators on github.com

6. team members should “git clone” remote project code base using clone url

7. team members should execute “git checkout -b myCustomBranchName” to create a branch of their own custom naming and should do their work locally in that branch

8. git add and commit incrementally and frequently as you are working, and when you have reached a point of completion at which you want your new code to be merged back into the remote master, do a final git add and commit, then BEFORE pushing your code, run “git pull origin master” to further ensure that the most up to date code on master is in agreement with your code.

9. Now push your code to what will become the REMOTE VERSION of YOUR CUSTOM LOCAL BRANCH

ex: git push origin myCustomBranchName

10. check out github.com, your code should now be pushed to your remote custom branch.  Now open a pull request to be reviewed by your teammates to all for the merging of your code with the code base on your remote master branch.