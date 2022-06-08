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


export default function LatihanPost({ navigation, route }) {

    const [soal, setSoal] = useState([
        {
            "pertanyaan": "Hasil olahan setengah jadi dari ikan yang dapat digunakan sebagai campuran olahan sosis, nugget, dan baso ikan disebut...",
            "a": "Surimi",
            "b": "Dendeng",
            "c": "Abon",
            "d": "Fillet ikan",
            "betul": "a"
        },
        {
            "pertanyaan": "Surimi memiliki kandunga konsentrasi protein myofibril yang sangat tinggi sehingga bisa menghasilkan produk yang...",
            "a": "Keras dan gurih",
            "b": "Lunak dan kenyal",
            "c": "Elastis dan kenyal",
            "d": "Manis dan krispi",
            "betul": "c"
        },
        {
            "pertanyaan": "Gambar di bawah merupakan gambar pangan setengah jadi dari bahan baku ikan, yaitu...",
            "a": "Fillet ikan",
            "b": "Surimi",
            "c": "Bakso ikan",
            "d": "Sushi",
            "betul": "a",
            "image": require('../../assets/soal1.png')
        },
        {
            "pertanyaan": "Gambar di bawah merupakan gambar pangan setengah jadi dari bahan baku ikan, yaitu...",
            "a": "Fillet ikan",
            "b": "Surimi",
            "c": "Bakso ikan",
            "d": "Sushi",
            "betul": "b",
            "image": require('../../assets/soal2.png')
        },
        {
            "pertanyaan": "Bentuk irisan daging ikan tanpa tulang, tanpa sisik, dan kadang tanpa kulit disebut dengan..",
            "a": "Surimi",
            "b": "Dendeng",
            "c": "Abon",
            "d": "Fillet ikan",
            "betul": "d"
        },
        {
            "pertanyaan": "Mengapa bahan baku surimi lebih baik menggunakan ikan yang berdaging putih?",
            "a": "karena mampu menghasilkan surimi dengan kadar lemak rendah dan protein tinggi",
            "b": "karena mampu menghasilkan surimi dengan kadar lemak rendah dan protein tinggi",
            "c": "karena mampu menghasilkan surimi dengan tingkat kesegaran dan protein yang tinggi",
            "d": "karena mampu menghasilkan surimi dengan warna cerah dan rasa yang nikmat",
            "betul": "b"
        },
        {
            "pertanyaan": "Ada banyak ragam olahan yang dapat dihasilkan dari produk surimi, berikut macam-macamnya, Kecuali…",
            "a": "Kamaboko, chikuwa, & tempura",
            "b": "Bakso ikan, nugget ikan, & sosis ikan",
            "c": "Fish stick, fish cake, & shredded fish",
            "d": "Abon sapi, kerupuk kulit, & pempek telur ",
            "betul": "d"
        },
        {
            "pertanyaan": "Nugget ikan tentu bukan sesuatu yang baru lagi di era saat ini, namun apa keuntungan mengkonsumsi nugget ikan dibandingkan produk nugget yang lain?Kecuali...",
            "a": "Mengandung beragam protein dan nutrisi tinggi",
            "b": "Memiliki rasa khas dan tidak mengandung duri",
            "c": "Mengandung banyak pengawet dan harganya mahal",
            "d": "Meningkatkan nafsu makan dan menangkal penyakit",
            "betul": "c"
        },
        {
            "pertanyaan": "Apa fungsi selongsong/casing/pelapis pada sosis ikan?",
            "a": "memberikan karakteristik khas pada sosis",
            "b": "menentukan bentuk dan ukuran sosis",
            "c": "menentukan bentuk dan ukuran sosis",
            "d": "menentukan bentuk dan ukuran sosis",
            "betul": "d"
        },
        {
            "pertanyaan": "Ciri-ciri bakso ikan berdasarkan Gambar di bawah ini yang tidak tepat adalah . . . .",
            "a": "Umumnya berbentuk bulat ",
            "b": "Tekstur lebih berserat dibanding bakso daging",
            "c": "Rasa lebih gurih dan berbau khas",
            "d": "Rasa lebih gurih dan berbau khas",
            "betul": "d",
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





    const MySoal = ({ no, tanya, a, b, c, d, jawab, img }) => {
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
                        fontSize: windowWidth / 25
                    }}>{tanya}</Text>

                </View>
                {img && <Image source={img} style={{ width: 100, height: 100 }} />}
                <View style={{ marginVertical: 5, }}>

                    <TouchableOpacity onPress={() => {
                        setJawaban({
                            ...jawaban,
                            [no]: jawab == 'a' ? 1 : 0
                        })

                        setPilih({
                            ...pilih,
                            [no]: a
                        })
                    }} style={pilih[no] == a ? styles.cek : styles.bulat}>
                        <Text style={pilih[no] == a ? styles.txtOK : styles.txt}>{a}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        setJawaban({
                            ...jawaban,
                            [no]: jawab == 'b' ? 1 : 0
                        })
                        setPilih({
                            ...pilih,
                            [no]: b
                        })
                    }} style={pilih[no] == b ? styles.cek : styles.bulat}>
                        <Text style={pilih[no] == b ? styles.txtOK : styles.txt}>{b}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        setJawaban({
                            ...jawaban,
                            [no]: jawab == 'c' ? 1 : 0
                        })
                        setPilih({
                            ...pilih,
                            [no]: c
                        })
                    }} style={pilih[no] == c ? styles.cek : styles.bulat}>
                        <Text style={pilih[no] == c ? styles.txtOK : styles.txt}>{c}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        setJawaban({
                            ...jawaban,
                            [no]: jawab == 'd' ? 1 : 0
                        })
                        setPilih({
                            ...pilih,
                            [no]: d
                        })
                    }} style={pilih[no] == d ? styles.cek : styles.bulat}>
                        <Text style={pilih[no] == d ? styles.txtOK : styles.txt}>{d}</Text>
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



                <__isiMenu judul="Surimi" isi="1.	Apa yang anda ketahui tentang definisi surimi?
2.	Apa tujuan pencampuran/mixing?
3.	Peralatan apa saja yang digunakan untuk membuat surimi?
4.	Apakah tujuan dilakukannya proses leaching?
5.	Perlakuan apa yang dapat memperbaiki kemampuan pembentukan gel?
" />

                <__isiMenu judul="Nugget Ikan" isi="1.	Tuliskan ciri -ciri ikan segar!
2.	Jelaskan pengertian nugget yang anda ketahui!
3.	Bahan dasar sangat menentukan mutu produk yang dihasilkan. Jelaskan karakteristik ikan yang baik untuk pembuatan nugget ikan!
4.	Jelaskan jenis dan karakteristik bahan pendukung yang digunakan untuk pembuatan nugget!
5.	Jelaskan proses pembuatan nugget ikan berdasarkan materi dan video yang ada!
" />


                <__isiMenu judul="Bakso Ikan" isi="1.	Jelaskan syarat bahan baku pembuatan bakso ikan?
2.	Mengapa pembuatan adonan bakso ikan perlu ditambahkan es?
3.	Jelaskan prosedur pembuatan bakso ikan?
4.	Alat apa saja yang diperlukan dalam proses pengolahan bakso ikan?
5.	Perebusan bakso dilakukan 2 tahap, Apakah tujuannya?
" />


                <__isiMenu judul="Sosis Ikan" isi="1.	Mengapa bahan baku sosis, harus menggunakan ikan segar?
2.	Tuliskan bahan tambahan dan bumbu serta jumlah persentasenya untuk pembuatan sosis ikan!
3.	Mengapa pembuatan adonan sosis ikan suhu perlu dipertahankan di bawah 22°C?
4.	Jelaskan prosedur pembuatan adonan sosis ikan! 
5.	Jelaskan teknis perebusan sosis ikan untuk menghindari agar casing tidak pecah!
" />


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
        borderColor: colors.primary,
        backgroundColor: colors.primary
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