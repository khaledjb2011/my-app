import AppContext from "@/constants/AppContext";
import { dark, light } from "@/constants/data";
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

const Notifications = () => {
  const { sensoryMode } = useContext(AppContext);

  const t = sensoryMode ? dark : light;

  return (
    <View style={[styles.banner, { backgroundColor: t.banner }]}>
      <Text style={[styles.bannerText, { color: t.bannerText }]}>
        💡 نمط حسي مريح: بدّل بين النمط المريح والعادي لراحة العين أثناء
        القراءة.
      </Text>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  banner: { paddingVertical: 8, paddingHorizontal: 14 },
  bannerText: { fontSize: 12, textAlign: "center" },
});
