export default function ErrorMsg({ message }) {
  return (
    <p style={{ color: "red", marginTop: "10px" }}>
      Error: {message}
    </p>
  );
}