/* eslint-disable react/prop-types */
export default function Download({ DownloadServices }) {
  console.log(DownloadServices);
  return (
    <section className="pt-20" id="downloadServices">
      <p className="text-center my-4">
        <i className="text-[1.5rem] text-green-700 font-extrabold text-center uppercase my-5">
          Download Services
        </i>
      </p>
      <article className="bg-gray-100 rounded-lg flex flex-wrap justify-start items-center gap-4 p-4 m-2 py-10">
        {DownloadServices.map((element) => {
          return (
            <article
              key={element.id}
              className="w-[300px] h-[220px] border-2 rounded-lg m-2 p-4 bg-green-100 hover:bg-green-200"
            >
              <a href={`${element.link}`} target="_blank">
                <img
                  src={element.imageUrl}
                  alt="download-image"
                  className="rounded-2xl"
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
