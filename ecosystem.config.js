module.exports = {
  apps: [{
    name: 'tutorial-2',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-54-147-217-45.compute-1.amazonaws.com',
      key: '~/.ssh/ian.pem',
      ref: 'origin/master',
      repo: 'https://github.com/ianff/examplenode.git',
      path: '/home/ubuntu/node-example',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
