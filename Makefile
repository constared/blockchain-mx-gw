-include .env
export $(shell sed 's/=.*//' .env)


nodejsContainerName=dfmx-template-nodejs
postgresContainerName=atomyze-backend-tenplate-postgres

.PHONY: help

## Displays available commands
help:
	@echo "$$(tput bold)Available rules:$$(tput sgr0)";echo;sed -ne"/^## /{h;s/.*//;:d" -e"H;n;s/^## //;td" -e"s/:.*//;G;s/\\n## /---/;s/\\n/ /g;p;}" ${MAKEFILE_LIST}|LC_ALL='C' sort -f|awk -F --- -v n=$$(tput cols) -v i=19 -v a="$$(tput setaf 6)" -v z="$$(tput sgr0)" '{printf"%s%*s%s ",a,-i,$$1,z;m=split($$2,w," ");l=n-i;for(j=1;j<=m;j++){l-=length(w[j])+1;if(l<= 0){l=n-i-length(w[j])-1;printf"\n%*s ",-i," ";}printf"%s ",w[j];}printf"\n";}'|more $(shell test $(shell uname) == Darwin && echo '-Xr')
## App initialize
init: network-create deps-install
## Installs project dependencies
deps-install:
	docker-compose run ${nodejsContainerName} sh -c "npm install"
## Creates docker network if not exists
network-create:
	docker network create dfmx-network || true
## Alias for "docker-compose up"
up:
	docker-compose up