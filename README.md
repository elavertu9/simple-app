# MiniKube Test Project

docker build -t simple-server .
docker tag simple-server evanlavertu/simple-server
docker push evanlavertu/simple-server

kubectl describe pods
kubectl describe pod simple-client
kubectl exec -it simple-client
kubectl exec -it simple-client -- /bin/bash
kubectl create -f ./simple_client.yaml
kubectl get pods
kubectl port-forward simple-client 3000:3000
kubectl delete pod simple-client
kubectl delete pod simple-server

### Start MiniKube

minikube start --driver=docker

Delete Pod -> kubectl delete pod <pod-name>
