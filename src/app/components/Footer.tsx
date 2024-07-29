export default function Footer({ companyName = "Eeny Meeny Miny Moe" }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-dark-gray text-sm text-center py-2">
      <p>
        © {currentYear} {companyName}
      </p>
    </footer>
  );
}
