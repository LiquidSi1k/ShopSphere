const CategoryItem = ({ category: { src, name } }) => {
  return (
    <div className="border-4 hover:border-2 hover:mx-[2px] border-slate-300 rounded-xl min-w-[30%] flex h-96 flex-1 justify-center items-center relative overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition-all duration-200 group cursor-pointer">
      <div
        className="bg-cover bg-center absolute top-0 left-0 w-full h-full z-[-1] group-hover:scale-110 transition-all duration-1000"
        style={{ backgroundImage: `url(${src})` }}
      />
      <div className="p-2 text-center z-10 bg-slate-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 text-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] group-hover:brightness-110 ">
        <h1 className="text-3xl font-semibold">{name}</h1>
        <p className="text-lg">Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
