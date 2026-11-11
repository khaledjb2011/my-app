import AppContext from "@/constants/AppContext";
import React, { useContext } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const Search = () => {
  const { sensoryMode } = useContext(AppContext);
  const { searchQuery, setSearchQuery } = useContext(AppContext);
  return (
    <View
      style={[
        styles.searchBox,
        { backgroundColor: sensoryMode ? "#0f172a" : "#fff" },
      ]}
    >
      <Text style={{ fontSize: 18 }}>🔍</Text>
      <TextInput
        style={[
          styles.searchInput,
          { color: sensoryMode ? "#fff" : "#1e293b" },
        ]}
        placeholder="ابحث عن موضوع..."
        placeholderTextColor="#94a3b8"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      {searchQuery !== "" && (
        <TouchableOpacity onPress={() => setSearchQuery("")}>
          <Text style={{ fontSize: 18, color: "#94a3b8" }}>✕</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchBox: {
    flexDirection: "row-reverse",
    alignItems: "center",
    width: "100%",
    marginTop: 18,
    paddingHorizontal: 14,
    borderRadius: 16,
    gap: 8,
  },
  searchInput: { flex: 1, height: 48, fontSize: 15, textAlign: "right" },
});
