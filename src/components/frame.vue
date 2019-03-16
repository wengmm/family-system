<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header class="header" id="header-bg">
      <div class="logo"></div>
      <a-icon type="home" class="home" style="fontSize:30px;color:#e1f5fe;" />
      <a-icon type="heart" class="one" style="fontSize:4px;"  theme="twoTone" twoToneColor="#eb2f96" />
      <a-icon type="heart" class="two" style="fontSize:6px;" theme="twoTone" twoToneColor="#eb2f96" />
      <a-icon type="heart" class="three" style="fontSize:8px;" theme="twoTone" twoToneColor="#eb2f96" />
      <ul class="login">
        
        <li class="user">
         <a-dropdown :trigger="['hover']">
            <a-badge count="5" >
            <img src="../assets/timg.jpg"/>
            </a-badge>
            <a-menu slot="overlay">
            <a-menu-item key="1">查看消息</a-menu-item>           
            </a-menu>
        </a-dropdown>      
        欢迎您：
        <span>用户名</span>
        </li>  
        <li><a-icon type="team" style="fontSize:20px;color:#e1f5fe;" />家庭成员</li>   
        <li><a-icon type="logout" style="fontSize:20px;color:#e1f5fe;"/>退出登录</li>
        <li>
         <a-dropdown>
            <a class="ant-dropdown-link" href="#">
            <a-icon type="setting" style="fontSize:20px;color:#e1f5fe;"/>设置
            <a-icon type="down" />
            </a>
            <a-menu slot="overlay">
            <a-menu-item>
                <a href="javascript:;">修改资料</a>
            </a-menu-item>
            <a-menu-item>
                <a href="javascript:;">权限设置</a>
            </a-menu-item>  
            </a-menu>
        </a-dropdown>
        </li>
        
      </ul>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          mode="inline"
          :defaultSelectedKeys="['1']"
          :defaultOpenKeys="['sub1']"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-sub-menu key="sub1">
            <span slot="title"><a-icon type="user" />搬砖日常</span>
            <a-menu-item key="1">查看动态</a-menu-item>
            <a-menu-item key="2">发表动态</a-menu-item>
            
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title"><a-icon type="heart" />心愿管理</span>
            <a-menu-item key="5">查看心愿</a-menu-item>
            <a-menu-item key="6">添加心愿</a-menu-item>
            
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <span slot="title"><a-icon type="book" />家庭账本</span>
            <a-menu-item key="9">账本查看</a-menu-item>
            <a-menu-item key="9">开支图表</a-menu-item>
            <a-menu-item key="10">记账</a-menu-item>
            
          </a-sub-menu>
          <a-sub-menu key="sub4">
            <span slot="title"><a-icon type="picture" />家庭相册</span>
            <a-menu-item key="9">查看相册</a-menu-item>
            <a-menu-item key="10">上传照片</a-menu-item>
            
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
          Content
          
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
    naem:"frame",
    data(){
        return{
             collapsed: false,
        }
    },
    methods: {
        logout(){
            console.log(2)
        }
    },
}
</script>

<style lang="less">
    #header-bg{
        background:#90caf9;
        padding:0;
        .home{
            position:absolute;
            top:35px;
            left:70px;

    }
        .anticon-heart.one{
            position:absolute;
            top:32px;
            left:90px;
        }
        .anticon-heart.two{
            position:absolute;
            top:27px;
            left:95px;
        }
        .anticon-heart.three{
            position:absolute;
            top:22px;
            left:100px;
        }
        .login{
           font-size:14px;
           color:#616161; 
           float:right;
           display:flex;
           position:absolute;
           list-style:none;
           right:0;
           top:0;
           li{
               width:80px;
               text-align:center;
           }
           .user{
               display:flex;
               align-item:center;
               justify-content:space-around;
               width:160px;
               .ant-scroll-number{
                  margin-top:15px;
                  
                   
               }
               img{
                   height:40px;
                   width:40px;
                   border-radius:50%;
                   margin-top:10px;

               }
           }
           .logout{
               color:#ec407a;
           }
        }
    }
    .logo{
        background:url(../assets/logo.png) no-repeat left;
        background-size:64px;
        height:64px;
        width:64px;
        border-radius:50%;
    }
    
</style>