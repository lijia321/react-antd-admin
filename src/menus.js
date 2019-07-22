export const menus = [
    {
        name: '首页',
        icon: 'appstore',
        url: "/home",
        key:'/home'
    },
   {
       name:'个人主页',
       url:'user',
       key:'user',
       children:[
           {
            name:'个人中心',
            url:'/user/center',
            key:'/user/center',
           },
           {
            name:'个人设置',
            url:'/user/set',
            key:'/user/set',
           }
       ]
   }
];
