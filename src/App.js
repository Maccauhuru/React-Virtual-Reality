import React from 'react';
import {
    asset,
    Pano,
    Text,
    View,
} from 'react-vr';

export default class App extends React.Component {
    render() {
        return (
            <View>
                <Pano source={asset('panoramaTower1280x640.jpg')} onLoadEnd={} />
                <Text
                    style={{
                        backgroundColor: '#000',
                        fontSize: 0.5,
                        fontWeight: '200',
                        layoutOrigin: [0.5, 0.5],
                        marginLeft: 0.57,
                        paddingLeft: 0.2,
                        paddingRight: 0.2,
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        transform: [{ translate: [0, 0, -3] }],
                    }}>
                    SIMBA
        </Text>
            </View>
        );
    }
};

