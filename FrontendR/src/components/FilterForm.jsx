function FilterForm({ filters, onChange }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Filter Options</h3>
      <label><input type="checkbox" value="numbers" onChange={onChange} /> numbers</label><br />
      <label><input type="checkbox" value="alphabets" onChange={onChange} /> alphabets</label><br />
      <label><input type="checkbox" value="highest_lowercase_alphabets" onChange={onChange} /> highest lowercase alphabets</label>
    </div>
  );
}

export default FilterForm;
