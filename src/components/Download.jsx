/* eslint-disable react/prop-types */
export default function Download({ DownloadServices }) {
  return (
    <section className="pt-20" id="downloadServices">
      <p className="text-center my-4">
        <i
          className="text-[2rem] text-green-700 font-extrabold text-center  my-5"
          id="space-mono-bold-italic"
        >
          Download Services
        </i>
      </p>
      <article className="bg-gray-200 rounded-lg flex flex-wrap  lg:justify-start justify-center items-center gap-4 p-8 m-2 py-12 shadow-2xl shadow-green-800">
        {DownloadServices.map((element) => {
          return (
            <article
              key={element.id}
              className="w-[300px] h-[220px] hover:border-2 hover:border-green-400 rounded-2xl overflow-y-hidden bg-green-100 hover:bg-green-200"
            >
              <a href={`${element.link}`} target="_blank">
                <img
                  src={element.imageUrl}
                  alt="download-image"
                  className=""
                  width={300}
                  height={200}
                />
              </a>
              <p className="text-[0.9rem] font-semibold text-center">
                {element.title}
              </p>
            </article>
          );
        })}
      </article>
    </section>
  );
}
