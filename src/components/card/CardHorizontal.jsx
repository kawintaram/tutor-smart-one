const CardHorizontal = ({ icon, title, message }) => {
  return (
    <div className="bg-primary/5 rounded-2xl p-6 my-6 w-full">
      <div className="flex flex-col items-center mb-6 md:flex-row">
        <span className="text-secondary">{icon}</span>
        <h3 className="text-2xl font-bold ml-2 text-primary">{title}</h3>
      </div>

      <p>{message}</p>
    </div>
  );
};

export default CardHorizontal;
