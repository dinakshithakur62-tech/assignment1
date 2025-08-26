"use client";

import { useEffect, useState } from "react";
import { generateStandaloneHTML } from "@/lib/generateOutput";

export type Tab = {
  id: string;
  title: string;
  content: string;
};

const TabsBuilder = () => {
  const [tabs, setTabs] = useState<Tab[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [generatedCode, setGeneratedCode] = useState<string>("");
  const [fileName, setFileName] = useState("generated-tabs.html");


  useEffect(() => {
    const savedTabs = localStorage.getItem("tabs");
    const savedActive = localStorage.getItem("activeId");

    if (savedTabs) {
      try {
        const parsed: Tab[] = JSON.parse(savedTabs);
        if (parsed.length > 0) {
          setTabs(parsed);

          const validActive = parsed.find((t) => t.id === savedActive);
          setActiveId(validActive ? validActive.id : parsed[0].id);
        }
      } catch (err) {
        console.error("Error parsing saved tabs:", err);
      }
    }
  }, []);


  useEffect(() => {
    if (tabs.length > 0) {
      localStorage.setItem("tabs", JSON.stringify(tabs));
      if (activeId) {
        localStorage.setItem("activeId", activeId);
      }
    } else {
      localStorage.removeItem("tabs");
      localStorage.removeItem("activeId");
    }
  }, [tabs, activeId]);

  const addTab = () => {
    if (tabs.length >= 15) return;
    const newTab: Tab = {
      id: Date.now().toString(),
      title: `Tab ${tabs.length + 1}`,
      content: "New tab content",
    };
    setTabs([...tabs, newTab]);
    setActiveId(newTab.id);
  };

  const removeTab = (id: string) => {
    const updated = tabs.filter((t) => t.id !== id);
    setTabs(updated);
    if (activeId === id && updated.length > 0) {
      setActiveId(updated[0].id);
    } else if (updated.length === 0) {
      setActiveId(null);
    }
  };

  const updateTitle = (id: string, title: string) => {
    setTabs(tabs.map((t) => (t.id === id ? { ...t, title } : t)));
  };

  const updateContent = (id: string, content: string) => {
    setTabs(tabs.map((t) => (t.id === id ? { ...t, content } : t)));
  };

  const generateCode = () => {
    const html = generateStandaloneHTML(tabs);
    setGeneratedCode(html);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(generatedCode);
    alert("Code copied to clipboard!");
  };

  const downloadCode = () => {
  const name = fileName.trim() || "generated-tabs.html";
  const blob = new Blob([generatedCode], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name.endsWith(".html") ? name : `${name}.html`;
  a.click();
  URL.revokeObjectURL(url);
};


  return (
    <div style={{ padding: "20px" }}>
      <div className="card">
  <h1>Tabs Builder</h1>
  <button onClick={addTab} disabled={tabs.length >= 15}>➕ Add Tab</button>
</div>
    <div className="card">
      {/* Tab headers */}
      <div
        role="tablist"
        aria-label="Tab List"
        style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}
      >
    
        {tabs.map((tab, index) => {
          const isActive = tab.id === activeId;
          return (
            <div
              key={tab.id}
              style={{ display: "flex", alignItems: "center", gap: "5px" }}
            >
              {/* Accessible tab button */}
              <button
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveId(tab.id)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowRight") {
                    const nextIndex = (index + 1) % tabs.length;
                    const nextTab = tabs[nextIndex];
                    setActiveId(nextTab.id);
                    document.getElementById(`tab-${nextTab.id}`)?.focus();
                  }
                  if (e.key === "ArrowLeft") {
                    const prevIndex = (index - 1 + tabs.length) % tabs.length;
                    const prevTab = tabs[prevIndex];
                    setActiveId(prevTab.id);
                    document.getElementById(`tab-${prevTab.id}`)?.focus();
                  }
                }}
                style={{
                  padding: "5px 10px",
                  border: "1px solid #000",
                  cursor: "pointer",
                  background: isActive ? "#32a852" : "#fff",
                }}
              >
                {tab.title}
              </button>

              {/* Editable title input */}
              <input
                type="text"
                value={tab.title}
                onChange={(e) => updateTitle(tab.id, e.target.value)}
                style={{ padding: "3px" }}
              />

              {/* Remove tab button */}
              <button onClick={() => removeTab(tab.id)}>❌</button>
            </div>
          );
        })}
      </div>
    </div>
    <div className="card">
      {/* Tab panels */}
      {tabs.map((tab) => {
        const isActive = tab.id === activeId;
        return (
          <div
            key={tab.id}
            role="tabpanel"
            id={`panel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            hidden={!isActive}
            style={{ marginTop: "20px" }}
          >
            {isActive && (
              <>
                <h2>Editing {tab.title}</h2>
                <textarea
                  rows={5}
                  cols={50}
                  value={tab.content}
                  onChange={(e) => updateContent(tab.id, e.target.value)}
                />
              </>
            )}
          </div>
        );
      })}

      {tabs.length === 0 && <p>No tabs yet. Click ➕ Add Tab.</p>}
      </div>
      {/* Output Section */}
      {tabs.length > 0 && (
        <div className="card" style={{ marginTop: "30px" }}>
  <button onClick={generateCode}>⚡ Generate Code</button>

  {generatedCode && (
    <>
      <h2>Generated Code</h2>
      <textarea
        readOnly
        value={generatedCode}
        rows={15}
        cols={80}
        style={{
          width: "100%",
          marginTop: "10px",
          fontFamily: "monospace",
        }}
      />

      {/* File name input + actions */}
      <div style={{ marginTop: "10px" }}>
        <label>
          File name:{" "}
          <input
            type="text"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            style={{ padding: "3px", marginRight: "10px" }}
          />
        </label>
        <button onClick={copyCode}>Copy Code</button>
        <button onClick={downloadCode} style={{ marginLeft: "10px" }}>
          Download
        </button>
      </div>
    </>
  )}
</div>

      )}
    </div>
  );
}

export default TabsBuilder;