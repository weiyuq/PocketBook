/**
 * Created by weiyuqin on 2019/7/14.
 */
import React, { Component } from 'react';
import { Image, StyleSheet,View } from 'react-native';

import { Container, Header, Content, Form, Item, Input, Label,Button, Text  } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import logo from '../../images/logo.png';
import { getPixel } from '../../utils/Pixel';

export default class Login extends Component {
    state = {
        formData: {},
        selectedKeys: [],
        indeterminate: false,
        allChecked: false,
        selectedResource: [],
        visible: true,
        info: null,
    };
    componentDidMount() {

    }
    render(){
        return (
            <Container style={{ flex: 1,  justifyContent: "center",}}>
                <View style={styles.logo}>
                    <Image
                        style={{width: 80, height: 80}}
                        source={logo}
                    />
                </View>
                <Content>
                    <Form>
                        <Item >
                            <Input placeholder="用户名/邮箱" />
                        </Item>
                        <Item last>
                            <Input placeholder="密码" textContentType="password" />
                        </Item>
                        <Button block style={{ color: '#FF6A6A'}}>
                            <Text>提交</Text>
                        </Button>
                    </Form>
                    <View style={styles.textBox}>
                        <Text>注册</Text>
                        <Text>忘记密码</Text>
                    </View>
                </Content>
            </Container>
        );
    }
};
const styles = StyleSheet.create({
    logo:{
        //flex: 1,
        //justifyContent: "center",
        marginTop: getPixel(50),
        height: getPixel(120),
        //backgroundColor:'red',
        alignItems:'center'
    },
    textBox: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: getPixel(10),
    }
});