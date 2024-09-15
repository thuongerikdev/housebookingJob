import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Image } from 'react-native';
import Heading from '../../Components/Heading';

import Path from '../../Utils/Api'; // Assuming Path is correctly imported
export default function Slider() {
    const [slider, setSlider] = useState([]);

    useEffect(() => {
        getAllSlider();
    }, []);

    // Get Slider From API 
    const getAllSlider = async () => {
        try {
            const query = `
                query {
                    getIconMainScreen(showIn: "Slider") {
                        showIn
                        name
                        data
                    }
                }
            `;
            const response = await fetch(Path, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query }),
            });

            const json = await response.json();
            const slidersData = json.data.getIconMainScreen;

            if (Array.isArray(slidersData)) {
                const updatedSliders = slidersData.map(slider => ({
                    title: slider.name,
                    onPress: () => console.log(`${slider.name} pressed`),
                    imageBase64: `data:image/jpeg;base64,${slider.data}`,
                }));
                setSlider(updatedSliders);
            } else {
                console.error('Slider data is not an array:', slidersData);
            }
        } catch (error) {
            console.error('Error fetching sliders:', error);
        }
    };

    return (
        <View>
            <Heading text={'Offers For You'} />
            <FlatList
                data={slider}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View style={{ marginRight: 20 }}>
                        <Image
                            source={{ uri: item.imageBase64 }}
                            style={styles.sliderImage}
                        />
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontFamily: 'outfit-medium',
        marginBottom: 10
    },
    sliderImage: {
        width: 270,
        height: 150,
        borderRadius: 20,
        resizeMode: 'contain'
    }
});
