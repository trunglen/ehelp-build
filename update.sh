while true; do
    
    if [[ $(git pull origin master) == *up-to-date* ]]; 
    then
        echo "no change"
    else
        echo "detect changes"
        sleep 2s
        echo "restart ehelp"
        pm2 restart ehelp_linux_amd64
    fi
    echo "sleep 30s"
    sleep 30s        

done