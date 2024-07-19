#!/bin/bash

log_file="$1"
max_size=10485760  # 10MB in bytes

# Check if the log file size exceeds the max size
if [[ $(stat -c%s "$log_file") -ge $max_size ]]; then
    # Truncate the file to the last 5000 lines to keep some of the recent logs
    tail -n 5000 "$log_file" > "${log_file}.tmp"
    mv "${log_file}.tmp" "$log_file"
fi