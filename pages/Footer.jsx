const Footer = ({ total_locations }) => {
  return (
    <footer className="fixed bottom-0 w-full h-16 font-thin bg-green-400 font-display">
      <div className="flex flex-row items-center justify-around h-full">
        <p>
          <span className="font-semibold ">{total_locations} </span>Locations
          World wide
        </p>
        <p>2022&copy; </p>
      </div>
    </footer>
  );
};

export default Footer;
