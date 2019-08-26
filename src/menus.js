/*
 * @Descripttion: Do not edit
 * @Author: 李佳
 * @Date: 2019-07-19 15:08:19
 * @LastEditors: 李佳
 * @LastEditTime: 2019-08-26 11:21:56
 */
export const menus = [
    {
        name: '首页',
        icon: 'appstore',
        url: "/home",
        key: '/home',
        id:'1',
        pid:null
    },
    {
        name: '个人主页',
        url: 'user',
        key: 'user',
        id:'2',
        pid:null,
        children: [
            {
                name: '个人中心',
                url: '/user/center',
                key: '/user/center',
                id:'2-1',
                pid:'2',
            },
            {
                name: '个人设置',
                url: '/user/set',
                key: '/user/set',
                id:'2-2',
                pid:'2',
                children: [
                    {
                        name: '个人中心1',
                        url: '/user/center1',
                        key: '/user/center1',
                        id:'2-2-1',
                        pid:'2-2',
                    },
                    {
                        name: '个人设置1',
                        url: '/user/set1',
                        key: '/user/set1',
                        id:'2-2-2',
                        pid:'2-2',
                    }
                ]
            }
        ]
    },
    {
        name: '图形主页',
        url: 'charts',
        key: 'charts',
        id:'3',
        pid:null,
        children: [
            {
                name: '图形1',
                url: '/charts/charts1',
                key: '/charts/charts1',
                id:'3-1',
                pid:'3',
            },
            {
                name: '图形2',
                url: '/charts/charts2',
                key: '/charts/charts2',
                id:'3-2',
                pid:'3',
                children: [
                    {
                        name: '图形21',
                        url: '/charts/charts21',
                        key: '/charts/charts21',
                        id:'3-2-1',
                        pid:'3-2',
                    },
                    {
                        name: '图形22',
                        url: '/charts/charts22',
                        key: '/charts/charts22',
                        id:'3-2-2',
                        pid:'3-2',
                    }
                ]
            }
        ]
    },
    {
        name: '在线客服管理',
        url: 'online',
        key: 'online',
        id:'4',
        pid: null,
        children: [
            {
                name: '当前会话',
                url: '/online/current',
                key: '/online/current',
                id:'4-1',
                pid:'4',
            },
            {
                name: '已转接会话',
                url: '/online/transfer',
                key: '/online/transfer',
                id:'4-2',
                pid:'4',
            }
        ]
    },
];
