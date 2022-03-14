# simple-app minikube POC

## simple-server
##### Environment Setup
1. From the simple-server directory run the following:
   1. ```python -m venv venv```
   2. ```. venv/bin/activate```
   3. ```pip install -r requirements.txt```

##### Create Docker Image Using Docker File
1. From the simple-server directory run the following:
   1. ```docker build -t simple-server .```
   2. Either push image to your repository on docker hub or point the docker CLI to the docker daemon inside minikube
   3. Point docker CLI to docker daemon inside minikube
      1. Run ```eval $(minikube docker-env)```
      2. Rebuild image ```docker build -t simple-server .```
   4. Push image to your docker hub repository
      1. Create the image ```docker build -t simple-server .```
      2. Tag the image ```docker tag simple-server <dockerhub-username>/simple-server```
      3. Push the image ```docker push <dockerhub-username>/simple-server```
      4. Update simple_server.yaml image to be ```image: <dockerhub-username>/simple_server:latest```

##### Create K8s Pod in Minikube
1. From the simple-server directory run the following:
   1. Run ```kubectl create -f ./simple_server.yaml```

##### Connect to Pod
1. ```kubectl exec -it simple-server -- /bin/bash```
2. Check it is working ```curl http://127.0.0.1:5000/```
3. To connect on your local computer you must forward the port ```kubectl port-forward simple-server 5000:5000```

## simple-client
##### Create Docker Image Using Docker File
1. From the simple-client directory run the following:
   1. ```docker build -t simple-client .```
   2. Either push image to your repository on docker hub or point the docker CLI to the docker daemon inside minikube
   3. Point docker CLI to docker daemon inside minikube
      1. Run ```eval $(minikube docker-env)```
      2. Rebuild image ```docker build -t simple-client .```
   4. Push image to your docker hub repository
      1. Create the image ```docker build -t simple-client .```
      2. Tag the image ```docker tag simple-client <dockerhub-username>/simple-client```
      3. Push the image ```docker push <dockerhub-username>/simple-client```
      4. Update simple_client.yaml image to be ```image: <dockerhub-username>/simple-client:latest```

##### Create K8s Pod in Minikube
1. From the simple-client directory run the following:
   1. Run ```kubectl create -f ./simple_client.yaml```

##### Connect to Pod
1. ```kubectl exec -it simple-client -- /bin/bash```
2. Check it is working ```curl http://127.0.0.1:3000/```
3. To connect on your local computer you must forward the port ```kubectl port-forward simple-client 3000:3000```