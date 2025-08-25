function ItemCard({ data }) {
  return (
    <div className="card">
      <h2 className="card__title">{data.name}</h2>
      <img src={data.link} alt={data.name} className="card__image" />
    </div>
  );
}

export default ItemCard;
