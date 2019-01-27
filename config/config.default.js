'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1548301522109_7659';

  // add your config here
  config.middleware = [];


  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'rm-uf6005o2e00ddu0cgo.mysql.rds.aliyuncs.com',
      // 端口号
      port: '3306',
      // 用户名
      user: 'ylroot',
      // 密码
      password: 'Yalan2013',
      // 数据库名
      database: 'yl',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  config.neo4j = {
    client: {
      url: 'bolt://127.0.0.1',
      username: 'neo4j',
      password: 'admin',
    },
  };

  return config;
};
