const Card = ({ icon, title, message }) => {
  return (
    <div className="bg-light rounded-2xl p-6 m-2 max-w-96 md:max-w-72 lg:max-w-96">
      <span className="text-secondary inline-block">{icon}</span>
      <h3 className="text-2xl font-bold my-6 text-primary">{title}</h3>
      <p>{message}</p>
    </div>
  );
};

export default Card;
