interface ProductCardProps {
  name: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, image }) => {
  return (
    <div>
      <div className="cursor-pointer">
        <img src={image} alt={name} />
      </div>
      <span className="text-xs">{name}</span>
    </div>
  );
};

export default ProductCard;
