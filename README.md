# DGO Admin - Dental Office Management Tool

![Dental Office Admin](https://img.shields.io/badge/status-active-brightgreen)
![Node.js 20](https://img.shields.io/badge/Node.js-20-green)
![pnpm](https://img.shields.io/badge/pnpm-8.x-orange)

A modern **web-based administration tool** designed to streamline data management for dental offices. Manage patient records, appointments, treatments, and billing efficiently with an intuitive interface.

---

## ✨ Key Features
- **Patient Management**: Track patient histories, contact details, and treatment plans.
- **Appointment Scheduling**: Calendar integration for seamless booking.
- **Treatment Tracking**: Log procedures, medications, and follow-ups.
- **Billing & Invoicing**: Generate invoices and process payments.
- **Reporting**: Export data for analytics (e.g., monthly revenue, patient visits).
- **Secure Access**: Role-based permissions for staff (dentists, assistants, admins).

---

## 🚀 Quick Start

### Prerequisites
- **Node.js 20** ([Download](https://nodejs.org/))
- **pnpm** (faster alternative to npm)

### Setup

### 1. Install Node.js 20
Download and install the LTS version from:
[https://nodejs.org/](https://nodejs.org/)

Verify installation:
```bash
node -v  # Should show v20.x.x
npm -v    # Should show 9.x.x or later
```

### 2. Install pnpm
```bash
npm install -g pnpm
```

Verify:
```bash
pnpm --version  # Should show 8.x.x or later
```

### 3. Clone the Project (if needed)
```bash
git clone https://github.com/alejandrogonzalz/dgo-admin.git
cd dgo-admin
```

### 4. Install dependencies
```bash
pnpm install
```

### 5. Run the Development Server
```bash
pnpm dev
```

# Docker Setup

## Prerequisites
- Docker must be installed on your system to build and run this application in a container.

## Installing Docker

### Windows/macOS
1. Download Docker Desktop:
	- [Download for Windows](https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe)
	- [Download for macOS (Intel)](https://desktop.docker.com/mac/main/amd64/Docker.dmg)
	- [Download for macOS (Apple Silicon)](https://desktop.docker.com/mac/main/arm64/Docker.dmg)

2. Run the installer and follow the setup wizard

3. Launch Docker Desktop after installation

### Linux (Ubuntu/Debian)
```bash
# Uninstall old versions
sudo apt-get remove docker docker-engine docker.io containerd runc

# Set up repository
sudo apt-get update
sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

# Add Docker's official GPG key
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

# Set up stable repository
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker Engine
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin

# Verify installation
sudo docker run hello-world
```

### Building and Running the Application
To run the application with docker first you should:

#### 1. Build the Docker image:

```bash
docker build -t dgo-admin .
```

#### 2. And then run the container
```bash
docker run -p 3000:3000 dgo-admin
```
