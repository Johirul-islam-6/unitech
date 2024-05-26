import "./Notics.css";

export const NoticsCard = ({ allNotic }) => {
  return (
    <>
      {allNotic?.map((item, index) => (
        <a
          key={index}
          className="relative border-4 border-amber-700 md:px-0 article cursor-pointer rounded-lg"
          rel="noopener noreferrer"
          href={item.PdfLink}
          aria-label={item.NoticTitle}
        >
          <div className="absolute w-[100%] h-[100%] bg-[#00000056]">
            <div className="flex flex-col absolute bottom-0 px-2 py-3 justify-end items-start">
              <div className="d">
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-white">
                  {item.NoticTitle}
                </h3>
                <span className="text-amber-300 font-[800]">{item.CDate}</span>
              </div>
            </div>
          </div>

          <img
            alt=""
            className="object-cover w-[400px] h-[300px] dark:bg-gray-500 rounded-lg"
            src={item.PdfImage}
          />
        </a>
      ))}
    </>
  );
};
