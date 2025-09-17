
// home.jsx
import React, { useState, useEffect } from "react";

export default function Home() {
  const [now, setNow] = useState(new Date());
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("Friend");
  const [todos, setTodos] = useState([
    { id: 1, text: "Open project in VS Code", done: true },
    { id: 2, text: "Run dev server", done: false },
    { id: 3, text: "Build first component", done: false },
  ]);

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const toggleTodo = (id) =>
    setTodos((list) =>
      list.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );

  const addTodo = (text) =>
    setTodos((list) => [
      ...list,
      { id: Date.now(), text: text.trim() || "New task", done: false },
    ]);

  return (
    <div style={styles.page}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.brandWrap}>
          <Logo />
          <div>
            <h1 style={styles.title}>Home Test</h1>
            <p style={styles.subtitle}>A clean starter to verify your setup</p>
          </div>
        </div>

        <div style={styles.clock}>
          <strong>{now.toLocaleTimeString()}</strong>
          <span style={styles.clockDate}>{now.toDateString()}</span>
        </div>
      </header>

      {/* Hero */}
      <section style={styles.hero}>
        <div>
          <h2 style={styles.heroTitle}>
            Hello, <span style={styles.accent}>{name}</span> 👋
          </h2>
          <p style={styles.heroText}>
            If you can see this page, React is working. Try editing the fields
            and clicking the buttons to test hot-reload.
          </p>

          <div style={styles.controlsRow}>
            <label style={styles.label}>
              Your name:
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Type your name"
                style={styles.input}
              />
            </label>

            <div style={styles.counterBox}>
              <span style={styles.counterText}>Counter: {counter}</span>
              <div style={styles.btnRow}>
                <button onClick={() => setCounter((c) => c - 1)} style={styles.btn}>
                  −
                </button>
                <button onClick={() => setCounter(0)} style={styles.btnAlt}>
                  Reset
                </button>
                <button onClick={() => setCounter((c) => c + 1)} style={styles.btn}>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        <img
          alt="Decorative"
          src={`https://picsum.photos/seed/react-${counter}/520/320`}
          style={styles.heroImage}
        />
      </section>

      {/* Content Grid */}
      <main style={styles.grid}>
        <Card
          title="Quick Start"
          items={[
            "npm install",
            "npm run dev",
            "Open http://localhost:5173 (Vite) or http://localhost:3000 (CRA)",
          ]}
        />
        <Card
          title="Project Checks"
          items={[
            "ESLint prints no errors",
            "Hot reload updates instantly",
            "Console is clean (F12)",
          ]}
        />
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Todo (Local State)</h3>
          <ul style={styles.todoList}>
            {todos.map((t) => (
              <li key={t.id} style={styles.todoItem}>
                <label style={styles.todoLabel}>
                  <input
                    type="checkbox"
                    checked={t.done}
                    onChange={() => toggleTodo(t.id)}
                  />
                  <span
                    style={{
                      marginLeft: 8,
                      textDecoration: t.done ? "line-through" : "none",
                      color: t.done ? "#6b7280" : "#111827",
                    }}
                  >
                    {t.text}
                  </span>
                </label>
              </li>
            ))}
          </ul>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              addTodo(String(fd.get("todo") || ""));
              e.currentTarget.reset();
            }}
            style={{ display: "flex", gap: 8, marginTop: 12 }}
          >
            <input
              name="todo"
              placeholder="Add a task..."
              style={{ ...styles.input, flex: 1 }}
            />
            <button type="submit" style={styles.btn}>
              Add
            </button>
          </form>
        </div>
      </main>

      <footer style={styles.footer}>
        <span>Made with ❤️ React</span>
        <span style={{ opacity: 0.7 }}>
          Edit <code style={styles.code}>home.jsx</code> to customize
        </span>
      </footer>
    </div>
  );
}

/* ---------- Small reusable components ---------- */
function Logo() {
  return (
    <div style={styles.logo}>
      <span style={styles.logoDot} />
      <span style={{ fontWeight: 800 }}>RT</span>
    </div>
  );
}

function Card({ title, items }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.cardTitle}>{title}</h3>
      <ul style={styles.list}>
        {items.map((x, i) => (
          <li key={i} style={styles.listItem}>
            {x}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Inline styles (no external CSS needed) ---------- */
const styles = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(1200px 600px at 10% -10%, #e6f3ff 0%, transparent 60%), radial-gradient(800px 400px at 110% 10%, #f3f4f6 0%, transparent 60%)",
    color: "#0f172a",
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji"',
    padding: "20px",
    boxSizing: "border-box",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 18px",
    background: "white",
    borderRadius: 16,
    boxShadow: "0 6px 24px rgba(15, 23, 42, 0.06)",
    marginBottom: 18,
  },
  brandWrap: { display: "flex", alignItems: "center", gap: 12 },
  title: { margin: 0, fontSize: 22, fontWeight: 800, letterSpacing: 0.2 },
  subtitle: { margin: 0, marginTop: 2, fontSize: 13, color: "#64748b" },
  clock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    fontSize: 14,
  },
  clockDate: { fontSize: 12, color: "#64748b" },
  hero: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr",
    gap: 16,
    alignItems: "center",
    background: "linear-gradient(180deg, #ffffff, #f8fafc)",
    border: "1px solid #e5e7eb",
    borderRadius: 16,
    padding: 18,
    marginBottom: 18,
  },
  heroTitle: { margin: 0, fontSize: 28, fontWeight: 800, letterSpacing: 0.3 },
  heroText: { marginTop: 8, color: "#475569", lineHeight: 1.6 },
  accent: { color: "#2563eb" },
  controlsRow: {
    display: "flex",
    gap: 12,
    alignItems: "stretch",
    flexWrap: "wrap",
    marginTop: 16,
  },
  label: { display: "flex", flexDirection: "column", fontSize: 14, gap: 6 },
  input: {
    padding: "10px 12px",
    borderRadius: 10,
    border: "1px solid #e5e7eb",
    outline: "none",
    fontSize: 14,
  },
  counterBox: {
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    padding: 12,
    minWidth: 220,
    background: "white",
  },
  counterText: { fontWeight: 700 },
  btnRow: { display: "flex", gap: 8, marginTop: 8 },
  btn: {
    padding: "8px 12px",
    borderRadius: 10,
    border: "1px solid #0ea5e9",
    background: "#0ea5e9",
    color: "white",
    cursor: "pointer",
    fontWeight: 700,
  },
  btnAlt: {
    padding: "8px 12px",
    borderRadius: 10,
    border: "1px solid #e5e7eb",
    background: "white",
    cursor: "pointer",
    fontWeight: 700,
  },
  heroImage: {
    width: "100%",
    height: 320,
    objectFit: "cover",
    borderRadius: 14,
    border: "1px solid #e5e7eb",
    boxShadow: "0 10px 24px rgba(2, 6, 23, 0.08)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 16,
  },
  card: {
    background: "white",
    border: "1px solid #e5e7eb",
    borderRadius: 14,
    padding: 16,
    boxShadow: "0 6px 24px rgba(15, 23, 42, 0.05)",
  },
  cardTitle: { margin: 0, marginBottom: 8, fontSize: 18, fontWeight: 800 },
  list: { paddingLeft: 18, margin: 0 },
  listItem: { marginBottom: 8, lineHeight: 1.5, color: "#1f2937" },
  todoList: { listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8 },
  todoItem: {
    padding: "8px 10px",
    borderRadius: 10,
    border: "1px solid #e5e7eb",
    background: "#fbfdff",
  },
  todoLabel: { display: "flex", alignItems: "center" },
  footer: {
    marginTop: 18,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: 13,
    color: "#64748b",
  },
  code: {
    background: "#0f172a",
    color: "white",
    padding: "2px 6px",
    borderRadius: 6,
  },
  logo: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontSize: 16,
    padding: "8px 10px",
    borderRadius: 12,
    background: "#eef2ff",
    color: "#1e293b",
    border: "1px solid #e5e7eb",
  },
  logoDot: {
    width: 12,
    height: 12,
    borderRadius: "50%",
    background: "#6366f1",
    boxShadow: "0 0 0 4px rgba(99,102,241,0.15)",
  },
};
