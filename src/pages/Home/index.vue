<template>
  <div style="height: 100%">
    <!-- ==== 预加载动画 Start ==== -->
    <div id="preloader">
        <div class="pre-container">
            <div class="spinner">
                <div class="double-bounce1"></div>
                <div class="double-bounce2"></div>
            </div>
        </div>
    </div>
    <!-- ==== 预加载动画 End ==== -->
    
    <!-- ==== 导航 Start ==== -->
    <nav>
      <div class="row">
          <div class="container">
              <div class="logo">
                  <h1>Joseph</h1>
              </div>
              <div class="mobile-bar"><span></span></div>
              <ul class="nav-menu">
                  <li><a href="#home">首页</a></li>
                  <li><a href="#about">关于我</a></li>
                  <li><a href="#portfolio">作品</a></li>
                  <li><a href="#blog">博客</a></li>
                  <li><a href="#contact">留言板</a></li>
              </ul>
          </div>
      </div>
    </nav>
      <!-- ==== 导航 End ==== -->


    <!-- ==== 名称介绍 Start ==== -->
    <section class="intro-section" id="home" :style="{'backgroundImage': `url(${bg})`}">
      <div class="intro-content">
        <h1>Joseph 怪咖</h1>
      </div>
      <a href="#about" class="down">
        <i class="fa fa-angle-down"></i>
      </a>
    </section>
    <!-- ==== 名称介绍  End ==== -->


    <!-- ==== 关于我 Start ==== -->
    <section class="about-section spad" id="about">
      <div class="container">
        <div class="col-md-6 col-sm-12 about-image">
          <img src="static/images/1.jpg" class="img-responsive" alt="">
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="about-text">
            <h3>关于我.</h3>
            <p>我是一个充满激情的开发者，学习会使我永远立于不败之地；想要获得成功，需要永恒的热情，战胜无数次的失败。</p>
          </div>
          <div class="skills">
            <div class="single-progress-item">
              <h4>JavaScript</h4>
              <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
            </div>
            <div class="single-progress-item">
              <h4>CSS</h4>
              <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
            </div>
            <div class="single-progress-item">
              <h4>Vue</h4>
              <el-progress :text-inside="true" :stroke-width="18" :percentage="90" status="success"></el-progress>
            </div>
            <div class="single-progress-item">
              <h4>Python</h4>
              <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
            </div>
            <div class="single-progress-item">
              <h4>macOS</h4>
              <el-progress :text-inside="true" :stroke-width="18" :percentage="90" status="success"></el-progress>
            </div>
            <div class="single-progress-item">
              <h4>Linux</h4>
              <el-progress :text-inside="true" :stroke-width="18" :percentage="50"  status="exception"></el-progress>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ==== 关于我 End ==== -->

    <!-- ==== 作品 Start ==== -->
    <section class="portfolios-section spad" id="portfolio">
      <div class="container">
        <div class="section-title">
          <h2>作品</h2>
        </div>
        <ul class="portfolio-filter">
            <li class="filter" data-filter="*">ALL</li>
            <li class="filter" data-filter=".ill">ILLUSTRATIONS</li>
            <li class="filter" data-filter=".brand">BRANDING</li>
            <li class="filter" data-filter=".fs">FASHION</li>
          </ul>
        <div class="row portfolio_container">
          <div class="grid-item col-md-4 col-sm-4 col-xs-12 ill">
            <div class="work-item">
              <img src="static/images/portfolio/1.jpg" alt="">
              <div class="work-inner">
                <a class="work-zoom" href="#workID-1"><i class="fa fa-search"></i></a>
              </div>
            </div>
            <div id="workID-1" class="mfp-hide work-popup">
                        <img src="static/images/portfolio/1.jpg" alt="">
                        <div class="work-popup-content">
                          <h3>Project Title</h3>
                          <p>In media, which includes textual, audio, and visual content, free licensing schemes such as some of the licenses made by Creative Commons have allowed for the dissemination of works under a clear set of legal permissions.</p>
                      </div>
                    </div> 
          </div>
          <div class="grid-item col-md-4 col-sm-4 col-xs-12 brand">
            <div class="work-item">
              <img src="static/images/portfolio/2.jpg" alt="">
              <div class="work-inner">
                <a class="work-zoom" href="#workID-2"><i class="fa fa-search"></i></a>
              </div>
            </div>
            <div id="workID-2" class="mfp-hide work-popup">
                        <img src="static/images/portfolio/2.jpg" alt="">
                        <div class="work-popup-content">
                          <h3>Project Title</h3>
                          <p>In media, which includes textual, audio, and visual content, free licensing schemes such as some of the licenses made by Creative Commons have allowed for the dissemination of works under a clear set of legal permissions.</p>
                      </div>
                    </div> 
          </div>
          <div class="grid-item col-md-4 col-sm-4 col-xs-12 fs">
            <div class="work-item">
              <img src="static/images/portfolio/3.jpg" alt="">
              <div class="work-inner">
                <a class="work-zoom" href="#workID-3"><i class="fa fa-search"></i></a>
              </div>
            </div>
            <div id="workID-3" class="mfp-hide work-popup">
                        <img src="static/images/portfolio/3.jpg" alt="">
                        <div class="work-popup-content">
                          <h3>Project Title</h3>
                          <p>In media, which includes textual, audio, and visual content, free licensing schemes such as some of the licenses made by Creative Commons have allowed for the dissemination of works under a clear set of legal permissions.</p>
                      </div>
                    </div> 
          </div>
          <div class="grid-item col-md-4 col-sm-4 col-xs-12 ill">
            <div class="work-item">
              <img src="static/images/portfolio/4.jpg" alt="">
              <div class="work-inner">
                <a class="work-zoom" href="#workID-4"><i class="fa fa-search"></i></a>
              </div>
            </div>
            <div id="workID-4" class="mfp-hide work-popup">
                        <img src="static/images/portfolio/4.jpg" alt="">
                        <div class="work-popup-content">
                          <h3>Project Title</h3>
                          <p>In media, which includes textual, audio, and visual content, free licensing schemes such as some of the licenses made by Creative Commons have allowed for the dissemination of works under a clear set of legal permissions.</p>
                      </div>
                    </div> 
          </div>
          <div class="grid-item col-md-4 col-sm-4 col-xs-12 brand">
            <div class="work-item">
              <img src="static/images/portfolio/5.jpg" alt="">
              <div class="work-inner">
                <a class="work-zoom" href="#workID-5"><i class="fa fa-search"></i></a>
              </div>
            </div>
            <div id="workID-5" class="mfp-hide work-popup">
                        <img src="static/images/portfolio/5.jpg" alt="">
                        <div class="work-popup-content">
                          <h3>Project Title</h3>
                          <p>In media, which includes textual, audio, and visual content, free licensing schemes such as some of the licenses made by Creative Commons have allowed for the dissemination of works under a clear set of legal permissions.</p>
                      </div>
                    </div> 
          </div>
          <div class="grid-item col-md-4 col-sm-4 col-xs-12 fs">
            <div class="work-item">
              <img src="static/images/portfolio/6.jpg" alt="">
              <div class="work-inner">
                <a class="work-zoom" href="#workID-6"><i class="fa fa-search"></i></a>
              </div>
            </div>
            <div id="workID-6" class="mfp-hide work-popup">
                        <img src="static/images/portfolio/6.jpg" alt="">
                        <div class="work-popup-content">
                          <h3>Project Title</h3>
                          <p>In media, which includes textual, audio, and visual content, free licensing schemes such as some of the licenses made by Creative Commons have allowed for the dissemination of works under a clear set of legal permissions.</p>
                      </div>
                    </div> 
          </div>
        </div>
      </div>
    </section>
    <!-- ==== 作品 End ==== -->

    <!-- ==== 博客 Start ==== -->
    <section class="blog-section spad" id="blog">
      <div class="container">
        <div class="section-title">
          <h2>最新博客</h2>
        </div>
        <div class="row">
          <div class="col-md-4">
            <a href="single-blog.html" class="blog-item">
              <img src="static/images/blog/blog1.jpg" alt="">
              <div class="blog-item-text">
                <h3>Out believe has request not how</h3>
                <p>Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat.</p>
                <h5>7 February 2017 / POSTED BY ADMIN</h5>
              </div>
            </a>
          </div>
          <div class="col-md-4">
            <a href="single-blog.html" class="blog-item">
              <img src="static/images/blog/blog2.jpg" alt="">
              <div class="blog-item-text">
                <h3>Out believe has request not how</h3>
                <p>Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat.</p>
                <h5>7 February 2017 / POSTED BY ADMIN</h5>
              </div>
            </a>
          </div>
          <div class="col-md-4">
            <a href="single-blog.html" class="blog-item">
              <img src="static/images/blog/blog3.jpg" alt="">
              <div class="blog-item-text">
                <h3>Out believe has request not how</h3>
                <p>Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat.</p>
                <h5>7 February 2017 / POSTED BY ADMIN</h5>
              </div>
            </a>
          </div>
        </div>
        <div class="text-center mt20">
        </div>
      </div>
    </section>
    <!-- ==== 博客 End ==== -->


    <!-- ==== 留言 Start ==== -->
    <section class="contact-section spad" id="contact">
      <div class="container">
        <div class="section-title">
          <h2>留言板</h2>
        </div>
        <div class="comment"  style="background: #fff"></div>
        <!-- <div class="row">
          <div class="col-md-5">
            <ul class="con-info">
              <li>
                <i class="fa fa-phone"></i>
                <span>电话:</span>
                <p>保密</p>
              </li>
              <li>
                <i class="fa fa-envelope-o"></i>
                <span>邮箱:</span>
                <p>qrxisgs@sina.com</p>
              </li>
              <li>
                <i class="fa fa-map-marker"></i>
                <span>地址:</span>
                <p>福州</p>
              </li>
            </ul>
          </div>
          <div class="col-md-7 contact-left">
            <div id="form-chack"></div>
            <form action="mail.php.html" id="contact-form" method="POST" >

              <input type="text" name="name" id="name" required placeholder="您的名字">
              
              <input type="email" name="email" id="email" required placeholder="您的邮箱">

              <div class="send-btn-div">
                <textarea id="massage" name="massage" required placeholder="您想要发送的内容"></textarea>
                <button type="submit" class="send-btn"><i class="fa fa-send"></i></button>
              </div>
            </form>
          </div>
        </div> -->
      </div>
    </section>
    <!-- ==== 联系 End ==== -->

    <!-- ==== Footer Start ==== -->
    <footer>
      <div class="container">
        <p>Copyright © 2018 Joseph, All rights Reserved.<br>Created by BootExpress</p>
      </div>
    </footer>
    <!-- ==== Footer End ==== -->
  </div>
</template>

<script>
import bg from '@/assets/img/bg3.jpg'
window.AV = require('leancloud-storage')
import Valine from 'valine'
export default {
  data() {
    return {
      bg
    }
  },
  mounted() {
    new Valine({
      av: window.AV,
      el: '.comment',
      app_id: 'hc62SmPgPdfabCm4fPii8IMp-gzGzoHsz', // 这里填写上面得到的APP ID
      app_key: 'td3AVrAhclOibY7RMEYSooDD', // 这里填写上面得到的APP KEY
      placeholder: 'Welcome' // [v1.0.7 new]留言框占位提示文字
    })
  }
}
</script>

<style>
</style>
