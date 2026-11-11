import Categories from "@/components/Categories";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Notifications from "@/components/Notifications";
import Subjects from "@/components/Subjects";
import AppContext from "@/constants/AppContext";
import { dark, light } from "@/constants/data";
import React, { useContext } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const index = () => {
  const { sensoryMode } = useContext(AppContext);
  const t = sensoryMode ? dark : light;

  return (
    <View style={[styles.container, { backgroundColor: t.bg }]}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <Notifications />
        <Header />
        <Hero />
        <Categories />
        <Subjects />
      </ScrollView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
