import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceHolder from 'react-native-shimmer-loading';

const ShimmerLoading = (props: any) => {
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setFetching(false);
        }, 3500);
    }, [setFetching]);

    return <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }}>
        <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            visible={!fetching}
            shimmerStyle={{
                width: 300,
                height: 300,
                borderRadius: 5,
                marginRight: 20
            }}
        >
            <View style={{
                width: 300,
                height: 300,
                borderRadius: 5,
                backgroundColor: 'tomato',
                marginRight: 20
            }} />
        </ShimmerPlaceHolder>
    </View>
};

export default ShimmerLoading;