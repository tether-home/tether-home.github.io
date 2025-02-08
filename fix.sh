git filter-branch --env-filter '
if [ "$GIT_COMMITTER_EMAIL" = "sam_gwd@me.com" ]; then
    GIT_COMMITTER_NAME="tether-home"
    GIT_COMMITTER_EMAIL="sam.tetherhome@gmail.com"
    export GIT_COMMITTER_NAME GIT_COMMITTER_EMAIL
fi
if [ "$GIT_AUTHOR_EMAIL" = "sam_gwd@me.com" ]; then
    GIT_AUTHOR_NAME="tether-home"
    GIT_AUTHOR_EMAIL="sam.tetherhome@gmail.com"
    export GIT_AUTHOR_NAME GIT_AUTHOR_EMAIL
fi
' --tag-name-filter cat -- --branches --tags

