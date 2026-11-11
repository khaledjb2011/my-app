import AppContext from "@/constants/AppContext";
import { dark, light } from "@/constants/data";
import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Header = () => {
  const { searchQuery, setSearchQuery } = useContext(AppContext);
  const { selectedCategory, setSelectedCategory } = useContext(AppContext);
  const { sensoryMode, setSensoryMode } = useContext(AppContext);

  const t = sensoryMode ? dark : light;

  return (
    <View
      style={[
        styles.header,
        { backgroundColor: t.card, borderColor: t.border },
      ]}
    >
      <TouchableOpacity
        style={styles.logoRow}
        onPress={() => {
          setSelectedCategory("all");
          setSearchQuery("");
        }}
      >
        <View style={styles.logoBox}>
          <Text style={{ fontSize: 24 }}>🧩</Text>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text style={[styles.logoTitle, { color: t.text }]}>خُطوة</Text>
          <Text style={[styles.logoSub, { color: t.sub }]}>
            دعم وتوعية طيف التوحد
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.modeBtn,
          { backgroundColor: t.chip, borderColor: t.border },
        ]}
        onPress={() => setSensoryMode(!sensoryMode)}
      >
        <Text style={[styles.modeText, { color: t.text }]}>
          {sensoryMode ? "👁️ الوضع العادي" : "🙈 مريح للحواس"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 14,
    borderBottomWidth: 1,
  },
  logoBox: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#0ea5e9",
    alignItems: "center",
    justifyContent: "center",
  },
  logoTitle: { fontSize: 22, fontWeight: "bold" },
  logoSub: { fontSize: 11 },
  logoRow: { flexDirection: "row-reverse", alignItems: "center", gap: 10 },
  modeBtn: {
    paddingVertical: 9,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1,
  },
  modeText: { fontSize: 12, fontWeight: "600" },
});
