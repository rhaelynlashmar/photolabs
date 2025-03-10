import "../styles/PhotoListItem.scss";



const PhotoListItem = ({ photo }) => {
  const { id, location, urls, user} = photo;
  const { city, country} = location;
  const { full, regular } = urls;
  const { name, profile } = user;

  return (
    <div className="photoListItem">
      <img src={regular} alt={`Photo by ${name}`} />
      <img src={profile} alt={`${name}'s profile`} />
      <h2>{name}</h2>
      <p>{city}, {country}</p>
    </div>
  );
};

export default PhotoListItem;
