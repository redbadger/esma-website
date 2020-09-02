#!/bin/bash
port=3000
npm run serve -- -p $port &
npx wait-on http://localhost:$port
server_pid=$!
npx pa11y-ci
test_exit_code=$?
kill $server_pid
exit $test_exit_code
