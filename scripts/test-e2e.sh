#!/bin/bash
port=4000
npm run serve -- -p $port &
wait-on http://localhost:$port
server_pid=$!
npx cypress run --config baseUrl=http://localhost:$port
test_exit_code=$?
kill $server_pid
exit $test_exit_code
