// app/admin/layout.tsx
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* Puedes incluir navegación, contenedores, etc. */}
      <h2>Administración</h2>
      {children}
    </div>
  );
}
