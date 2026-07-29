// ====== HTML TEMPLATE ======
const HTML = `
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Live Follower - Azriel.py</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Segoe UI', system-ui, sans-serif;
            background: linear-gradient(145deg, #0a0a0f, #1a1a2e, #16213e);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
            color: #ffffff;
        }
        .container {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(20px);
            padding: 40px 45px;
            border-radius: 32px;
            border: 1px solid rgba(255, 255, 255, 0.06);
            max-width: 500px;
            width: 100%;
            box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6);
        }
        .header { text-align: center; margin-bottom: 30px; }
        .header h1 {
            font-size: 26px;
            font-weight: 700;
            background: linear-gradient(135deg, #ff0050, #ff6b6b);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .subtitle {
            font-size: 13px;
            color: rgba(255, 255, 255, 0.3);
            letter-spacing: 4px;
            text-transform: uppercase;
        }
        .profile-section { text-align: center; margin-bottom: 25px; }
        .avatar-container { position: relative; display: inline-block; margin-bottom: 12px; }
        .avatar {
            width: 90px; height: 90px;
            border-radius: 50%;
            border: 3px solid rgba(255, 255, 255, 0.1);
            object-fit: cover;
            background: #2a2a3e;
            transition: border-color 0.3s;
        }
        .avatar:hover { border-color: #ff0050; }
        .verified {
            position: absolute; bottom: 2px; right: 2px;
            background: #20d5ec; color: #fff;
            width: 24px; height: 24px;
            border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            font-size: 14px; font-weight: bold;
            border: 2px solid #1a1a2e;
        }
        .profile-section h2 { font-size: 22px; font-weight: 600; margin-bottom: 2px; }
        .username {
            color: rgba(255, 255, 255, 0.4);
            font-size: 14px;
            margin-bottom: 6px;
        }
        .bio {
            color: rgba(255, 255, 255, 0.6);
            font-size: 14px;
            line-height: 1.5;
            max-width: 80%;
            margin: 0 auto;
            min-height: 20px;
        }
        .counter {
            text-align: center;
            padding: 25px 0 15px;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            margin-bottom: 20px;
        }
        .count {
            font-size: 72px;
            font-weight: 800;
            background: linear-gradient(135deg, #ff0050, #ff6b6b);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1.1;
        }
        .label {
            font-size: 12px;
            letter-spacing: 3px;
            color: rgba(255, 255, 255, 0.25);
            margin-top: 2px;
        }
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            margin-bottom: 20px;
        }
        .stat {
            text-align: center;
            padding: 12px 0;
            background: rgba(255, 255, 255, 0.03);
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.04);
        }
        .stat-value { display: block; font-size: 20px; font-weight: 600; color: #fff; }
        .stat-label {
            font-size: 11px;
            color: rgba(255, 255, 255, 0.3);
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .status {
            display: flex;
            justify-content: space-between;
            padding: 0 5px;
            font-size: 13px;
            color: rgba(255, 255, 255, 0.4);
            margin-bottom: 20px;
        }
        #statusText { color: #4ade80; font-weight: 500; }
        #updateTime { color: rgba(255, 255, 255, 0.3); }
        .divider { border: none; border-top: 1px solid rgba(255, 255, 255, 0.06); margin: 20px 0; }
        .links { display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px; }
        .link-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 10px 16px;
            background: rgba(255, 255, 255, 0.03);
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.04);
            transition: all 0.3s ease;
        }
        .link-item:hover {
            background: rgba(255, 255, 255, 0.06);
            border-color: rgba(255, 255, 255, 0.08);
            transform: translateY(-1px);
        }
        .link-label { font-size: 18px; flex-shrink: 0; }
        .link-item a {
            color: rgba(255, 255, 255, 0.7);
            text-decoration: none;
            font-size: 14px;
            word-break: break-all;
            transition: color 0.3s;
        }
        .link-item a:hover { color: #ff6b6b; }
        .footer { text-align: center; margin-top: 5px; }
        .footer p { font-size: 13px; color: rgba(255, 255, 255, 0.2); }
        .footer .copyright {
            font-size: 11px;
            margin-top: 4px;
            color: rgba(255, 255, 255, 0.1);
        }
        @media (max-width: 500px) {
            .container { padding: 25px 20px; border-radius: 24px; }
            .count { font-size: 52px; }
            .avatar { width: 70px; height: 70px; }
            .stats-grid { gap: 6px; }
            .stat-value { font-size: 16px; }
            .link-item a { font-size: 12px; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📊 Live Follower</h1>
            <p class="subtitle">TikTok</p>
        </div>
        
        <div class="profile-section">
            <div class="avatar-container">
                <img id="avatar" src="" alt="Profile" class="avatar">
                <span class="verified" id="verified" style="display:none">✓</span>
            </div>
            <h2 id="nickname">Azriel.py</h2>
            <p class="username">@azriel.py</p>
            <p class="bio" id="bio">Loading...</p>
        </div>
        
        <div class="counter">
            <div class="count" id="followerCount">0</div>
            <div class="label">FOLLOWERS</div>
        </div>
        
        <div class="stats-grid">
            <div class="stat">
                <span class="stat-value" id="following">-</span>
                <span class="stat-label">Following</span>
            </div>
            <div class="stat">
                <span class="stat-value" id="likes">-</span>
                <span class="stat-label">Likes</span>
            </div>
            <div class="stat">
                <span class="stat-value" id="videos">-</span>
                <span class="stat-label">Videos</span>
            </div>
        </div>
        
        <div class="status">
            <span id="statusText">🟢 Live</span>
            <span id="updateTime">Update: -</span>
        </div>
        
        <hr class="divider">
        
        <div class="links">
            <div class="link-item">
                <span class="link-label">🌐</span>
                <a href="https://axion-neuralis.pages.dev/" target="_blank">axion-neuralis.pages.dev</a>
            </div>
            <div class="link-item">
                <span class="link-label">🚀</span>
                <a href="https://azriel-space.pages.dev/" target="_blank">azriel-space.pages.dev</a>
            </div>
            <div class="link-item">
                <span class="link-label">📱</span>
                <a href="https://vm.tiktok.com/ZS9h1CJq2UuVE-R4juq/" target="_blank">@azriel.py</a>
            </div>
        </div>
        
        <div class="footer">
            <p>📧 azrielspace852@gmail.com</p>
            <p class="copyright">© 2026 Azriel.py</p>
        </div>
    </div>
    
    <script>
        const username = 'azriel.py';
        let updateInterval = null;
        
        const avatar = document.getElementById('avatar');
        const nickname = document.getElementById('nickname');
        const bio = document.getElementById('bio');
        const verified = document.getElementById('verified');
        const followerCount = document.getElementById('followerCount');
        const following = document.getElementById('following');
        const likes = document.getElementById('likes');
        const videos = document.getElementById('videos');
        const statusText = document.getElementById('statusText');
        const updateTime = document.getElementById('updateTime');
        
        document.addEventListener('DOMContentLoaded', () => {
            fetchProfile();
            setInterval(fetchProfile, 10000);
        });
        
        async function fetchProfile() {
            try {
                const res = await fetch('/api/profile');
                const data = await res.json();
                
                if (data.success) {
                    const profile = data.profile;
                    avatar.src = profile.avatar || '';
                    nickname.textContent = profile.nickname || 'Azriel.py';
                    bio.textContent = profile.bio || '✨';
                    verified.style.display = profile.verified ? 'flex' : 'none';
                    followerCount.textContent = profile.followers.toLocaleString();
                    following.textContent = profile.following.toLocaleString();
                    likes.textContent = profile.likes.toLocaleString();
                    videos.textContent = profile.videos.toLocaleString();
                    statusText.textContent = '🟢 Live';
                    statusText.style.color = '#4ade80';
                    updateTime.textContent = 'Update: ' + new Date().toLocaleTimeString('id-ID');
                } else {
                    statusText.textContent = '🔴 Error';
                    statusText.style.color = '#ef4444';
                }
            } catch (error) {
                statusText.textContent = '🔴 Error';
                statusText.style.color = '#ef4444';
            }
        }
    </script>
</body>
</html>
`;

// ====== SCRAPER FUNCTION ======
async function getTikTokProfile(username) {
    const url = `https://www.tiktok.com/@${username}`;
    
    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                'Accept-Language': 'id-ID,id;q=0.9,en;q=0.8',
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache'
            }
        });
        
        const html = await response.text();
        
        // Ambil data dari JSON
        const jsonMatch = html.match(/<script[^>]*id="__UNIVERSAL_DATA_FOR_REHYDRATION__"[^>]*>(.*?)<\/script>/);
        if (jsonMatch) {
            const data = JSON.parse(jsonMatch[1]);
            const userData = data['__DEFAULT_SCOPE__']['webapp.user-detail']['userInfo'];
            const stats = userData.stats || {};
            const user = userData.user || {};
            
            return {
                username: user.uniqueId || username,
                nickname: user.nickname || '',
                avatar: user.avatarLarger || user.avatarMedium || user.avatarThumb || '',
                followers: stats.followerCount || 0,
                following: stats.followingCount || 0,
                likes: stats.heartCount || 0,
                videos: stats.videoCount || 0,
                bio: user.signature || '',
                verified: user.verified || false
            };
        }
        
        // Fallback: cari pake regex
        const followerMatch = html.match(/"followerCount":(\d+)/);
        const nicknameMatch = html.match(/"nickname":"([^"]+)"/);
        const avatarMatch = html.match(/"avatarLarger":"([^"]+)"/);
        
        return {
            username: username,
            nickname: nicknameMatch ? nicknameMatch[1] : username,
            avatar: avatarMatch ? avatarMatch[1] : '',
            followers: followerMatch ? parseInt(followerMatch[1]) : 0,
            following: 0,
            likes: 0,
            videos: 0,
            bio: '',
            verified: false
        };
        
    } catch (error) {
        throw new Error(`Scraping error: ${error.message}`);
    }
}

// ====== WORKER HANDLER ======
export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        
        // API endpoint
        if (url.pathname === '/api/profile') {
            try {
                const username = env.TIKTOK_USERNAME || 'azriel.py';
                const profile = await getTikTokProfile(username);
                
                return new Response(JSON.stringify({
                    success: true,
                    profile: profile
                }), {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                });
            } catch (error) {
                return new Response(JSON.stringify({
                    success: false,
                    error: error.message
                }), {
                    status: 500,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                });
            }
        }
        
        // Root path: return HTML
        if (url.pathname === '/') {
            return new Response(HTML, {
                headers: {
                    'Content-Type': 'text/html; charset=utf-8'
                }
            });
        }
        
        // 404
        return new Response('Not Found', { status: 404 });
    }
}; 
