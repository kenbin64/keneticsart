# 🛠 Base image: lightweight, secure, and dev-friendly
FROM ubuntu:22.04

# 📦 Environment setup
ENV DEBIAN_FRONTEND=noninteractive \
    LANG=en_US.UTF-8 \
    LC_ALL=en_US.UTF-8

# 🔐 System update and essential packages
RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y \
    curl wget git unzip gnupg2 ca-certificates \
    build-essential software-properties-common \
    locales sudo openssh-client \
    python3 python3-pip python3-venv \
    openjdk-17-jdk \
    && locale-gen en_US.UTF-8

# 🧰 Jenkins CLI setup
RUN curl -o /usr/local/bin/jenkins-cli.jar \
    https://repo.jenkins-ci.org/public/org/jenkins-ci/cli/jenkins-cli/2.440/jenkins-cli-2.440.jar && \
    chmod +x /usr/local/bin/jenkins-cli.jar

# 🧠 VS Code server compatibility (for remote dev)
RUN curl -fsSL https://code-server.dev/install.sh | sh

# 🧩 Symbolic authorship tools (e.g., Inkscape, ImageMagick)
RUN apt-get install -y \
    inkscape imagemagick fonts-dejavu fonts-liberation

# 🔐 Create non-root dev user with sudo
RUN useradd -ms /bin/bash devuser && \
    echo "devuser ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

USER devuser
WORKDIR /home/devuser

# 🧱 Docker CLI (for container orchestration inside container, if needed)
RUN curl -fsSL https://get.docker.com -o get-docker.sh && \
    sudo sh get-docker.sh

# 🧬 Git config and symbolic repo clone (optional)
RUN git config --global user.name "Kenneth Wayne Bingham" && \
    git config --global user.email "ken.bingham64@gmail.com" && \
    git clone https://github.com/kenbin64/keneticsart.git ~/keneticsart

# 🔭 Expose ports for Jenkins, VS Code, and custom services
EXPOSE 8080 3000 5000

# 🧹 Clean up
RUN sudo apt-get clean && sudo rm -rf /var/lib/apt/lists/*

# 🧞‍♂️ Entrypoint (can be overridden)
CMD ["/bin/bash"]