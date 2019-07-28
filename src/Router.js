import React, {PureComponent} from "react";
import {Image} from "react-native";
import {createBottomTabNavigator, createDrawerNavigator, createStackNavigator, createAppContainer} from "react-navigation";
import Login from './pages/user/login'
import Register from './pages/user/register'
import Home from './pages/home/billList'
import Bill from './pages/bill/billList'
import Settlement from './pages/settlement/settlementList'
import Me from './pages/me/me'
import meImg from './images/me.png'
import billImg from './images/zhangdan.png'
import homeImg from './images/home.png'
import jiesuanImg from './images/jiesuan.png'
/**
 * tabBar 图标生成方法
 */
let tabBarIcon = function (focused, tintColor, imgNormal, imgFocus) {
    let IconImg = focused ? imgFocus : imgNormal;
    return <Image source={IconImg} style={{tintColor: tintColor, width: 43, height: 40}}/>;
};

const MyTab = createBottomTabNavigator(
    {
        Home: {
            screen: Home, navigationOptions: {
                tabBarLabel: '首页',
                tabBarIcon: ({focused, tintColor}) => tabBarIcon(focused, tintColor, homeImg, homeImg)
            }
        },
        Bills: {
            screen: Bill, navigationOptions: {
                tabBarLabel: '分组',
                tabBarIcon: ({focused, tintColor}) => tabBarIcon(focused, tintColor, billImg, billImg)
            }
        },
        Settlement: {
            screen: Settlement, navigationOptions: {
                tabBarLabel: '结算',
                tabBarIcon: ({focused, tintColor}) => tabBarIcon(focused, tintColor, jiesuanImg, jiesuanImg)
            }
        },
        Me: {
            screen: Me, navigationOptions: {
                tabBarLabel: '我',
                tabBarIcon: ({focused, tintColor}) => tabBarIcon(focused, tintColor, meImg, meImg)
            }
        },
    }, {
        initialRouteName: "Home",
        tabBarOptions: {
            activeTintColor: "#FF6A6A",
            inactiveTintColor: 'gray',
            style: {
                height: 62
            }
        },
        // tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    }
);
const AppNavigator = createStackNavigator(
    {
        MyTab: {screen: MyTab},
        //UnitDetail: {screen: UnitDetail},
        Login: {screen: Login},
        Register: {screen: Register},
        //UnitValue: {screen: UnitValue}
    },
    {
        initialRouteName: "MyTab",
        headerMode: "none",
        // mode: 'modal'
    }
);

// const Router = createAppContainer(AppNavigator);

export default createAppContainer(AppNavigator);
// export class Router extends PureComponent {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return <AppNavigator/>;
//     }
// }
// export default {ff: ff};
