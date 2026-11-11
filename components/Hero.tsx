import AppContext from "@/constants/AppContext";
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import Search from "./Search";

const Hero = () => {
  const { sensoryMode } = useContext(AppContext);
  return (
    <View
      style={[
        styles.hero,
        { backgroundColor: sensoryMode ? "#1e293b" : "#4f5fd8" },
      ]}
    >
      <View style={styles.heroBadge}>
        <Text style={styles.heroBadgeText}>
          ✨ مرحباً بكم في منصة التوعية الشاملة
        </Text>
      </View>
      <Text style={styles.heroTitle}>
        معارف وموارد مبسطة لمساندة عائلات وأبطال طيف التوحد
      </Text>
      <Text style={styles.heroDesc}>
        ابحث في الاستراتيجيات المعرفية والتوجيهات السلوكية ودلائل التواصل
        اليومي.
      </Text>

      <Search />
    </View>
  );
};

export default Hero;

const styles = StyleSheet.create({
  hero: { margin: 16, padding: 20, borderRadius: 24, alignItems: "center" },
  heroBadge: {
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginBottom: 14,
  },
  heroBadgeText: { color: "#fff", fontSize: 12, fontWeight: "600" },
  heroTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 32,
  },
  heroDesc: {
    color: "#e0f2fe",
    fontSize: 13,
    textAlign: "center",
    marginTop: 10,
    lineHeight: 20,
  },
});
