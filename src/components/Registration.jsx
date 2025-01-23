/* eslint-disable react/prop-types */

export default function Registration({ RegistrationData }) {
  console.log(RegistrationData);
  return (
    <section className="">
      <p className="text-center py-7">
        <i className="text-4xl font-extrabold text-center text-blue-500 uppercase">
          New Forms
        </i>
      </p>

      <article className="flex justify-center items-center flex-wrap bg-gray-100 p-4 m-2">
        {RegistrationData.map((element) => (
          <article
            key={element.id}
            className="hover:bg-blue-300 bg-blue-100 overflow-hidden mx-auto rounded-lg p-2 m-2 border-2 w-[300px]
          h-[200px]"
          >
            <a href={`${element.link}`} target="_blank">
              <img
                src={element.imageUrl}
                alt="registration-services-image"
                className="rounded-lg"
                width={300}
                height={200}
              />
            </a>
            <p className="font-bold text-1xl text-center">{element.title}</p>
          </article>
        ))}
      </article>
    </section>
  );
}
