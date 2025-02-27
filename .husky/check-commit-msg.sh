#!/bin/bash
commit_file_regex="\.git\/COMMIT"
if ! [[ $1 =~ $commit_file_regex ]]; then
    echo "ignoring commit message check for '$1'"
    exit 0
fi

commit_message=$(cat $1)
regex="^(fix|feat|refactor|test|impr|build)\((M|D)-[0-9]+\):.{10,}$"
if [[ $commit_message =~ $regex ]];
then
    exit 0
else
    echo ''
    echo '************************************** CHECK COMMIT IS FAILED **************************************'
    echo ''
    echo 'Wrong message format!'
    echo 'Correct format is: "<type>(<issue id>): <message>"'
    echo 'For example: "feat(M-1234): Add a new feature"'
    echo '<type> can be: fix, feat, refactor, test, impr, build'
    echo 'more info at: https://www.notion.so/mobal/Dev-standards-Guidelines-6571e0dce33040c8a25fa7d4a913d364'
fi
exit 1
