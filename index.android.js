/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Dimensions,
    Linking
} from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';
import RoundedButton from './RoundedButton';

var { width, height } = Dimensions.get('window')



const FirstRoute = () =>
    <ScrollView>
        <View style={{ backgroundColor: '#fff',flex: 1,flexDirection: 'column',justifyContent: 'space-between' }}>
            <Text style={[styles.slideText,{fontSize:25,marginTop:30,marginBottom:15}]}>Our Philosophy</Text>
            <Text style={[styles.slideText,{fontSize:18,marginTop:5,marginRight:20,marginLeft:20,marginBottom:30}]}>At InstaHelp, we believe that an ideal society is one where the entire community comes together and help each other. While often, to many, help does not reach in time, we have taken upon ourselves this gargantuan task of ensuring that every call of help is answered on time. We strive to reduce the distance between the police and the civilians by connecting them.</Text>
            <Text style={[styles.slideText,{fontSize:25,marginBottom:15}]}>Our Inspiration</Text>
            <Text style={[styles.slideText,{fontSize:18,marginTop:5,marginRight:20,marginLeft:20,marginBottom:20}]}>The crime rate in India is alarmingly high, which is why more and more people are becoming victims. Also the police often takes time reaching at the crime scene, giving the criminal ample amount of time to escape. This lag inspired us to fill in the gap and create a platform where with just a touch, instant help could reach those in need.</Text>
        <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>

            <View style={{marginBottom: 25,marginTop: 25,width:200}}>
                <RoundedButton onPress={()=>Linking.openURL('mailto:ishita.bhandari10@gmail.com')}>
                    Contact Us
                </RoundedButton>
            </View>
        </View>
        <Text style={[styles.slideText,{fontSize:15,color:'black',marginBottom:10}]}>Created By : Ishita Bhandari {"\n"}Powered by: Swati Jain Incubation Center</Text>
        </View>
    </ScrollView>;
const SecondRoute = () =>
    <ScrollView>

        <View style={[ styles.featurecontainer, { backgroundColor: '#fff' } ]} >
            <Image style={[styles.image,{margin:20}]} source={require('./images/003-shield.png')}/>
            <View style = {styles.container4}>
                <Text style={[styles.slideText,{fontSize:25,paddingTop:20,marginBottom:10}]}> 25 Security Features</Text>
                <Text style={[styles.slideText,{fontSize:18,marginTop:10,marginRight:10,marginBottom:20}]}>With over dozens of our security features you are never alone. Keep your loved ones connected.</Text>
            </View>
        </View>

        <View style={[ styles.featurecontainer, { backgroundColor: '#fff' } ]} >
            <View style = {styles.container4}>
                <Text style={[styles.slideText,{fontSize:25,paddingTop:20,marginBottom:10}]}>Ultra Sleek</Text>
                <Text style={[styles.slideText,{fontSize:18,marginTop:10,marginLeft:10,marginBottom:20}]}> Our clean design enables hassle free user-app interaction. Anyone can easily use this application anywhere.</Text>
            </View>
            <Image style={[styles.image,{margin:20}]} source={require('./images/002-layers.png')}/>
        </View>

        <View style={[ styles.featurecontainer, { backgroundColor: '#fff' } ]} >
            <Image style={[styles.image,{margin:20}]} source={require('./images/001-money.png')}/>
            <View style = {styles.container4}>
                <Text style={[styles.slideText,{fontSize:25,paddingTop:20,marginBottom:10}]}>Free, Forever and Ever</Text>
                <Text style={[styles.slideText,{fontSize:18,marginTop:10,marginRight:10,marginBottom:20}]}>Don't worry, there will be no compromises on the features because your safety is our responsibility.</Text>
            </View>
        </View>
    </ScrollView>;

const ThirdRoute = () =>
<ScrollView>
    <View style={[ styles.container, { backgroundColor: '#fff',alignItems:'center'} ]}>

        <Image style={[styles.imageTestimonial,{marginTop:30}]} source={require('./images/face1.jpg')}/>
        <Text style={[styles.slideText,{fontSize:28,paddingTop:20,paddingLeft:5, paddingRight:5}]}>Great step to make our society more responsible and crime free.</Text>
        <Text style={[styles.slideText,{fontSize:20,paddingTop:10}]}>-Ritambhara Singh Tomar</Text>

        <View style={{
        marginTop:10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: width-40}}/>

        <Image style={[styles.imageTestimonial,{marginTop:30}]} source={require('./images/face2.jpg')}/>
        <Text style={[styles.slideText,{fontSize:28,paddingTop:20,paddingLeft:5,paddingRight:5}]}>Excellent way of ensuring safety of your loved ones.</Text>
        <Text style={[styles.slideText,{fontSize:20,paddingTop:10}]}>-Rishabh Panwar </Text>

        <View style={{
        marginTop:10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: width-40}}/>

        <Image style={[styles.imageTestimonial,{marginTop:30}]} source={require('./images/face3.jpg')}/>
        <Text style={[styles.slideText,{fontSize:28,paddingTop:20,paddingLeft:5,paddingRight:5}]}>A much needed idea put effectively into use!</Text>
        <Text style={[styles.slideText,{fontSize:20,paddingTop:10,marginBottom:10}]}>-Prakirn Kumar</Text>

    </View>
</ScrollView>;


export default class tabtest extends PureComponent {
    state = {
        intromode: false,
        index: 0,
        routes: [
            { key: '1', title: 'About Us' },
            { key: '2', title: 'Features' },
            { key: '3', title: 'Testimonials' },

        ],
    };

    _handleChangeTab = index => this.setState({ index });

    _renderHeader = props => <TabBar {...props} />;

    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={3} dotStyle={{marginBottom: 100}} selectedDotStyle={{marginBottom:100, backgroundColor: '#58b0dc'}} />;
    }

    _renderScene = SceneMap({
        '1': FirstRoute,
        '2': SecondRoute,
        '3' : ThirdRoute
    });

    render() {
        if(!this.state.intromode)
        {return (

            <View style={{flex:1}}>
              <IndicatorViewPager
                  style={{flex:1}}
                  indicator={this._renderDotIndicator()}
              >
                <View style={{backgroundColor:'white', justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./images/logo.png')} style={{alignItems: 'center', maxWidth:335 , maxHeight:115}}/>
                  <Text style={styles.slideCaption}> Instant Help, 24 x 7 </Text>
                </View>
                <View style={{backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./images/slider2.png')} style={{height: 128, width:128}}/>
                  <Text style={styles.slideCaption}>InstaHelp, your bodyguard</Text>
                  <Text style={styles.slideText}> Get help, instantly, at anytime, anywhere! </Text>
                </View>
                <View style={{backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./images/slider3.png')} style={{height: 128, width:128}}/>
                  <Text style={styles.slideCaption}>Fight crime fearlessly</Text>
                  <Text style={styles.slideText}> Don't worry we got your back! </Text>
                  <View style={{marginTop: 25}}>
                    <RoundedButton onPress={()=>this.setState({intromode:true})}>
                      Let's get started
                    </RoundedButton>
                  </View>
                </View>
              </IndicatorViewPager>
            </View>)
        }
        else {
            return (
                <TabViewAnimated
                    style={styles.container}
                    navigationState={this.state}
                    renderScene={this._renderScene}
                    renderHeader={this._renderHeader}
                    onRequestChangeTab={this._handleChangeTab}
                />
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    slider: {
        marginBottom: 30,
        height:300
    },
    sliderContainer: {
    },
    slideCaption: {
        fontSize: 32,
        marginTop: 12,
        alignItems: 'center',
        fontFamily: 'ptserif'
    },
    featurecontainer: {
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height:height/3
    },
    slideText: {
        fontSize: 24,
        marginTop: 10,
        alignItems: 'center',
        textAlign: 'center'
    },
    image: {
        height: 100,
        width:100
    },
    container4: {
        flex: 1,
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    imageTestimonial: {
        height: 100,
        width:100,
        borderRadius:50
    }

});

AppRegistry.registerComponent('tabtest', () => tabtest);
