interface Card2Props {
  name: string;
  image: string;
}

const Card2: React.FC<Card2Props> = ({ name, image }) => {
  return (
    <div>
      <div className="cursor-pointer">
        <img src={image} alt={name} />
      </div>
      <span className="text-xs">{name}</span>
    </div>
  );
};

export default Card2;
