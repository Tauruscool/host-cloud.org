const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// 提供静态文件
app.use(express.static(path.join(__dirname, 'public')));

// 主页路由
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 启动服务器
app.listen(port, () => {
  console.log(`服务器已启动，访问 http://localhost:${port}`);
}); 