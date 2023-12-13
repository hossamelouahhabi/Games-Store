import Items from "./items";

export default function ItemsList({ games }) {
  const items = games.map((item) => {
    return <Items key={item.id} item={item} />;
  });
  return (
    <div className="container my-5">
      <div className="product-list d-flex justify-content-center my-4">
        <div className="row">{items}</div>
      </div>
    </div>
  );
}
