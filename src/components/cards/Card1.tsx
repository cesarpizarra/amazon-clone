interface Card1Props {
  name: string;
  image: string;
}

const Card1: React.FC<Card1Props> = ({ name, image }) => {
  return (
    <div>
      <div className="cursor-pointer">
        <img src={image} alt={name} />
      </div>
      <span className="text-xs">{name}</span>
    </div>
  );
};

export default Card1;
