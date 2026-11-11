import React, { useState } from "react";
import AppContext from "./AppContext";

const AppProvider = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sensoryMode, setSensoryMode] = useState(false);
  const [activeArticle, setActiveArticle] = useState<any>(null);
  const [bookmarks, setBookmarks] = useState<number[]>([]);

  return (
    <AppContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        sensoryMode,
        setSensoryMode,
        activeArticle,
        setActiveArticle,
        bookmarks,
        setBookmarks,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
