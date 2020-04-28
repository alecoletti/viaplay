Project = "Viaplay test"

clean : ;
	rm -rf node_modules

install : ;
	npm install ;
	for d in ./src/*/ ; do (cd $$d && npm install); done


deploy : ;
	serverless deploy

test: ;
	npx jest --coverage --detectOpenHandles

.PHONY: test install clean deploy test

