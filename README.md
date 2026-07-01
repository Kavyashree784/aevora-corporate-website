# 🚀 Aevora Technologies - Corporate Website with Complete DevOps CI/CD Pipeline

![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-8-purple)
![Docker](https://img.shields.io/badge/Docker-Container-blue)
![Jenkins](https://img.shields.io/badge/Jenkins-CI/CD-red)
![Kubernetes](https://img.shields.io/badge/Kubernetes-Orchestration-326CE5)
![Nginx](https://img.shields.io/badge/Nginx-Web%20Server-green)

---

# 📌 Project Overview

Aevora Technologies is a responsive corporate website developed using **React** and **Vite**. The project demonstrates a complete **DevOps CI/CD workflow**, starting from source code management on GitHub to automated deployment using Jenkins, Docker, and Kubernetes.

The objective of this project is not only to build a responsive frontend application but also to showcase a production-like Continuous Integration and Continuous Deployment (CI/CD) pipeline.

---

# 🎯 Project Objectives

- Develop a responsive corporate website
- Automate application build process
- Containerize the application using Docker
- Deploy using Jenkins CI/CD Pipeline
- Orchestrate containers using Kubernetes
- Demonstrate an end-to-end DevOps workflow

---

# 🏗️ Project Architecture

```
                    GitHub Repository
                           │
                           ▼
                      Jenkins Pipeline
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
        ▼                  ▼                  ▼
Checkout Code      Install Dependencies   Build React App
        │
        ▼
Docker Image Creation
        │
        ▼
Docker Container Deployment
        │
        ▼
Kubernetes Deployment
        │
        ▼
ReplicaSet
        │
        ▼
Running Pods
        │
        ▼
NodePort Service
        │
        ▼
Application Access
```

---

# 🛠 Tech Stack

## Frontend

- React
- Vite
- HTML5
- CSS3
- JavaScript

---

## DevOps Tools

- Git
- GitHub
- Jenkins
- Docker
- Docker Desktop
- Kubernetes (Minikube)
- kubectl
- Nginx

---

# 📂 Project Structure

```
aevora-corporate-website
│
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   └── assets/
│
├── Dockerfile
├── Jenkinsfile
├── nginx.conf
├── package.json
├── vite.config.js
└── README.md
```

---

# ⚙️ CI/CD Pipeline

The project uses Jenkins Pipeline to automate the complete deployment process.

## Pipeline Stages

### 1. Checkout Repository

Fetches the latest source code from GitHub.

```
GitHub
      ↓
Jenkins Checkout
```

---

### 2. Install Dependencies

```
npm install
```

Installs all required npm packages.

---

### 3. Build React Application

```
npm run build
```

Generates an optimized production build inside the `dist` folder.

---

### 4. Build Docker Image

```
docker build -t aevora-app .
```

Creates a Docker image containing:

- React Production Build
- Nginx Server

---

### 5. Deploy Docker Container

The pipeline automatically:

- Stops existing container (if any)
- Removes old container
- Starts a new container

```
docker stop aevora-container

docker rm aevora-container

docker run -d -p 8081:80 --name aevora-container aevora-app
```

---

# 🐳 Docker

The project uses a **Multi-stage Docker Build**.

## Stage 1

Uses Node.js image

- Install packages
- Build React application

## Stage 2

Uses lightweight Nginx image

- Copies production build
- Serves application

Benefits:

- Smaller image size
- Faster deployment
- Better security
- Production ready

---

# 🌐 Nginx Configuration

Nginx is used as the web server.

Responsibilities:

- Serve React production build
- Route all requests to index.html
- Support React Router
- Handle SPA routing

---

# ☸ Kubernetes Deployment

After Docker deployment, the application is deployed to Kubernetes.

Resources Created

- Deployment
- ReplicaSet
- Pods
- Service

Deployment ensures:

- High Availability
- Auto Recovery
- Easy Scaling
- Container Orchestration

---

# Kubernetes Components

## Deployment

Manages application deployment and updates.

Example

```
aevora-deployment
```

---

## ReplicaSet

Maintains the desired number of running pods.

---

## Pods

Application instances running inside Kubernetes.

Example

```
2 Running Pods
```

---

## Service

Exposes the application using NodePort.

Example

```
aevora-service
```

---

# Jenkins Pipeline Workflow

```
Checkout Repository
        │
        ▼
Install Dependencies
        │
        ▼
React Build
        │
        ▼
Docker Build
        │
        ▼
Stop Existing Container
        │
        ▼
Remove Existing Container
        │
        ▼
Run New Container
        │
        ▼
Deployment Successful
```

---

# Docker Workflow

```
Source Code

      │

Docker Build

      │

Docker Image

      │

Docker Container

      │

Running Application
```

---

# Kubernetes Workflow

```
Docker Image

      │

Deployment

      │

ReplicaSet

      │

Pods

      │

Service

      │

Browser
```

---

# 🚀 Running the Project

## Clone Repository

```
git clone https://github.com/Kavyashree784/aevora-corporate-website.git

cd aevora-corporate-website
```

---

## Install Dependencies

```
npm install
```

---

## Run Development Server

```
npm run dev
```

---

## Build Production

```
npm run build
```

---

# Docker Commands

Build Image

```
docker build -t aevora-app .
```

Run Container

```
docker run -d -p 8081:80 --name aevora-container aevora-app
```

List Containers

```
docker ps
```

Stop Container

```
docker stop aevora-container
```

Remove Container

```
docker rm aevora-container
```

---

# Kubernetes Commands

View Deployments

```
kubectl get deployments
```

View Pods

```
kubectl get pods
```

View Services

```
kubectl get svc
```

View All Resources

```
kubectl get all
```

---

# Jenkins Pipeline Output

The pipeline automatically performs:

- Repository Checkout
- Dependency Installation
- Production Build
- Docker Image Creation
- Container Deployment
- Success Verification

---

# Features

- Responsive UI
- Modern React Architecture
- Automated CI/CD Pipeline
- Dockerized Deployment
- Kubernetes Orchestration
- Production Build using Vite
- Nginx Web Server
- Automated Container Replacement
- End-to-End DevOps Workflow

---

# Future Enhancements

- GitHub Webhooks
- Docker Hub Integration
- Automatic Image Versioning
- Helm Charts
- Monitoring with Prometheus
- Grafana Dashboard
- Kubernetes Ingress
- HTTPS Support
- GitHub Actions Integration
- ArgoCD Continuous Deployment

---

# Learning Outcomes

This project demonstrates practical knowledge of:

- Git & GitHub
- React Application Development
- Docker Containerization
- Jenkins Automation
- CI/CD Pipelines
- Kubernetes Deployments
- Container Orchestration
- Nginx Configuration
- Production Deployment
- DevOps Best Practices

---

# Author

**Kavyashree K**

M.Tech Integrated Software Engineering  
VIT Vellore

GitHub:

https://github.com/Kavyashree784

LinkedIn:

https://www.linkedin.com/in/kavyashree-k-482a63258

---

# License

This project is created for educational purposes as part of a DevOps learning assignment.
