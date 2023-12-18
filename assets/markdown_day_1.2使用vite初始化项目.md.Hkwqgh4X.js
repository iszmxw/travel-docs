import{_ as s,c as i,o as a,R as e}from"./chunks/framework.QolcQN64.js";const g=JSON.parse('{"title":"安装 vite 初始化项目","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/day/1.2使用vite初始化项目.md","filePath":"markdown/day/1.2使用vite初始化项目.md","lastUpdated":1702909200000}'),t={name:"markdown/day/1.2使用vite初始化项目.md"},n=e(`<h1 id="安装-vite-初始化项目" tabindex="-1">安装 <code>vite</code> 初始化项目 <a class="header-anchor" href="#安装-vite-初始化项目" aria-label="Permalink to &quot;安装 \`vite\` 初始化项目&quot;">​</a></h1><h2 id="进入官网" tabindex="-1">进入官网 <a class="header-anchor" href="#进入官网" aria-label="Permalink to &quot;进入官网&quot;">​</a></h2><ul><li><a href="https://cn.vitejs.dev/" target="_blank" rel="noreferrer">https://cn.vitejs.dev/</a></li></ul><h2 id="初始化项目" tabindex="-1">初始化项目 <a class="header-anchor" href="#初始化项目" aria-label="Permalink to &quot;初始化项目&quot;">​</a></h2><ul><li>方法一</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># npm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vite</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># pnpm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vite</span></span></code></pre></div><p>然后按照提示操作即可！</p><ul><li>方法二</li></ul><p>你还可以通过附加的命令行选项直接指定项目名称和你想要使用的模板。例如，要构建一个 Vite + Vue 项目，运行:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># npm 7+, extra double-dash is needed:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vite@latest</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my-vue-app</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --template</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vue</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># pnpm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vite</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my-vue-app</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --template</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vue</span></span></code></pre></div><p>我这里的项目名称为 <code>travel-project</code></p><p>当项目初始化完成后，进入到项目目录使用 <code>vscode</code> 编辑器打开即可</p><p>然后安装 <code>npm</code> 依赖，启动项目并预览</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装依赖</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启动项目</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span></code></pre></div><p>最后浏览器打开 <code>localhost:5173</code> 即可访问项目</p>`,15),l=[n];function p(h,k,d,r,c,o){return a(),i("div",null,l)}const v=s(t,[["render",p]]);export{g as __pageData,v as default};
