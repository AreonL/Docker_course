for ((i=0;i<100;i++)); do
    start_time=$(date +%s.%6N)
    result=$(awk -f awk.awk ../data/Zookeeper.log)
    end_time=$(date +%s.%6N)
    echo "$result" > ../data/log.json

    timed=$(echo "scale=6; $end_time - $start_time" | bc -l)
    echo "0"$timed "<-"
done
