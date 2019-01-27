'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const a = await this.app.mysql.get('think_config', { id: 1 });
    console.log(a);
    const type = { title: '这是第一个选择题', type: 1, list: '[1,2,3,4]' };
    const res = await this.insert('question', type);
    console.log(res);
    /* const result = await session.run('create(q:question{title:"这是第一个选择题",type:1, list: "[1,2,3,4]"})');
    console.log(result.records.map(item => item.get('user').properties)); */
    this.ctx.body = 'hi, egg';
  }

  async insert(typeName, value) {
    console.log(111);
    let str = JSON.stringify(value);
    str = str.replace(/"([^"]*)":/g, '$1:');
    const session = this.ctx.app.neo4j.session();
    const sql = `create(n:${typeName}${str})`;
    console.log(sql);
    return session.run(sql);
  }
}

module.exports = HomeController;
