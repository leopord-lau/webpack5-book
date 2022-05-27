console.log('自动编译');

const div = document.createElement('div');
div.innerText = '自动添加';
document.body.appendChild(div);

const div2 = document.createElement('div');
div2.innerText = '体验热更新';
document.body.appendChild(div2);
document.getElementsByTagName('div')[1].innerText = 'change'