const path = require('path');
const shell = require('shelljs')


// 安装依赖
if (shell.exec('npm i').code !== 0) {
    shell.echo('Error: npm i failed');
    shell.exit(1);
}

// lint


// 测试
if (shell.exec('npm run tests').code !== 0) {
    shell.echo('Error: npm run tests failed');
    shell.exit(1);
}

// 构建
if (shell.exec('npm run build').code !== 0) {
    shell.echo('Error: npm run build failed');
    shell.exit(1);
}


// 部署
if (shell.exec(`scp ${path.join(__dirname, '../dist/*')} root@39.102.77.26:/root/six`).code !== 0) {
    shell.echo('Error: scp failed');
    shell.exit(1);
}



