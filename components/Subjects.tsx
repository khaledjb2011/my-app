import AppContext from "@/constants/AppContext";
import { ARTICLES, CATEGORIES, dark, light } from "@/constants/data";
import React, { useContext, useMemo } from "react";
import {
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const Subjects = () => {
  const { sensoryMode } = useContext(AppContext);
  const t = sensoryMode ? dark : light;
  const { searchQuery, setSearchQuery } = useContext(AppContext);
  const { selectedCategory, setSelectedCategory } = useContext(AppContext);
  const { activeArticle, setActiveArticle } = useContext(AppContext);
  const { bookmarks, setBookmarks } = useContext(AppContext);

  const filteredArticles = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return ARTICLES.filter((a) => {
      const okCat =
        selectedCategory === "all" || a.category === selectedCategory;
      const okQuery =
        a.title.toLowerCase().includes(q) ||
        a.summary.toLowerCase().includes(q) ||
        a.categoryName.toLowerCase().includes(q);
      return okCat && okQuery;
    });
  }, [searchQuery, selectedCategory]);

  const toggleBookmark = (id: number) => {
    setBookmarks((prev) =>
      prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id],
    );
  };

  return (
    <View style={styles.section}>
      <View style={styles.listHeader}>
        <Text
          style={[styles.countBadge, { backgroundColor: t.chip, color: t.sub }]}
        >
          {filteredArticles.length} موضوع
        </Text>
        <Text style={[styles.sectionTitle, { color: t.text }]}>
          {selectedCategory === "all"
            ? "جميع المواضيع والدلائل"
            : CATEGORIES.find((c) => c.id === selectedCategory)?.name}
        </Text>
      </View>

      {filteredArticles.length === 0 ? (
        <View
          style={[
            styles.empty,
            { backgroundColor: t.card, borderColor: t.border },
          ]}
        >
          <Text>🔍</Text>
          <Text style={[styles.emptyTitle, { color: t.text }]}>
            لم نجد نتائج تطابق بحثك
          </Text>
          <Text style={[styles.emptySub, { color: t.sub }]}>
            جرب كلمات أخرى أو تصفح جميع الأقسام.
          </Text>
          <TouchableOpacity
            style={styles.emptyBtn}
            onPress={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>عرض الكل</Text>
          </TouchableOpacity>
        </View>
      ) : (
        filteredArticles.map((article) => {
          const saved = bookmarks.includes(article.id);
          return (
            <TouchableOpacity
              key={article.id}
              activeOpacity={0.85}
              onPress={() => setActiveArticle(article)}
              style={[
                styles.article,
                { backgroundColor: t.card, borderColor: t.border },
              ]}
            >
              <View style={styles.articleTop}>
                <TouchableOpacity onPress={() => toggleBookmark(article.id)}>
                  <Text
                    style={{
                      fontSize: 22,
                      color: saved ? "#f59e0b" : "#cbd5e1",
                    }}
                  >
                    {saved ? "★" : "☆"}
                  </Text>
                </TouchableOpacity>
                <Text
                  style={[
                    styles.badge,
                    { backgroundColor: t.badgeBg, color: t.badgeText },
                  ]}
                >
                  {article.categoryName}
                </Text>
              </View>

              <Text style={[styles.articleTitle, { color: t.text }]}>
                {article.title}
              </Text>
              <Text style={[styles.articleSummary, { color: t.sub }]}>
                {article.summary}
              </Text>

              <View
                style={[styles.articleFooter, { borderTopColor: t.border }]}
              >
                <Text
                  style={{
                    color: "#0ea5e9",
                    fontWeight: "bold",
                    fontSize: 13,
                  }}
                >
                  ← قراءة المادة
                </Text>
                <Text style={{ color: t.sub, fontSize: 12 }}>
                  🕒 {article.readTime}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })
      )}

      <Modal
        visible={!!activeArticle}
        animationType="slide"
        onRequestClose={() => setActiveArticle(null)}
      >
        <View style={[styles.container, { backgroundColor: t.bg }]}>
          <View
            style={[
              styles.modalHeader,
              { backgroundColor: t.card, borderColor: t.border },
            ]}
          >
            <TouchableOpacity onPress={() => setActiveArticle(null)}>
              <Text style={{ fontSize: 26, color: t.text }}>✕</Text>
            </TouchableOpacity>
            {activeArticle && (
              <TouchableOpacity
                onPress={() => toggleBookmark(activeArticle.id)}
              >
                <Text
                  style={{
                    fontSize: 26,
                    color: bookmarks.includes(activeArticle.id)
                      ? "#f59e0b"
                      : "#cbd5e1",
                  }}
                >
                  {bookmarks.includes(activeArticle.id) ? "★" : "☆"}
                </Text>
              </TouchableOpacity>
            )}
          </View>

          {activeArticle && (
            <ScrollView
              contentContainerStyle={{ padding: 20, paddingBottom: 50 }}
            >
              <Text
                style={[
                  styles.badge,
                  {
                    backgroundColor: t.badgeBg,
                    color: t.badgeText,
                    alignSelf: "flex-end",
                  },
                ]}
              >
                {activeArticle.categoryName}
              </Text>
              <Text style={[styles.modalTitle, { color: t.text }]}>
                {activeArticle.title}
              </Text>
              <Text
                style={{ color: t.sub, textAlign: "right", marginBottom: 16 }}
              >
                🕒 {activeArticle.readTime}
              </Text>
              <Text style={[styles.modalBody, { color: t.text }]}>
                {activeArticle.content}
              </Text>
            </ScrollView>
          )}
        </View>
      </Modal>
    </View>
  );
};

export default Subjects;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: { paddingHorizontal: 16, marginTop: 8 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", textAlign: "right" },
  sectionSub: { fontSize: 12, textAlign: "right", marginTop: 2 },
  listHeader: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 12,
  },
  article: { borderRadius: 18, borderWidth: 1, padding: 16, marginBottom: 14 },
  articleTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  badge: {
    fontSize: 12,
    fontWeight: "bold",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
    overflow: "hidden",
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "right",
    lineHeight: 24,
  },
  articleSummary: {
    fontSize: 13,
    textAlign: "right",
    marginTop: 8,
    lineHeight: 20,
  },
  articleFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14,
    paddingTop: 12,
    borderTopWidth: 1,
  },
  countBadge: {
    fontSize: 12,
    fontWeight: "600",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
    overflow: "hidden",
  },
  empty: {
    alignItems: "center",
    padding: 30,
    borderRadius: 20,
    borderWidth: 1,
  },
  emptyTitle: { fontSize: 16, fontWeight: "bold", marginTop: 8 },
  emptySub: { fontSize: 12, marginTop: 4 },
  emptyBtn: {
    marginTop: 14,
    backgroundColor: "#0ea5e9",
    paddingVertical: 9,
    paddingHorizontal: 18,
    borderRadius: 12,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 14,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "right",
    marginTop: 14,
    lineHeight: 34,
  },
  modalBody: { fontSize: 16, textAlign: "right", lineHeight: 30 },
});
