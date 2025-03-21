// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    console.log('EatCoins游戏网站已加载');
    
    // 获取游戏容器
    const gameFrame = document.getElementById('game-frame');
    const gameIframe = document.getElementById('game');
    
    if (gameIframe) {
        gameIframe.onload = function() {
            console.log('游戏已加载完成');
        };
        
        gameIframe.onerror = function() {
            console.error('游戏加载失败');
            gameFrame.innerHTML = '<div class="error-message">游戏加载失败，请稍后再试</div>';
        };
    }

    // GitHub游戏加载功能
    const loadMarioBtn = document.getElementById('load-mario');
    const load2048Btn = document.getElementById('load-2048');
    const loadSnakeBtn = document.getElementById('load-snake');
    const loadTetrisBtn = document.getElementById('load-tetris');

    // 加载马里奥游戏
    if (loadMarioBtn) {
        loadMarioBtn.addEventListener('click', function() {
            loadGitHubGame('mario');
        });
    }

    // 加载2048游戏
    if (load2048Btn) {
        load2048Btn.addEventListener('click', function() {
            loadGitHubGame('2048');
        });
    }

    // 加载贪吃蛇游戏
    if (loadSnakeBtn) {
        loadSnakeBtn.addEventListener('click', function() {
            loadGitHubGame('snake');
        });
    }

    // 加载俄罗斯方块游戏
    if (loadTetrisBtn) {
        loadTetrisBtn.addEventListener('click', function() {
            loadGitHubGame('tetris');
        });
    }

    // 加载GitHub游戏的函数
    function loadGitHubGame(gameName) {
        // 显示加载提示
        gameFrame.innerHTML = '<div class="loading-message">正在加载' + gameName + '游戏，请稍候...</div>';
        
        // 设置游戏iframe的源
        setTimeout(function() {
            if (gameIframe) {
                // 根据游戏名称设置不同的游戏URL
                switch(gameName) {
                    case 'mario':
                        // 马里奥游戏
                        gameIframe.src = "games/mario/index.html";
                        break;
                    case '2048':
                        // 2048游戏GitHub页面
                        gameIframe.src = "https://play2048.co/";
                        break;
                    case 'snake':
                        // 贪吃蛇游戏GitHub页面
                        gameIframe.src = "https://playsnake.org/";
                        break;
                    case 'tetris':
                        // 俄罗斯方块GitHub页面
                        gameIframe.src = "https://tetris.com/play-tetris";
                        break;
                    default:
                        // 默认回到本地游戏
                        gameIframe.src = "game/index.html";
                }
            }
            
            // 更新游戏说明
            updateGameInstructions(gameName);
        }, 500);
    }

    // 更新游戏说明的函数
    function updateGameInstructions(gameName) {
        const instructionsDiv = document.querySelector('.instructions p');
        
        if (instructionsDiv) {
            switch(gameName) {
                case 'mario':
                    instructionsDiv.textContent = '使用方向键控制马里奥移动，收集金币获得分数！注意避开障碍物。';
                    break;
                case '2048':
                    instructionsDiv.textContent = '使用方向键移动数字，相同数字相撞会合并。目标是得到2048数字方块！';
                    break;
                case 'snake':
                    instructionsDiv.textContent = '使用方向键控制蛇的移动，吃到食物蛇身会变长。注意不要撞到墙或自己的身体！';
                    break;
                case 'tetris':
                    instructionsDiv.textContent = '使用方向键移动和旋转方块，完成一整行方块会消除得分。尽量不要让方块堆到顶部！';
                    break;
                default:
                    instructionsDiv.textContent = '收集金币，获得高分！使用方向键或WASD控制角色。';
            }
        }
    }
}); 