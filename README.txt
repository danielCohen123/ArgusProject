
Example of running:
	1.	First run: curl -X POST -H "Content-Type: application/json" -d '{"something": "blabla"}' http://3.120.140.88:80/api/resource
	2.	And then run: curl http://52.29.47.55:80/api/resource
	3.	Will print: {"something": “blabla"}

Docker example run command:
	1)	docker build -t getserver .  : create docker image, -t Docker image’s name
	2)	docker run -p 80:80 getserver : run gerserver, -p mapping machine's port 80 to container’s port 80 (localhost). 



Decisions I made:
Why I chose javascript?
I am familiar with it and it’s easy to build quick and efficient HTTP server. Also, the Node JS community is active and supportive, and its easy to find answers and references on the web. Why I used fetch?
I am familiar with the notion of asynchronous fetch and I learned about it in IDC Herzliya.