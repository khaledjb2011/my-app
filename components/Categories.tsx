import AppContext from "@/constants/AppContext";
import { CATEGORIES, dark, light } from "@/constants/data";
import React, { useContext } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const Categories = () => {
  const { selectedCategory, setSelectedCategory } = useContext(AppContext);
  const { sensoryMode } = useContext(AppContext);
  const t = sensoryMode ? dark : light;

  return (
    <View style={styles.section}>
      <Text style={[styles.sectionTitle, { color: t.text }]}>
        مجالات الدعم والتوعية
      </Text>
      <Text style={[styles.sectionSub, { color: t.sub }]}>
        اختر قسماً لتصفية المواضيع مباشرة
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 12 }}
      >
        {CATEGORIES.map((cat) => {
          const selected = selectedCategory === cat.id;
          return (
            <TouchableOpacity
              key={cat.id}
              onPress={() => setSelectedCategory(cat.id)}
              style={[
                styles.catBtn,
                {
                  backgroundColor: t.card,
                  borderColor: selected ? "#0ea5e9" : t.border,
                  borderWidth: selected ? 2 : 1,
                },
              ]}
            >
              <View
                style={[
                  styles.catIcon,
                  { backgroundColor: selected ? "#0ea5e9" : t.chip },
                ]}
              >
                <Text style={{ fontSize: 20 }}>{cat.icon}</Text>
              </View>
              <Text
                style={[
                  styles.catName,
                  { color: selected ? "#0ea5e9" : t.text },
                ]}
                numberOfLines={1}
              >
                {cat.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  section: { paddingHorizontal: 16, marginTop: 8 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", textAlign: "right" },
  sectionSub: { fontSize: 12, textAlign: "right", marginTop: 2 },
  catBtn: {
    width: 110,
    padding: 12,
    borderRadius: 16,
    alignItems: "center",
    marginLeft: 10,
  },
  catIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  catName: { fontSize: 11, fontWeight: "bold", textAlign: "center" },
});
