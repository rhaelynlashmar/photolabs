import "../styles/PhotoListItem.scss";



const PhotoListItem = ({ data }) => {
  const { id, location, urls, user} = data;
  const { city, country} = location;
  const { full, regular } = urls;
  const { username, name, profile } = user;

  return (
    <div className="photoListItem">
      <img src={regular} alt={`Photo by ${name}`} />
      <img src={profile} alt={`${name}'s profile`} />
      <h2>{name} ({username})</h2>
      <p>{city}, {country}</p>
    </div>
  );
};

export default PhotoListItem;
