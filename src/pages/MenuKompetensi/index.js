import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Image,
  Animated,
  ScrollView,
} from 'react-native';
import { colors } from '../../utils/colors';
import { fonts, fontScale } from '../../utils/fonts';
import { color, asin } from 'react-native-reanimated';
import { getData, storeData } from '../../utils/localStorage';
import { PermissionsAndroid } from 'react-native';
import { MyButton } from '../../components';

export default function MenuKompetensi() {
  return (
    <SafeAreaView style={{
      flex: 1,
      padding: 10,

      backgroundColor: colors.white
    }}>
      <ScrollView style={{
        // justifyContent: 'center',
        flex: 1
      }}>
        <Text style={{
          fontFamily: fonts.secondary[800],
          textAlign: 'center',
          fontSize: fontScale * 40,
          color: colors.secondary,
          margin: 10,
        }}>KOMPETENSI</Text>


        <Text style={{
          fontFamily: fonts.secondary[400],
          fontSize: fontScale * 20,
          maxWidth: '95%',
          marginVertical: 10,
          padding: 10,
          backgroundColor: colors.secondary,
          color: colors.white
        }}>
          1)	KOMPETENSI INTI (PENGETAHUAN)
        </Text>

        <Text style={{
          fontFamily: fonts.secondary[400],
          fontSize: fontScale * 20,
          maxWidth: '95%',
        }}>{' '}{' '}Memahami, menerapkan, menganalisis, dan mengevaluasi tentang pengetahuan faktual, konseptual, operasional dasar, dan metakognitif sesuai dengan bidang dan Agribisnis Pengolahan Hasil Perikanan pada tingkat teknis, spesifik, detil, dan kompleks, berkenaan dengan ilmu pengetahuan, teknologi, seni, budaya, dan humaniora dalam konteks pengembangan potensi diri sebagai bagian dari keluarga, sekolah, dunia kerja, warga masyarakat nasional, regional, dan internasional.</Text>


        <Text style={{
          fontFamily: fonts.secondary[400],
          fontSize: fontScale * 20,
          maxWidth: '95%',
          marginVertical: 10,
          padding: 10,
          backgroundColor: colors.secondary,
          color: colors.white
        }}>
          2)	KOMPETENSI INTI (keterampilan)
        </Text>

        <Text style={{
          fontFamily: fonts.secondary[400],
          fontSize: fontScale * 20,
          maxWidth: '95%',
        }}>{' '}{' '}Melaksanakan tugas spesifik, dengan menggunakan alat, informasi, dan prosedur kerja yang lazim dilakukan serta menyelesaikan masalah sederhana sesuai dengan bidang dan lingkup Agribisnis Pengolahan Hasil Perikanan secara tradisional. Menampilkan kinerja di bawah bimbingan dengan mutu dan kuantitas yang terukur sesuai dengan standar kompetensi kerja. Menunjukkan keterampilan menalar, mengolah, dan menyaji secara efektif, kreatif, produktif, kritis, mandiri, kolaboratif, komunikatif, dan solutif dalam ranah abstrak terkait dengan pengembangan dari yang dipelajarinya di sekolah, serta mampu melaksanakan tugas spesifik di bawah pengawasan langsung.  Menunjukkan keterampilan mempresepsi, kesiapan, meniru, membiasakan gerak mahir, menjadikan gerak alami, dalam ranah konkret terkait dengan pengembangan dari yang dipelajarinya di sekolah, serta mampu melaksanakan tugas spesifik di bawah pengawasan langsung.</Text>


        <Text style={{
          fontFamily: fonts.secondary[400],
          fontSize: fontScale * 20,
          maxWidth: '95%',
          marginVertical: 10,
          padding: 10,
          backgroundColor: colors.secondary,
          color: colors.white
        }}>
          3)	KOMPETENSI DASAR
        </Text>

        <Text style={{
          fontFamily: fonts.secondary[400],
          fontSize: fontScale * 20,
          maxWidth: '95%',
        }}>3.1 Menerapkan prinsip dasar dan alur proses produksi olahan diversifikasi hasil perikanan (abon ikan, sosis ikan, sate, bakso, batagor, siomay, pempek, kerupuk, kaki naga, ekado dan berbagai macam diversifikasi produk olahan hasil perikanan lainnya).</Text>

        <Text style={{
          fontFamily: fonts.secondary[400],
          fontSize: fontScale * 20,
          maxWidth: '95%',
          marginTop: 10,
        }}>4.1 Melaksanakan produksi olahan produk diversifikasi hasil perikanan. abon ikan, sosis ikan, sate, bakso, batagor, siomay, pempek, kerupuk, kaki naga, ekado dan berbagai macam diversifikasi produk olahan hasil perikanan lainnya).</Text>


      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})