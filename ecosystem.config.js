module.exports = {
  apps: [{
    name: "devops-app",
    script: "server.js",
    instances: 1,
    exec_mode: "fork",
    autorestart: true,
    watch: false,
    max_memory_restart: "300M"
  }]
};
