const CategoryItem = ({ category: { src, name } }) => {
  return (
    <div className="border-4 rounded-xl min-w-56 flex h-96 flex-1 justify-center items-center relative overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:scale-105 hover:shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] transition-all duration-300 group">
      <div
        className="bg-cover absolute top-0 left-0 w-full h-full z-0 group-hover:scale-110 transition-all duration-1000"
        style={{ backgroundImage: `url(${src})` }}
      />
      <div className="p-2 text-center z-10 bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 text-white shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
        <h1 className="text-2xl">{name}</h1>
        <p className="text-sm">Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
