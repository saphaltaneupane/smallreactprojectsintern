import { useAuthStore } from "../state/useAuthStore";

export default function Navbar() {
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);

  return (
    <nav style={{ padding: 20, background: "#eee" }}>
      <h3>Stargram</h3>

      {user ? (
        <>
          <span>Welcome, {user.username}</span>
          <button onClick={logout} style={{ marginLeft: 20 }}>
            Logout
          </button>
        </>
      ) : (
        <span>Not logged in</span>
      )}
    </nav>
  );
}
