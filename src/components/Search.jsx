export const Search = ({ value, setValue }) => {
  return (
    <section id="search" className="search">
      <input
        value={value}
        type="text"
        placeholder="Find your favorite shows"
        onChange={(e) => setValue(e.target.value)}
      />
      <button>🔎</button>
    </section>
  );
};
