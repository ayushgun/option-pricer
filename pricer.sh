#!/bin/bash

if [ "$1" = "start" ]; then
  if screen -list | grep -q "options-pricer-api"; then
    screen -S options-pricer-api -X quit
    echo "Existing 'options-pricer-api' session killed."
  fi

  if screen -list | grep -q "options-pricer-frontend"; then
    screen -S options-pricer-frontend -X quit
    echo "Existing 'options-pricer-frontend' session killed."
  fi

  screen -dmS options-pricer-api bash -c 'cd api; cargo run'
  screen -dmS options-pricer-frontend bash -c 'cd frontend; npm start'
  echo "Started new 'options-pricer-api' and 'options-pricer-frontend' sessions."
  
elif [ "$1" = "kill" ]; then
  if screen -list | grep -q "options-pricer-api"; then
    screen -S options-pricer-api -X quit
    echo "'options-pricer-api' session killed."
  else
    echo "'options-pricer-api' session not found."
  fi

  if screen -list | grep -q "options-pricer-frontend"; then
    screen -S options-pricer-frontend -X quit
    echo "'options-pricer-frontend' session killed."
  else
    echo "'options-pricer-frontend' session not found."
  fi
else
  echo "Invalid argument. Use 'start' to start the sessions, or 'kill' to kill them."
fi
