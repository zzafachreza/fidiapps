import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { apiURL, dataLagu, dataSambung, datasambungSuara, dataSuara, getData } from '../../utils/localStorage'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors, fonts, fontScale, windowHeight, windowWidth } from '../../utils';
import Sound from 'react-native-sound';
import { MyButton, MyGap } from '../../components';
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';


export default function LatihanPre({ navigation, route }) {

    const [soal, setSoal] = useState([
        {
            "pertanyaan": "Hasil olahan setengah jadi dari ikan yang dapat digunakan sebagai campuran olahan sosis, nugget, dan baso ikan disebut...",
            "a": "Surimi",
            "b": "Dendeng",
            "c": "Abon",
            "d": "Fillet ikan",
            "betul": "Surimi",
        },
        {
            "pertanyaan": "Surimi memiliki kandunga konsentrasi protein myofibril yang sangat tinggi sehingga bisa menghasilkan produk yang...",
            "a": "Keras dan gurih",
            "b": "Lunak dan kenyal",
            "c": "Elastis dan kenyal",
            "d": "Manis dan krispi",
            "betul": "Elastis dan kenyal",
        },
        {
            "pertanyaan": "Gambar di bawah merupakan gambar pangan setengah jadi dari bahan baku ikan, yaitu...",
            "a": "Fillet ikan",
            "b": "Surimi",
            "c": "Bakso ikan",
            "d": "Sushi",
            "betul": "Fillet ikan",
            "image": require('../../assets/soal1.png')
        },
        {
            "pertanyaan": "Gambar di bawah merupakan gambar pangan setengah jadi dari bahan baku ikan, yaitu...",
            "a": "Fillet ikan",
            "b": "Surimi",
            "c": "Bakso ikan",
            "d": "Sushi",
            "betul": "Surimi",
            "image": require('../../assets/soal2.png')
        },
        {
            "pertanyaan": "Bentuk irisan daging ikan tanpa tulang, tanpa sisik, dan kadang tanpa kulit disebut dengan..",
            "a": "Surimi",
            "b": "Dendeng",
            "c": "Abon",
            "d": "Fillet ikan",
            "betul": "Fillet ikan",
        },
        {
            "pertanyaan": "Mengapa bahan baku surimi lebih baik menggunakan ikan yang berdaging putih?",
            "a": "karena mampu menghasilkan surimi dengan kadar lemak rendah dan protein tinggi",
            "b": "karena mampu menghasilkan surimi dengan kualitas gel dan warna yang baik",
            "c": "karena mampu menghasilkan surimi dengan tingkat kesegaran dan protein yang tinggi",
            "d": "karena mampu menghasilkan surimi dengan warna cerah dan rasa yang nikmat",
            "betul": "karena mampu menghasilkan surimi dengan kualitas gel dan warna yang baik",
        },
        {
            "pertanyaan": "Ada banyak ragam olahan yang dapat dihasilkan dari produk surimi, berikut macam-macamnya, Kecuali…",
            "a": "Kamaboko, chikuwa, & tempura",
            "b": "Bakso ikan, nugget ikan, & sosis ikan",
            "c": "Fish stick, fish cake, & shredded fish",
            "d": "Abon sapi, kerupuk kulit, & pempek telur ",
            "betul": "Abon sapi, kerupuk kulit, & pempek telur ",
        },
        {
            "pertanyaan": "Nugget ikan tentu bukan sesuatu yang baru lagi di era saat ini, namun apa keuntungan mengkonsumsi nugget ikan dibandingkan produk nugget yang lain?Kecuali...",
            "a": "Mengandung beragam protein dan nutrisi tinggi",
            "b": "Memiliki rasa khas dan tidak mengandung duri",
            "c": "Mengandung banyak pengawet dan harganya mahal",
            "d": "Meningkatkan nafsu makan dan menangkal penyakit",
            "betul": "Mengandung banyak pengawet dan harganya mahal"
        },
        {
            "pertanyaan": "Apa fungsi selongsong/casing/pelapis pada sosis ikan?",
            "a": "memberikan karakteristik khas pada sosis",
            "b": "menentukan bentuk dan ukuran sosis",
            "c": "sebagai cetakan dan wadah sosis",
            "d": "sebagai hiasan agar terlihat indah",
            "betul": "sebagai hiasan agar terlihat indah",
        },
        {
            "pertanyaan": "Ciri-ciri bakso ikan berdasarkan Gambar di bawah ini yang tidak tepat adalah . . . .",
            "a": "Umumnya berbentuk bulat ",
            "b": "Tekstur lebih berserat dibanding bakso daging",
            "c": "Rasa lebih gurih dan berbau khas",
            "d": "Berwarna lebih putih",
            "betul": "Tekstur lebih berserat dibanding bakso daging",
            "image": require('../../assets/soal3.png')
        },
    ]);






    const [jawaban, setJawaban] = useState({
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0
    });

    const [pilih, setPilih] = useState({
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0
    });

    const kirimJawaban = () => {
        console.warn(jawaban);

        navigation.replace('Hasil', {
            jawaban: jawaban,
            level: 3,
            user: user
        })
    }


    const [tipe, setTipe] = useState(false);


    const MySoal = ({ tipe, no, tanya, a, b, c, d, jawab, img }) => {
        return (
            <View>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: windowWidth / 25
                    }}>{no}. </Text>
                    <Text style={{
                        fontFamily: fonts.secondary[400],
                        fontSize: windowWidth / 25,
                        lineHeight: 20,
                    }}>{tanya}</Text>

                </View>
                {img && <Image source={img} style={{ width: 100, height: 100 }} />}
                <View style={{ marginVertical: 5, }}>

                    <TouchableOpacity style={jawab == a && tipe ? styles.cek : styles.bulat}>
                        <Text style={jawab == a && tipe ? styles.txtOK : styles.txt}>{a}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={jawab == b && tipe ? styles.cek : styles.bulat}>
                        <Text style={jawab == b && tipe ? styles.txtOK : styles.txt}>{b}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={jawab == c && tipe ? styles.cek : styles.bulat}>
                        <Text style={jawab == c && tipe ? styles.txtOK : styles.txt}>{c}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={jawab == d && tipe ? styles.cek : styles.bulat}>
                        <Text style={jawab == d && tipe ? styles.txtOK : styles.txt}>{d}</Text>
                    </TouchableOpacity>

                </View>
            </View >

        )
    }

    const __isiMenu = ({ judul, isi }) => {
        return (
            <View>
                <Text style={{
                    fontFamily: fonts.secondary[400],
                    fontSize: fontScale * 20,
                    maxWidth: '95%',
                    marginVertical: 10,
                    padding: 10,
                    backgroundColor: colors.secondary,
                    color: colors.white
                }}>
                    {judul}
                </Text>

                <Text style={{
                    fontFamily: fonts.secondary[400],
                    fontSize: fontScale * 20,
                    maxWidth: '95%',
                }}>{isi}</Text>

            </View>

        )
    }


    return (
        <SafeAreaView style={{
            padding: 10,
        }}>
            <ScrollView showsVerticalScrollIndicator={false}>


                {soal.map((item, index) => {
                    return (
                        <MySoal tipe={tipe} no={index + 1} tanya={item.pertanyaan} jawab={item.betul} a={item.a} b={item.b} c={item.c} d={item.d} img={item.image} />
                    )
                })}



                <MyButton onPress={() => {
                    setTipe(true)

                }} warna={colors.success} title="Lihat Kunci Jawaban" />
            </ScrollView>



        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bulat: {
        padding: 10,
        backgroundColor: colors.white,
        overflow: 'hidden',
        borderWidth: 1,
        marginVertical: 2,
        borderRadius: 10,
        // borderColor: colors.primary
    },
    cek: {
        padding: 10,
        borderWidth: 1,
        overflow: 'hidden',
        borderRadius: 10,
        borderColor: colors.success,
        backgroundColor: colors.success
    },
    txt: {
        fontFamily: fonts.secondary[400],
        color: colors.black,
        fontSize: windowWidth / 25
    },
    txtOK: {
        fontFamily: fonts.secondary[600],
        color: colors.white,
        fontSize: windowWidth / 25
    }
})